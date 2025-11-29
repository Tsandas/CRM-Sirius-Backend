import jwt from "jsonwebtoken";
import { JWTPayload } from "../../types/auth";
import { getEnvVar } from "../getEnvVar";

export const decodeRefreshToken = (token: string): JWTPayload => {
  return jwt.verify(
    token,
    getEnvVar("REFRESH_TOKEN_SECRET") as string
  ) as JWTPayload;
};

export const decodeAccessToken = (token: string): JWTPayload => {
  return jwt.verify(
    token,
    getEnvVar("ACCESS_TOKEN_SECRET") as string
  ) as JWTPayload;
};
