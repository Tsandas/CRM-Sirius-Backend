import dotenv from "dotenv";
import pool from "../config/db";
import { Agent } from "../types/PostgresDB/agent";
dotenv.config();

export const agentExistsService = async (agentId: number, username: string) => {
  const query = `SELECT 1
    FROM agents
    WHERE agent_id = $1
      OR username = $2
    LIMIT 1;`;
  const result = await pool.query(query, [agentId, username]);
  const agentExists = result.rows.length > 0;
  return agentExists;
};

export const createAgentService = async (agentData: Agent) => {};
