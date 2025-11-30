import { responseHandler } from "../utils/responseHandler";
import { RequestWithToken } from "../types/requests";
import { NextFunction, Response } from "express";
import { getEnvVar } from "../utils/getEnvVar";

export const verifyRegistrationToken = (
  req: RequestWithToken,
  res: Response,
  next: NextFunction
) => {
  let token;
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    if (!token) {
      return responseHandler(
        res,
        401,
        "No registration token provided, authorization denied"
      );
    }
    if (token === getEnvVar("REGISTRATION_TOKEN")) {
      next();
    } else {
      return responseHandler(res, 401, "Invalid Registration Token");
    }
  } else {
    return responseHandler(
      res,
      401,
      "No registration token provided, authorization denied"
    );
  }
};
