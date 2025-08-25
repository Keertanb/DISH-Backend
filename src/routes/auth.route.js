import express from "express";
// MIDDLEWARES
// import validateToken from "../middlewares/validateToken.middleware.js";
// import validateSchema from '../middlewares/validateSchema.middleware.js';
import { authRateLimiter } from "../middlewares/rateLimit.middleware.js";
// VALIDATIONS
// import authValidation from "../validations/auth.validation.js";
// CONTROLLERS
import { login, logout, getProfile } from "../controllers/auth.controller.js";

const router = express.Router();

// POST /api/auth/login - User login
router.post("/login", authRateLimiter, login);

// POST /api/auth/logout - User logout
router.post("/logout", logout);

// GET /api/auth/profile - Get current user profile
router.get("/profile", getProfile);

// TODO: Implement refresh token functionality if needed
// router.post("/refresh-token", refreshToken);

export default router;
