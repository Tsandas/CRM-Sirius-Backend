import { Request } from "express";

export const extractToken = (req: Request): string | null => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    if (token) return token;
  }

  //   if (
  //     req.headers["x-access-token"] &&
  //     typeof req.headers["x-access-token"] === "string"
  //   ) {
  //     return req.headers["x-access-token"];
  //   }

  //   if (req.query.token && typeof req.query.token === "string") {
  //     return req.query.token;
  //   }

  //   if (req.body?.token && typeof req.body.token === "string") {
  //     return req.body.token;
  //   }

  //   if ((req as any).cookies?.token) {
  //     return (req as any).cookies.token;
  //   }

  return null;
};
