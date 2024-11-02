import fs from "node:fs";

import {
  cachified as baseCachified,
  mergeReporters,
  totalTtl,
  verboseReporter,
} from "@epic-web/cachified";
import { remember } from "@epic-web/remember";
import { default as Database } from "better-sqlite3";
import { LRUCache } from "lru-cache";
import { z } from "zod";

import { cachifiedTimingReporter } from "./timing.server.ts";

import type {
  Cache,
  CacheEntry,
  CachifiedOptions,
  CreateReporter,
} from "@epic-web/cachified";

import type { Timings } from "./timing.server.ts";

const CACHE_DATABASE_PATH = process.env.CACHE_DATABASE_PATH;

const cacheDb = remember("cacheDb", createDatabase);

function createDatabase(tryAgain = true): Database.Database {
  const db = new Database(CACHE_DATABASE_PATH);

  try {
    // create cache table with metadata JSON column and value JSON column if it does not exist already
    db.exec(`
			CREATE TABLE IF NOT EXISTS cache (
				key TEXT PRIMARY KEY,
				metadata TEXT,
				value TEXT
			)
		`);
  } catch (error: unknown) {
    fs.unlinkSync(CACHE_DATABASE_PATH);
    if (tryAgain) {
      console.error(
        `Error creating cache database, deleting the file at "${CACHE_DATABASE_PATH}" and trying again...`,
      );
      return createDatabase(false);
    }
    throw error;
  }
  return db;
}

const lru = remember(
  "lru-cache",
  () => new LRUCache<string, CacheEntry<unknown>>({ max: 5000 }),
);

export const lruCache = {
  delete: (key) => lru.delete(key),
  get: (key) => lru.get(key),
  name: "app-memory-cache",
  set: (key, value) => {
    const ttl = totalTtl(value?.metadata);
    lru.set(key, value, {
      start: value?.metadata?.createdTime,
      ttl: ttl === Number.POSITIVE_INFINITY ? undefined : ttl,
    });
    return value;
  },
} satisfies Cache;

const cacheEntrySchema = z.object({
  metadata: z.object({
    createdTime: z.number(),
    swr: z.number().nullable().optional(),
    ttl: z.number().nullable().optional(),
  }),
  value: z.unknown(),
});

const cacheQueryResultSchema = z.object({
  metadata: z.string(),
  value: z.string(),
});

export const cache: Cache = {
  delete(key) {
    cacheDb.prepare("DELETE FROM cache WHERE key = ?").run(key);
  },
  get(key) {
    const result = cacheDb
      .prepare("SELECT value, metadata FROM cache WHERE key = ?")
      .get(key);

    const parseResult = cacheQueryResultSchema.safeParse(result);
    if (!parseResult.success) {
      return null;
    }

    const parsedEntry = cacheEntrySchema.safeParse({
      metadata: JSON.parse(parseResult.data.metadata),
      value: JSON.parse(parseResult.data.value),
    });
    if (!parsedEntry.success) {
      return null;
    }
    const { metadata, value } = parsedEntry.data;
    if (!value) {
      return null;
    }
    return { metadata, value };
  },
  name: "SQLite cache",
  set(key, entry) {
    cacheDb
      .prepare(
        "INSERT OR REPLACE INTO cache (key, value, metadata) VALUES (@key, @value, @metadata)",
      )
      .run({
        key,
        metadata: JSON.stringify(entry.metadata),
        value: JSON.stringify(entry.value),
      });
  },
};

export function getAllCacheKeys(limit: number) {
  return {
    lru: [...lru.keys()],
    sqlite: cacheDb
      .prepare("SELECT key FROM cache LIMIT ?")
      .all(limit)
      .map((row) => (row as { key: string }).key),
  };
}

export function searchCacheKeys(search: string, limit: number) {
  return {
    lru: [...lru.keys()].filter((key) => key.includes(search)),
    sqlite: cacheDb
      .prepare("SELECT key FROM cache WHERE key LIKE ? LIMIT ?")
      .all(`%${search}%`, limit)
      .map((row) => (row as { key: string }).key),
  };
}

export async function cachified<Value>(
  {
    timings,
    ...options
  }: CachifiedOptions<Value> & {
    timings?: Timings;
  },
  reporter: CreateReporter<Value> = verboseReporter<Value>(),
): Promise<Value> {
  return baseCachified(
    options,
    mergeReporters(cachifiedTimingReporter(timings), reporter),
  );
}
