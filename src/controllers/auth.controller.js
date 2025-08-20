import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { User, UserSession } from "../models/index.js";
import logger from "../../utils/logger.js";
import config from "../config/index.js";

/**
 * Generate JWT token for user
 * @param {Object} user - User object
 * @returns {String} JWT token
 */
const generateToken = (user) => {
  return jwt.sign(
    {
      userId: user.userId,
      email: user.email,
      roles: user.roles,
    },
    config.jwt.secret,
    { expiresIn: config.jwt.expiresIn }
  );
};

/**
 * Login user and return JWT token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const login = async (req, res) => {
  try {
    const { userName, password, isForcedLogin = false } = req.body;

    // Input validation
    if (!userName || !password) {
      return res.handler.badRequest("Username and password are required");
    }

    // Find user by username
    const user = await User.findOne({ where: { userName } });
    if (!user) {
      return res.handler.unauthorized("Invalid credentials");
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.userPassword);
    if (!isPasswordValid) {
      return res.handler.unauthorized("Invalid credentials");
    }

    // Check for existing active sessions if not forced login
    if (!isForcedLogin) {
      const activeSession = await UserSession.findOne({
        where: { userId: user.userId, status: "active" },
      });

      if (activeSession) {
        return res.handler.conflict(
          "User already logged in. Use force login to continue."
        );
      }
    }

    // Generate JWT token
    const token = generateToken(user);
    const sessionId = uuidv4();
    const ipAddress = req.ip || req.connection.remoteAddress;

    // Create new session
    await UserSession.create({
      sessionId,
      userId: user.userId,
      token,
      ipAddress,
      userAgent: req.headers["user-agent"],
      status: "active",
      expiresAt: new Date(Date.now() + config.jwt.expiresInMs),
    });

    // Return user data with token
    const userData = {
      userId: user.userId,
      userName: user.userName,
      email: user.email,
      roles: user.roles,
      token,
      isReset: user.isReset || false,
    };

    return res.handler.success(userData, "Login successful");
  } catch (error) {
    logger.error("Login error:", error);
    return res.handler.serverError("Login failed");
  }
};

/**
 * Logout user by invalidating the current session
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const logout = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.handler.unauthorized("No token provided");
    }

    // Update session status to logged out
    await UserSession.update(
      { status: "logged_out", loggedOutAt: new Date() },
      { where: { token } }
    );

    return res.handler.success(null, "Logout successful");
  } catch (error) {
    logger.error("Logout error:", error);
    return res.handler.serverError("Logout failed");
  }
};

/**
 * Refresh access token using refresh token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.handler.badRequest("Refresh token is required");
    }

    // Verify refresh token
    const decoded = jwt.verify(refreshToken, config.jwt.refreshSecret);
    const user = await User.findByPk(decoded.userId);

    if (!user) {
      return res.handler.unauthorized("Invalid refresh token");
    }

    // Generate new access token
    const newToken = generateToken(user);

    // Update session with new token
    await UserSession.update(
      { token: newToken },
      { where: { userId: user.userId, token: refreshToken } }
    );

    return res.handler.success(
      { token: newToken },
      "Token refreshed successfully"
    );
  } catch (error) {
    logger.error("Refresh token error:", error);
    return res.handler.unauthorized("Invalid refresh token");
  }
};

/**
 * Get current user profile
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.userId, {
      attributes: { exclude: ["userPassword"] },
      include: ["roles"],
    });

    if (!user) {
      return res.handler.notFound("User not found");
    }

    return res.handler.success(user, "Profile retrieved successfully");
  } catch (error) {
    logger.error("Get profile error:", error);
    return res.handler.serverError("Failed to retrieve profile");
  }
};

export default {
  login,
  logout,
  refreshToken,
  getProfile,
};
