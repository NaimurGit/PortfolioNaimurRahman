import { config } from "dotenv";
import path from "node:path";
import type { MongoMemoryServer } from "mongodb-memory-server";

config({ path: ".env.local", quiet: true });
config({ quiet: true });

import {
  getMongoUri,
  isPortOpen,
  LOCAL_DATA_DIR,
  parseMongoTarget,
  startEmbeddedMongo,
} from "./lib/mongo-utils";
import { disconnectDatabase, seedIfEmpty } from "./lib/ensure-seed";

async function main() {
  const uri = getMongoUri();
  const { host, port, local } = parseMongoTarget(uri);

  let embedded: MongoMemoryServer | null = null;

  if (!local) {
    console.log(
      `Using external MongoDB at ${host}:${port}. Nothing to start locally.`
    );
  } else if (await isPortOpen(port)) {
    console.log(`MongoDB is already running on ${host}:${port}. Reusing it.`);
  } else {
    const dbPath = path.resolve(LOCAL_DATA_DIR);
    console.log(`Starting embedded MongoDB on port ${port} (data: ${dbPath})...`);
    const started = await startEmbeddedMongo(port, dbPath);
    embedded = started.server;
    console.log(`MongoDB ready: ${started.uri}`);
  }

  try {
    const seeded = await seedIfEmpty();
    if (seeded) {
      console.log("Database was empty, so the portfolio content was seeded.");
    } else {
      console.log("Database already has content. Run `npm run seed` to reset it.");
    }
  } catch (error) {
    console.error("Could not check/seed the database:", error);
  } finally {
    await disconnectDatabase().catch(() => undefined);
  }

  if (!embedded) {
    return;
  }

  let stopping = false;
  const shutdown = async (signal: string) => {
    if (stopping) return;
    stopping = true;
    console.log(`\n${signal} received — stopping MongoDB...`);
    await embedded.stop({ doCleanup: false }).catch(() => undefined);
    process.exit(0);
  };

  process.on("SIGINT", () => void shutdown("SIGINT"));
  process.on("SIGTERM", () => void shutdown("SIGTERM"));

  console.log("Local MongoDB is running. Keep this process alive while developing.");
  setInterval(() => {}, 1 << 30);
}

main().catch((error) => {
  console.error("Could not start the local MongoDB instance:", error);
  process.exit(1);
});
