import { faker } from "@faker-js/faker";
import { http } from "msw";

import { twoFAVerificationType } from "#app/routes/settings+/profile.two-factor.tsx";
import {
  getSessionExpirationDate,
  sessionKey,
} from "#app/utils/auth.server.ts";
import { connectionSessionStorage } from "#app/utils/connections.server.ts";
import { GITHUB_PROVIDER_NAME } from "#app/utils/connections.tsx";
import { prisma } from "#app/utils/db.server.ts";
import { authSessionStorage } from "#app/utils/session.server.ts";
import { generateTOTP } from "#app/utils/totp.server.ts";

import { createUser } from "#tests/db-utils.ts";
import { deleteGitHubUsers, insertGitHubUser } from "#tests/mocks/github.ts";
import { server } from "#tests/mocks/index.ts";
import { consoleError } from "#tests/setup/setup-test-env.ts";
import { BASE_URL, convertSetCookieToCookie } from "#tests/utils.ts";

import { loader } from "./auth.$provider.callback.ts";

const ROUTE_PATH = "/auth/github/callback";
const PARAMS = { provider: "github" };

describe("auth provider callback", () => {
  afterEach(async () => {
    await deleteGitHubUsers();
  });

  it("a new user goes to onboarding", async () => {
    const request = await setupRequest();
    const response = await loader({ request, params: PARAMS, context: {} });
    expect(response).toHaveRedirect("/onboarding/github");
  });

  it("when auth fails, send the user to login with a toast", async () => {
    consoleError.mockImplementation(() => {});
    server.use(
      http.post("https://github.com/login/oauth/access_token", () => {
        return new Response("error", { status: 400 });
      }),
    );
    const request = await setupRequest();

    const loaderRet = loader({ request, params: PARAMS, context: {} });

    await expect(loaderRet).rejects.toHaveRedirect("/login");
    await expect(loaderRet).rejects.toSendToast({
      title: "Auth Failed",
      description: `There was an error authenticating with GitHub.`,
      type: "error",
    });
  });

  it("when a user is logged in, it creates the connection", async () => {
    const githubUser = await insertGitHubUser();
    const session = await setupUser();
    const request = await setupRequest({
      sessionId: session.id,
      code: githubUser.code,
    });
    const response = await loader({ request, params: PARAMS, context: {} });
    expect(response).toHaveRedirect("/settings/profile/connections");
    await expect(response).toSendToast({
      title: "Connected",
      type: "success",
      description: githubUser.profile.login,
    });
    const connection = await prisma.connection.findFirst({
      select: { id: true },
      where: {
        userId: session.userId,
        providerId: githubUser.profile.id.toString(),
      },
    });
    expect(
      connection,
      "the connection was not created in the database",
    ).toBeTruthy();
  });

  it(`when a user is logged in and has already connected, it doesn't do anything and just redirects the user back to the connections page`, async () => {
    const session = await setupUser();
    const githubUser = await insertGitHubUser();
    await prisma.connection.create({
      data: {
        providerName: GITHUB_PROVIDER_NAME,
        userId: session.userId,
        providerId: githubUser.profile.id.toString(),
      },
    });
    const request = await setupRequest({
      sessionId: session.id,
      code: githubUser.code,
    });
    const response = await loader({ request, params: PARAMS, context: {} });
    expect(response).toHaveRedirect("/settings/profile/connections");
    await expect(response).toSendToast({
      title: "Already Connected",
      type: "message",
      description: githubUser.profile.login,
    });
  });

  it("when a user exists with the same email, create connection and make session", async () => {
    const githubUser = await insertGitHubUser();
    const email = githubUser.primaryEmail.toLowerCase();
    const { userId } = await setupUser({ ...createUser(), email });
    const request = await setupRequest({ code: githubUser.code });
    const response = await loader({ request, params: PARAMS, context: {} });

    expect(response).toHaveRedirect("/");

    await expect(response).toSendToast({
      title: "Connected",
      type: "message",
      description: githubUser.profile.login,
    });

    const connection = await prisma.connection.findFirst({
      select: { id: true },
      where: {
        userId: userId,
        providerId: githubUser.profile.id.toString(),
      },
    });

    expect(
      connection,
      "the connection was not created in the database",
    ).toBeTruthy();

    await expect(response).toHaveSessionForUser(userId);
  });

  it("gives an error if the account is already connected to another user", async () => {
    const githubUser = await insertGitHubUser();
    await prisma.user.create({
      data: {
        ...createUser(),
        connections: {
          create: {
            providerName: GITHUB_PROVIDER_NAME,
            providerId: githubUser.profile.id.toString(),
          },
        },
      },
    });
    const session = await setupUser();
    const request = await setupRequest({
      sessionId: session.id,
      code: githubUser.code,
    });
    const response = await loader({ request, params: PARAMS, context: {} });
    expect(response).toHaveRedirect("/settings/profile/connections");
    await expect(response).toSendToast({
      title: "Already Connected",
      type: "message",
      description: "already connected to another account",
    });
  });

  it("if a user is not logged in, but the connection exists, make a session", async () => {
    const githubUser = await insertGitHubUser();
    const { userId } = await setupUser();
    await prisma.connection.create({
      data: {
        providerName: GITHUB_PROVIDER_NAME,
        providerId: githubUser.profile.id.toString(),
        userId,
      },
    });
    const request = await setupRequest({ code: githubUser.code });
    const response = await loader({ request, params: PARAMS, context: {} });
    expect(response).toHaveRedirect("/");
    await expect(response).toHaveSessionForUser(userId);
  });

  it("if a user is not logged in, but the connection exists and they have enabled 2FA, send them to verify their 2FA and do not make a session", async () => {
    const githubUser = await insertGitHubUser();
    const { userId } = await setupUser();
    await prisma.connection.create({
      data: {
        providerName: GITHUB_PROVIDER_NAME,
        providerId: githubUser.profile.id.toString(),
        userId,
      },
    });
    const { otp: _otp, ...config } = generateTOTP();
    await prisma.verification.create({
      data: {
        type: twoFAVerificationType,
        target: userId,
        ...config,
      },
    });
    const request = await setupRequest({ code: githubUser.code });
    const response = await loader({ request, params: PARAMS, context: {} });
    const searchParams = new URLSearchParams({
      type: twoFAVerificationType,
      target: userId,
      redirectTo: "/",
    });
    expect(response).toHaveRedirect(`/verify?${searchParams.toString()}`);
  });
});

async function setupRequest({
  sessionId,
  code = faker.string.uuid(),
}: { sessionId?: string; code?: string } = {}) {
  const url = new URL(ROUTE_PATH, BASE_URL);
  const state = faker.string.uuid();
  url.searchParams.set("state", state);
  url.searchParams.set("code", code);
  const connectionSession = await connectionSessionStorage.getSession();
  connectionSession.set("oauth2:state", state);
  const authSession = await authSessionStorage.getSession();
  if (sessionId) {
    authSession.set(sessionKey, sessionId);
  }
  const setSessionCookieHeader =
    await authSessionStorage.commitSession(authSession);
  const setConnectionSessionCookieHeader =
    await connectionSessionStorage.commitSession(connectionSession);
  const request = new Request(url.toString(), {
    method: "GET",
    headers: {
      cookie: [
        convertSetCookieToCookie(setConnectionSessionCookieHeader),
        convertSetCookieToCookie(setSessionCookieHeader),
      ].join("; "),
    },
  });
  return request;
}

async function setupUser(userData = createUser()) {
  const session = await prisma.session.create({
    data: {
      expirationDate: getSessionExpirationDate(),
      user: {
        create: {
          ...userData,
        },
      },
    },
    select: {
      id: true,
      userId: true,
    },
  });

  return session;
}
