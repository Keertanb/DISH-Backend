import config from "../config/index.js";

// Log levels
export const LogLevel = {
  ERROR: "error",
  WARN: "warn",
  INFO: "info",
  DEBUG: "debug",
};

/**
 * Logger utility for consistent logging throughout the application
 */
class Logger {
  /**
   * Get current timestamp in ISO format
   * @private
   * @returns {string} ISO timestamp string
   */
  getTimestamp() {
    return new Date().toISOString();
  }

  /**
   * Format log message with timestamp and context
   * @private
   * @param {string} level - Log level
   * @param {string} message - Log message
   * @param {Object} [context] - Additional context data
   * @returns {string} Formatted log message
   */
  formatMessage(level, message, context) {
    const timestamp = this.getTimestamp();
    const contextStr = context ? ` | ${JSON.stringify(context)}` : "";
    return `[${timestamp}] ${level.toUpperCase()}: ${message}${contextStr}`;
  }

  /**
   * Check if the log level should be logged based on environment
   * @private
   * @param {string} level - Log level to check
   * @returns {boolean} Whether the log level should be logged
   */
  shouldLog(level) {
    const levels = {
      [LogLevel.ERROR]: 0,
      [LogLevel.WARN]: 1,
      [LogLevel.INFO]: 2,
      [LogLevel.DEBUG]: 3,
    };

    const currentLevel =
      config.server.nodeEnv === "production" ? LogLevel.INFO : LogLevel.DEBUG;
    return levels[level] <= levels[currentLevel];
  }

  /**
   * Log error message
   * @param {string} message - Error message
   * @param {Object} [context] - Additional context data
   */
  error(message, context) {
    if (this.shouldLog(LogLevel.ERROR)) {
      console.error(this.formatMessage(LogLevel.ERROR, message, context));
    }
  }

  /**
   * Log warning message
   * @param {string} message - Warning message
   * @param {Object} [context] - Additional context data
   */
  warn(message, context) {
    if (this.shouldLog(LogLevel.WARN)) {
      console.warn(this.formatMessage(LogLevel.WARN, message, context));
    }
  }

  /**
   * Log info message
   * @param {string} message - Info message
   * @param {Object} [context] - Additional context data
   */
  info(message, context) {
    if (this.shouldLog(LogLevel.INFO)) {
      console.info(this.formatMessage(LogLevel.INFO, message, context));
    }
  }

  /**
   * Log debug message
   * @param {string} message - Debug message
   * @param {Object} [context] - Additional context data
   */
  debug(message, context) {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.debug(this.formatMessage(LogLevel.DEBUG, message, context));
    }
  }

  /**
   * Express middleware for request logging
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @param {Function} next - Next middleware function
   */
  logRequest(req, res, next) {
    const start = Date.now();

    res.on("finish", () => {
      const duration = Date.now() - start;
      const context = {
        method: req.method,
        url: req.url,
        statusCode: res.statusCode,
        duration: `${duration}ms`,
        ip: req.ip || req.connection.remoteAddress,
        userAgent: req.get("User-Agent"),
        userId: req.user?.userId,
      };

      if (res.statusCode >= 400) {
        this.error(`Request failed: ${req.method} ${req.url}`, context);
      } else {
        this.info(`Request completed: ${req.method} ${req.url}`, context);
      }
    });

    next();
  }
}

// Export a singleton instance and LogLevel
const logger = new Logger();

// export { LogLevel };
export default logger;
