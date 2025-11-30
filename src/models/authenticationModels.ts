import bcrypt from "bcrypt";
import { mapAgentRow } from "../utils/Mapping/mapAgent";
import pool from "../config/db";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/Authentication/generateTokens";
import { redis } from "../config/redis";

export const loginService = async (username: string, plainPassword: string) => {
  const query = `
    SELECT *
    FROM agents
    WHERE username = $1
    LIMIT 1
  `;
  const result = await pool.query(query, [username]);
  const data = result.rows[0];
  if (!data) return null;
  const agent = mapAgentRow(data);
  if (!agent) return null;
  const match = await bcrypt.compare(plainPassword.trim(), agent.password);
  if (!match) return null;
  const payload = {
    agentId: agent.agentId.toString(),
    username: agent.username,
    role: agent.role,
  };
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);
  await storeRefreshToken(username, refreshToken);
  return {
    agentId: agent.agentId,
    username: agent.username,
    role: agent.role,
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};

const storeRefreshToken = async (username: string, refreshToken: string) => {
  await redis.set(
    `refresh_token:${username}`,
    refreshToken,
    "EX",
    7 * 24 * 60 * 60
  );
};
