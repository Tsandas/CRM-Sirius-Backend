import { Response } from "express";
import { ApiResponse } from "../types/apiResponse";

export const responseHandler = <T = any>(
  res: Response,
  status: number,
  message: string,
  data: T | null = null
): void => {
  const success = status >= 200 && status < 400;
  const response: ApiResponse<T> = { success, status, message, data };
  res.status(status).json(response);
};
