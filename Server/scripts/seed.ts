import { config } from "dotenv";

config({ path: ".env.local", quiet: true });
config({ quiet: true });

import { seedDatabase, disconnectDatabase } from "./lib/ensure-seed";

async function main() {
  console.log("Connecting to MongoDB...");

  try {
    const counts = await seedDatabase();
    console.log("Seed complete:", counts);
  } catch (error) {
    console.error("\nSeed failed:", error instanceof Error ? error.message : error);
    console.error(
      "\nMake sure MongoDB is running. Start the local database with:\n" +
        "  npm run db\n" +
        "(or just run `npm run dev`, which starts the database and seeds it automatically).\n"
    );
    process.exitCode = 1;
  } finally {
    await disconnectDatabase().catch(() => undefined);
  }
}

void main();
