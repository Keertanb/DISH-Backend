import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// SERVICES
import authService from "../services/auth.service.js";
// UTILS
import logger from "../utils/logger.js";

/**
 * Login user with username and password
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const login = async (req, res) => {
  try {
    console.log(req, "<><><><><>><<<<<<<<<<<<<<<<");
    const { userName, password, isForcedLogin = false } = req.body;

    // Input validation
    if (!userName || !password) {
      return res.handler.badRequest({}, "Username and password are required");
    }

    // Get user by username
    const user = await authService.getUserByUserName(userName);
    if (!user) {
      return res.handler.notFound({}, "Invalid Credentials");
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.userPassword);
    if (!isPasswordValid) {
      return res.handler.notFound({}, "Invalid Credentials");
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.userId },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "2d" }
    );

    // Create user session
    const session = await authService.createUserSession(
      user.userId,
      token,
      req.ip || "",
      isForcedLogin
    );

    if (!session) {
      return res.handler.serverError({}, "Session creation failed");
    }

    if (session.isAlreadyLoggedIn) {
      return res.handler.forbidden({}, "Already logged in");
    }

    // Return success response
    return res.handler.success(
      {
        userId: user.userId,
        userName: user.userName,
        email: user.userEmail,
        token,
        isReset: user.isReset,
        roles: user.roles,
      },
      "Login successful"
    );
  } catch (error) {
    logger.error("Login error:", { error, req: req.body });
    return res.handler.serverError({}, error.message || "Login failed");
  }
};

/**
 * Logout user by invalidating the current session
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const logout = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || "";

    await authService.updateUserSession(req.user.userId, token, "logout");

    return res.handler.success({}, "Logout successful");
  } catch (error) {
    logger.error("Logout error:", {
      error,
      userId: req.user?.userId,
      token: req.headers.authorization?.split(" ")[1],
    });
    return res.handler.serverError({}, error.message || "Logout failed");
  }
};

/**
 * Get current user profile
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const getProfile = async (req, res) => {
  try {
    // In a real implementation, you might want to get fresh user data
    // For now, we'll just return the user from the request
    const { userId, userName, email, roles } = req.user;

    return res.handler.success(
      { userId, userName, email, roles },
      "Profile retrieved successfully"
    );
  } catch (error) {
    logger.error("Get profile error:", { error });
    return res.handler.serverError(
      {},
      error.message || "Failed to retrieve profile"
    );
  }
};

export default {
  login,
  logout,
  getProfile,
};
