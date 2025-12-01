import bcrypt from "bcrypt";
import pool from "../config/db";
import { loginService } from "../models/authenticationModels";

jest.mock("../config/db");
jest.mock("bcrypt");
jest.mock("../config/redis", () => ({
  getRedis: jest.fn().mockReturnValue({
    set: jest.fn().mockResolvedValue("OK"),
  }),
}));

describe("loginService", () => {
  it("Returns user with tokens if credentials are correct", async () => {
    (pool.query as jest.Mock).mockResolvedValue({
      rows: [{ agent_id: 1, username: "alice", password: "hashed" }],
    });
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);

    const result = await loginService("alice", "password");
    console.log(result);
    expect(result).toHaveProperty("accessToken");
    expect(result).toHaveProperty("refreshToken");
  });
});
