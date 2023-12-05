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
import { prisma } from "#app/utils/db.server.ts";
import { authSessionStorage } from "#app/utils/session.server.ts";

import { createUser, getUserImages } from "#tests/db-utils.ts";

import { loader, default as UsernameRoute } from "./$username.tsx";

describe("username", () => {
  it("the user profile when not logged in as self", async () => {
    const userImages = await getUserImages();
    const userImage =
      userImages[faker.number.int({ min: 0, max: userImages.length - 1 })];
    const user = await prisma.user.create({
      select: { id: true, username: true, name: true },
      data: { ...createUser(), image: { create: userImage } },
    });
    const App = createRemixStub([
      {
        path: "/users/:username",
        Component: UsernameRoute,
        loader,
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
      userImages[faker.number.int({ min: 0, max: userImages.length - 1 })];
    const user = await prisma.user.create({
      select: { id: true, username: true, name: true },
      data: { ...createUser(), image: { create: userImage } },
    });
    const session = await prisma.session.create({
      select: { id: true },
      data: {
        expirationDate: getSessionExpirationDate(),
        userId: user.id,
      },
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
        id: "root",
        path: "/",
        loader: async (args) => {
          // add the cookie header to the request
          args.request.headers.set("cookie", cookieHeader);
          return rootLoader(args);
        },
        children: [
          {
            path: "users/:username",
            Component: UsernameRoute,
            loader: async (args) => {
              // add the cookie header to the request
              args.request.headers.set("cookie", cookieHeader);
              return loader(args);
            },
          },
        ],
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
