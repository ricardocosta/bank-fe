import { redirect } from "@remix-run/node";
import { default as bcrypt } from "bcryptjs";
import { safeRedirect } from "remix-utils/safe-redirect";

import { prisma } from "./db/db.server.ts";
import { combineHeaders } from "./misc.tsx";
import { authSessionStorage } from "./session.server.ts";

import type { Password, User } from "@prisma/client";

export const SESSION_EXPIRATION_TIME = 1000 * 60 * 60 * 24 * 30;
export const getSessionExpirationDate = () =>
  new Date(Date.now() + SESSION_EXPIRATION_TIME);

export const sessionKey = "sessionId";

export async function getUserId(request: Request) {
  const authSession = await authSessionStorage.getSession(
    request.headers.get("cookie"),
  );
  const sessionId = authSession.get(sessionKey);
  if (!sessionId) {
    return null;
  }
  const session = await prisma.session.findUnique({
    select: { user: { select: { id: true } } },
    where: { expirationDate: { gt: new Date() }, id: sessionId },
  });
  if (!session?.user) {
    throw redirect("/", {
      headers: {
        "set-cookie": await authSessionStorage.destroySession(authSession),
      },
    });
  }
  return session.user.id;
}

export async function requireUserId(
  request: Request,
  { redirectTo }: { redirectTo?: string | null } = {},
) {
  const userId = await getUserId(request);
  if (!userId) {
    const requestUrl = new URL(request.url);
    redirectTo =
      redirectTo === null
        ? null
        : (redirectTo ?? `${requestUrl.pathname}${requestUrl.search}`);
    const loginParams = redirectTo ? new URLSearchParams({ redirectTo }) : null;
    const loginRedirect = ["/login", loginParams?.toString()]
      .filter(Boolean)
      .join("?");
    throw redirect(loginRedirect);
  }
  return userId;
}

export async function requireAnonymous(request: Request) {
  const userId = await getUserId(request);
  if (userId) {
    throw redirect("/");
  }
}

export async function login({
  username,
  password,
}: {
  username: User["username"];
  password: string;
}) {
  const user = await verifyUserPassword({ username }, password);
  if (!user) {
    return null;
  }
  const session = await prisma.session.create({
    data: {
      expirationDate: getSessionExpirationDate(),
      userId: user.id,
    },
    select: { expirationDate: true, id: true, userId: true },
  });
  return session;
}

export async function resetUserPassword({
  username,
  password,
}: {
  username: User["username"];
  password: string;
}) {
  const hashedPassword = await getPasswordHash(password);
  return prisma.user.update({
    data: {
      password: {
        update: {
          hash: hashedPassword,
        },
      },
    },
    where: { username },
  });
}

export async function signup({
  email,
  username,
  password,
  name,
}: {
  email: User["email"];
  username: User["username"];
  name: User["name"];
  password: string;
}) {
  const hashedPassword = await getPasswordHash(password);

  const session = await prisma.session.create({
    data: {
      expirationDate: getSessionExpirationDate(),
      user: {
        create: {
          email: email.toLowerCase(),
          name,
          password: {
            create: {
              hash: hashedPassword,
            },
          },
          roles: { connect: { name: "user" } },
          username: username.toLowerCase(),
        },
      },
    },
    select: { expirationDate: true, id: true },
  });

  return session;
}

export async function logout(
  {
    request,
    redirectTo = "/",
  }: {
    request: Request;
    redirectTo?: string;
  },
  responseInit?: ResponseInit,
) {
  const authSession = await authSessionStorage.getSession(
    request.headers.get("cookie"),
  );
  const sessionId = authSession.get(sessionKey);
  // if this fails, we still need to delete the session from the user's browser
  // and it doesn't do any harm staying in the db anyway.
  if (sessionId) {
    await prisma.session.deleteMany({ where: { id: sessionId } });
  }

  throw redirect(safeRedirect(redirectTo), {
    ...responseInit,
    headers: combineHeaders(
      { "set-cookie": await authSessionStorage.destroySession(authSession) },
      responseInit?.headers,
    ),
  });
}

export async function getPasswordHash(password: string) {
  const passwordHash = await bcrypt.hash(password, 10);
  return passwordHash;
}

export async function verifyUserPassword(
  where: Pick<User, "username"> | Pick<User, "id">,
  password: Password["hash"],
) {
  const userWithPassword = await prisma.user.findUnique({
    select: { id: true, password: { select: { hash: true } } },
    where,
  });

  if (!userWithPassword?.password) {
    return null;
  }

  const isValid = await bcrypt.compare(
    password,
    userWithPassword.password.hash,
  );

  if (!isValid) {
    return null;
  }

  return { id: userWithPassword.id };
}
