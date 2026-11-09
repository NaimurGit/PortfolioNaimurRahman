import { mkdir } from "node:fs/promises";
import net from "node:net";
import { MongoMemoryServer } from "mongodb-memory-server";

export const DEFAULT_LOCAL_URI = "mongodb://127.0.0.1:27017/turjofolio";
export const LOCAL_DATA_DIR = ".data/db";

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1", "0.0.0.0"]);

export function getMongoUri(): string {
  return process.env.MONGODB_URI?.trim() || DEFAULT_LOCAL_URI;
}

export interface MongoTarget {
  host: string;
  port: number;
  local: boolean;
}

export function parseMongoTarget(uri: string): MongoTarget {
  try {
    const url = new URL(uri);
    const host = url.hostname || "127.0.0.1";
    return { host, port: Number(url.port || 27017), local: LOCAL_HOSTS.has(host) };
  } catch {
    return { host: "", port: 27017, local: false };
  }
}

export function isPortOpen(port: number, host = "127.0.0.1", timeout = 800): Promise<boolean> {
  return new Promise((resolve) => {
    const socket = net.createConnection({ port, host });
    let settled = false;

    const finish = (result: boolean) => {
      if (settled) return;
      settled = true;
      socket.destroy();
      resolve(result);
    };

    socket.setTimeout(timeout);
    socket.once("connect", () => finish(true));
    socket.once("timeout", () => finish(false));
    socket.once("error", () => finish(false));
  });
}

export interface EmbeddedMongo {
  server: MongoMemoryServer;
  uri: string;
}

export async function startEmbeddedMongo(
  port: number,
  dbPath: string,
  dbName = "turjofolio"
): Promise<EmbeddedMongo> {
  await mkdir(dbPath, { recursive: true });

  const server = await MongoMemoryServer.create({
    instance: {
      port,
      ip: "127.0.0.1",
      dbName,
      dbPath,
      storageEngine: "wiredTiger",
    },
  });

  return { server, uri: server.getUri(dbName) };
}
