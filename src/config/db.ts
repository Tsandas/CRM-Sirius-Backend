import pg from "pg";
import { getEnvVar } from "../utils/getEnvVar";
const { Pool } = pg;

const pool = new Pool({
  user: getEnvVar("USER"),
  password: getEnvVar("PASSWORD"),
  host: getEnvVar("HOST"),
  port: parseInt(getEnvVar("PG_PORT"), 10),
  database: getEnvVar("DATABASE"),
  ssl: {
    rejectUnauthorized: true,
    ca: getEnvVar("CA"),
  },
});

export default pool;
