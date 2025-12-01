import Redis from "ioredis";
import { getEnvVar } from "../utils/getEnvVar";

let redis: Redis | null = null;

export function getRedis() {
  if (!redis) {
    redis = new Redis(getEnvVar("REDIS_URL"));
  }
  return redis;
}

export async function connectRedis() {
  const client = getRedis();
  try {
    await client.ping();
    console.log("Connected to Redis");
  } catch (error) {
    console.error("Error connecting to Redis:", error);
    throw error;
  }
}

export default getRedis;
