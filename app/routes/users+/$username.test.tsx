/**
 * @vitest-environment jsdom
 */
import { faker } from "@faker-js/faker";
import { createRemixStub } from "@remix-run/testing";
import { render, screen } from "@testing-library/react";
import { parseString } from "set-cookie-parser";

import { loader as rootLoader } from "#app/root.tsx";
import {
  getSessionExpirationDate,
  sessionKey,
} from "#app/utils/auth.server.ts";
import { prisma } from "#app/utils/db/db.server.ts";
import { authSessionStorage } from "#app/utils/session.server.ts";

import { createUser, getUserImages } from "#tests/db-utils.ts";

import { loader, default as UsernameRoute } from "./$username.tsx";

describe("username", () => {
  it("the user profile when not logged in as self", async () => {
    const userImages = await getUserImages();
    const userImage =
      userImages[faker.number.int({ max: userImages.length - 1, min: 0 })];
    const user = await prisma.user.create({
      data: { ...createUser(), image: { create: userImage } },
      select: { id: true, name: true, username: true },
    });
    const App = createRemixStub([
      {
        Component: UsernameRoute,
        loader,
        path: "/users/:username",
      },
    ]);

    const routeUrl = `/users/${user.username}`;
    render(<App initialEntries={[routeUrl]} />);

    expect(
      await screen.findByRole("heading", { level: 1, name: user.name! }),
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("img", { name: user.name! }),
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("link", { name: `${user.name}'s notes` }),
    ).toBeInTheDocument();
  });

  it("the user profile when logged in as self", async () => {
    const userImages = await getUserImages();
    const userImage =
      userImages[faker.number.int({ max: userImages.length - 1, min: 0 })];
    const user = await prisma.user.create({
      data: { ...createUser(), image: { create: userImage } },
      select: { id: true, name: true, username: true },
    });
    const session = await prisma.session.create({
      data: {
        expirationDate: getSessionExpirationDate(),
        userId: user.id,
      },
      select: { id: true },
    });

    const authSession = await authSessionStorage.getSession();
    authSession.set(sessionKey, session.id);
    const setCookieHeader = await authSessionStorage.commitSession(authSession);
    const parsedCookie = parseString(setCookieHeader);
    const cookieHeader = new URLSearchParams({
      [parsedCookie.name]: parsedCookie.value,
    }).toString();

    const App = createRemixStub([
      {
        children: [
          {
            Component: UsernameRoute,
            loader: async (args) => {
              // add the cookie header to the request
              args.request.headers.set("cookie", cookieHeader);
              return loader(args);
            },
            path: "users/:username",
          },
        ],
        id: "root",
        loader: async (args) => {
          // add the cookie header to the request
          args.request.headers.set("cookie", cookieHeader);
          return rootLoader(args);
        },
        path: "/",
      },
    ]);

    const routeUrl = `/users/${user.username}`;
    render(<App initialEntries={[routeUrl]} />);

    expect(
      await screen.findByRole("heading", { level: 1, name: user.name! }),
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("img", { name: user.name! }),
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: /logout/i }),
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("link", { name: /my notes/i }),
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("link", { name: /edit profile/i }),
    ).toBeInTheDocument();
  });
});
