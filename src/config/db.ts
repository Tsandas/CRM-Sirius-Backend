import pg from "pg";
import fs from "fs";
import dotenv from "dotenv";
import { getEnvVar } from "../utils/getEnvVar";
dotenv.config();
const { Pool } = pg;

let sslConfig;
if (process.env.NODE_ENV === "production") {
  sslConfig = {
    rejectUnauthorized: true,
    ca: getEnvVar("CA"),
  };
  console.log("Using ca directly");
} else {
  sslConfig = {
    rejectUnauthorized: true,
    ca: fs.readFileSync(getEnvVar("CA")).toString(),
  };
}

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: parseInt(getEnvVar("PORT"), 10),
  database: process.env.DATABASE,
  ssl: sslConfig,
});

pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL with SSL"))
  .catch((err: Error) => console.error("Error connecting to PostgreSQL:", err));

export default pool;
