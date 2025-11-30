import pg from "pg";
import { getEnvVar } from "../utils/getEnvVar";
const { Pool } = pg;

const pool = new Pool({
  user: getEnvVar("USER"),
  password: getEnvVar("PASSWORD"),
  host: getEnvVar("HOST"),
  port: parseInt(getEnvVar("PORT"), 10),
  database: getEnvVar("DATABASE"),
  ssl: {
    rejectUnauthorized: true,
    ca: getEnvVar("CA"),
  }
});

pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL with SSL"))
  .catch((err: Error) => console.error("Error connecting to PostgreSQL:", err));

export default pool;
