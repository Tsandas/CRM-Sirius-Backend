import express from "express";
import { authenticationLogin, refreshToken } from "../controllers/authentication.controller";
import { verifyRefreshToken } from "../middleware/authorizationMiddleware";


const router = express.Router();

router.post("/login", authenticationLogin);
router.post("/refresh-token", verifyRefreshToken, refreshToken);

export default router;
