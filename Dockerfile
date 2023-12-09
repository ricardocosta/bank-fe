# This file is moved to the root directory before building the image

# base node image
FROM node:20-bookworm-slim as base

# Install openssl for Prisma
RUN apt-get update && apt-get install -y fuse3 openssl sqlite3 ca-certificates

RUN corepack enable

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /bank-fe

ADD package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install

# Setup production node_modules
FROM base as production-deps

ENV NODE_ENV production
WORKDIR /bank-fe

COPY --from=deps /bank-fe/node_modules /bank-fe/node_modules
ADD package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install

# Build the app
FROM base as build

WORKDIR /bank-fe

COPY --from=deps /bank-fe/node_modules /bank-fe/node_modules

# TODO: Add only what is needed for build, not the entire directory
ADD . .
RUN pnpm run build

# Finally, build the production image with minimal footprint
FROM base

ENV DATABASE_URL="file:/data/data.db?connection_limit=1"
ENV CACHE_DATABASE_PATH="/data/cache.db"
ENV PORT="8080"
ENV NODE_ENV="production"

# add shortcut for connecting to database CLI
RUN echo "#!/bin/sh\nset -x\nsqlite3 \$DATABASE_URL" > /usr/local/bin/database-cli && chmod +x /usr/local/bin/database-cli

WORKDIR /bank-fe

COPY --from=production-deps /bank-fe/node_modules /bank-fe/node_modules
COPY --from=build /bank-fe/index.js /bank-fe/index.js
COPY --from=build /bank-fe/server-build /bank-fe/server-build
COPY --from=build /bank-fe/build /bank-fe/build
COPY --from=build /bank-fe/public /bank-fe/public
COPY --from=build /bank-fe/package.json /bank-fe/package.json
COPY --from=build /bank-fe/prisma /bank-fe/prisma

RUN pnpm run prisma:generate
RUN pnpm run prisma:migrate
RUN sqlite3 $CACHE_DATABASE_PATH "VACUUM;"

CMD ["pnpm", "start"]
