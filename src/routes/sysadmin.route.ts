import express from "express";
import validateAgentScheme from "../middleware/input/agentSchemeValidator";
import { responseHandler } from "../utils/responseHandler";
import { authRegister } from "../controllers/sysadmin.controller";
import { verifyRegistrationToken } from "../middleware/sysadminMiddleware";

const router = express.Router();
router.post(
  "/register",
  verifyRegistrationToken,
  validateAgentScheme,
  authRegister
);
router.delete("/delete", (req, res) => {
  console.log(req.body);
  return responseHandler(res, 200, "Sysadmin delete endpoint");
});

export default router;
