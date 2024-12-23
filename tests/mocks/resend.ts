import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";

import { requireHeader, writeEmail } from "./utils.ts";

import type { HttpHandler } from "msw";

export const handlers: HttpHandler[] = [
  http.post(`https://api.resend.com/emails`, async ({ request }) => {
    requireHeader(request.headers, "Authorization");
    const body = await request.json();
    console.info("🔶 mocked email contents:", body);

    const email = await writeEmail(body);

    return HttpResponse.json({
      created_at: new Date().toISOString(),
      from: email.from,
      id: faker.string.uuid(),
      to: email.to,
    });
  }),
];
