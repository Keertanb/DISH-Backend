import express from "express";
// MIDDLEWARES
import validateToken from "../middlewares/validateToken.middleware.js";
// import validateSchema from '../middlewares/validateSchema.middleware.js';
import { authRateLimiter } from "../middlewares/rateLimit.middleware.js";
// VALIDATIONS
import authValidation from "../../validations/auth.validation.js";
// CONTROLLERS
import authController from "../controllers/auth.controller.js";

const router = express.Router();

// POST /api/auth/login - User login
router.post("/login", authRateLimiter, authController.login);

// POST /api/auth/logout - User logout
router.post("/logout", validateToken, authController.logout);

// POST /api/auth/refresh-token - Refresh access token
router.post("/refresh-token", authController.refreshToken);

// GET /api/auth/profile - Get current user profile
router.get("/profile", validateToken, authController.getProfile);

export default router;
