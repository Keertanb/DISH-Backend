import rateLimit from "express-rate-limit";
import config from "../config/index.js";

/**
 * Helper function to generate IP-based keys for rate limiting
 * @param {Object} req - Express request object
 * @returns {string} - Generated key for rate limiting
 */
const ipKeyGenerator = (req) => {
  return req.ip || req.connection.remoteAddress || "unknown";
};

// General rate limiter for all routes
export const generalRateLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    status: "error",
    message: "Too many requests from this IP, please try again later.",
    code: "RATE_LIMIT_EXCEEDED",
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req, res) => ipKeyGenerator(req, res),
  handler: (req, res) => {
    res.status(429).json({
      status: "error",
      message: "Too many requests from this IP, please try again later.",
      code: "RATE_LIMIT_EXCEEDED",
      retryAfter: Math.ceil(config.rateLimit.windowMs / 1000),
    });
  },
});

// Stricter rate limiter for authentication routes
export const authRateLimiter = rateLimit({
  windowMs: config.rateLimit.authWindowMs, // 15 minutes
  max: 500, // Limit each IP to 5 login attempts per windowMs
  message: {
    status: "error",
    message: "Too many authentication attempts, please try again later.",
    code: "AUTH_RATE_LIMIT_EXCEEDED",
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req, res) => ipKeyGenerator(req, res),
  handler: (req, res) => {
    res.status(429).json({
      status: "error",
      message: "Too many authentication attempts, please try again later.",
      code: "AUTH_RATE_LIMIT_EXCEEDED",
      retryAfter: Math.ceil(config.rateLimit.authWindowMs / 1000),
    });
  },
});

// API rate limiter for API routes
export const apiRateLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs, // 15 minutes
  max: 50, // Limit each IP to 50 API requests per windowMs
  message: {
    status: "error",
    message: "Too many API requests, please try again later.",
    code: "API_RATE_LIMIT_EXCEEDED",
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req, res) => ipKeyGenerator(req, res),
  handler: (req, res) => {
    res.status(429).json({
      status: "error",
      message: "Too many API requests, please try again later.",
      code: "API_RATE_LIMIT_EXCEEDED",
      retryAfter: Math.ceil(config.rateLimit.windowMs / 1000),
    });
  },
});

// Health check rate limiter (more lenient)
export const healthRateLimiter = rateLimit({
  windowMs: config.rateLimit.healthWindowMs, // 1 minute
  max: 30, // Limit each IP to 30 health checks per minute
  message: {
    status: "error",
    message: "Too many health check requests, please try again later.",
    code: "HEALTH_RATE_LIMIT_EXCEEDED",
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req, res) => ipKeyGenerator(req, res),
  handler: (req, res) => {
    res.status(429).json({
      status: "error",
      message: "Too many health check requests, please try again later.",
      code: "HEALTH_RATE_LIMIT_EXCEEDED",
      retryAfter: Math.ceil(config.rateLimit.healthWindowMs / 1000),
    });
  },
});

// Development rate limiter (more lenient for development)
export const developmentRateLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs, // 15 minutes
  max: 7000, // Much higher limit for development
  message: {
    status: "error",
    message: "Too many requests from this IP, please try again later.",
    code: "DEV_RATE_LIMIT_EXCEEDED",
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req, res) => ipKeyGenerator(req, res),
  handler: (req, res) => {
    res.status(429).json({
      status: "error",
      message: "Too many requests from this IP, please try again later.",
      code: "DEV_RATE_LIMIT_EXCEEDED",
      retryAfter: Math.ceil(config.rateLimit.windowMs / 1000),
    });
  },
});
