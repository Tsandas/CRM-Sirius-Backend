import Joi from "joi";
import { RequestWithBody } from "../../types/requests";
import { Agent } from "../../types/PostgresDB/agent";
import { NextFunction, Response } from "express";
import { AppError } from "../../Error/appError";

const agentScheme = Joi.object({
  agentId: Joi.string().min(1).required(),
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  // email:   Joi.string().email().required(),
  // phone: Joi.number.min(6).required(),
  username: Joi.string().min(3).required(),
  password: Joi.string().min(3).required(),
  role: Joi.string().min(3).required(),
  active: Joi.boolean().required(),
  lastLogin: Joi.date().required(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
});

const validateAgentScheme = (
  req: RequestWithBody<Agent>,
  res: Response,
  next: NextFunction
) => {
  const { error } = agentScheme.validate(req.body);
  if (error) {
    const appError = new AppError(
      error.message,
      400,
      "Agents should follow the correct agentSchema. Check the correct format."
    );
    return next(appError);
  }
  next();
};

export default validateAgentScheme;
