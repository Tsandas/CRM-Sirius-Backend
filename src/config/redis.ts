import Redis from "ioredis";
import { getEnvVar } from "../utils/getEnvVar";

export const redis = new Redis(getEnvVar("REDIS_URL"));
async function testRedis() {
  try {
    await redis.set("test_key", "test_value");
    console.log("Redics connected successfully");
  } catch (error) {
    console.log("Error connecting to redis" + error);
  }
}
testRedis();
