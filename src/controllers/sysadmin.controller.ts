import dotenv from "dotenv";
import { responseHandler } from "../utils/responseHandler";
import { RequestWithBody } from "../types/requests";
import { Agent } from "../types/PostgresDB/agent";
import { agentExistsService } from "../models/sysadminModel";
import { NextFunction, Response } from "express";
dotenv.config();

export const authRegister = async (
  req: RequestWithBody<Agent>,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  try {
    const { agentId, username } = req.body;
    const agentExists = await agentExistsService(agentId, username);
    if (agentExists) {
      return responseHandler(
        res,
        409,
        "Agent with this agentId or username already exists"
      );
    }
    // create user
    // createAgentService(req.body);
    return responseHandler(
      res,
      200,
      "Agent is valid (Agent won't be created for now)",
      req.body
    );
  } catch (error) {
    next(error);
  }
};
