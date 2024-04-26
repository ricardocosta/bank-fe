import { Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";

import { ClientHintCheck } from "#app/utils/client-hints.tsx";

import type { Theme } from "#app/theme/types";

type DocumentProps = {
  children: React.ReactNode;
  nonce: string;
  theme?: Theme;
  env?: Record<string, string>;
};

export const Document = ({
  children,
  nonce,
  theme = "light",
  env = {},
}: DocumentProps) => {
  return (
    <html className={`${theme} h-full overflow-x-hidden`} lang="en">
      <head>
        <ClientHintCheck nonce={nonce} />
        <Meta />
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <Links />
      </head>
      <body className="bg-background text-foreground">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(env)}`,
          }}
          nonce={nonce}
        />
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
};
