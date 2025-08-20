import logger from './logger.js';
import { STATUS_CODES } from './statusCodes.js';

/**
 * Custom error class for application-specific errors
 */
class AppError extends Error {
  constructor(message, statusCode, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

/**
 * Handle operational errors in development environment
 * @private
 * @param {Error} err - Error object
 * @param {Object} res - Express response object
 */
const sendErrorDev = (err, res) => {
  const statusCode = err.statusCode || STATUS_CODES.SERVER_ERROR;
  
  res.status(statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

/**
 * Handle operational errors in production environment
 * @private
 * @param {Error} err - Error object
 * @param {Object} res - Express response object
 */
const sendErrorProd = (err, res) => {
  const statusCode = err.statusCode || STATUS_CODES.SERVER_ERROR;
  
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(statusCode).json({
      status: err.status,
      message: err.message
    });
  } 
  // Programming or other unknown error: don't leak error details
  else {
    // 1) Log error
    logger.error('ERROR 💥', {
      message: err.message,
      stack: err.stack
    });

    // 2) Send generic message
    res.status(STATUS_CODES.SERVER_ERROR).json({
      status: 'error',
      message: 'Something went very wrong!'
    });
  }
};

/**
 * Handle JWT token errors
 * @private
 * @returns {AppError} - New AppError instance
 */
const handleJWTError = () => 
  new AppError('Invalid token. Please log in again!', STATUS_CODES.UNAUTHORIZED);

/**
 * Handle JWT expired token errors
 * @private
 * @returns {AppError} - New AppError instance
 */
const handleJWTExpiredError = () =>
  new AppError('Your token has expired! Please log in again.', STATUS_CODES.UNAUTHORIZED);

/**
 * Handle validation errors (e.g., from Mongoose)
 * @private
 * @param {Error} err - Error object
 * @returns {AppError} - New AppError instance
 */
const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map(el => el.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, STATUS_CODES.BAD_REQUEST);
};

/**
 * Handle duplicate field errors (e.g., unique constraint in DB)
 * @private
 * @param {Error} err - Error object
 * @returns {AppError} - New AppError instance
 */
const handleDuplicateFieldsDB = (err) => {
  const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, STATUS_CODES.BAD_REQUEST);
};

/**
 * Handle cast errors (e.g., invalid ObjectId in Mongoose)
 * @private
 * @param {Error} err - Error object
 * @returns {AppError} - New AppError instance
 */
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, STATUS_CODES.BAD_REQUEST);
};

/**
 * Global error handling middleware
 * @param {Error} err - Error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || STATUS_CODES.SERVER_ERROR;
  err.status = err.status || 'error';

  // Log the error
  logger.error(err.message, {
    status: err.status,
    statusCode: err.statusCode,
    stack: err.stack,
    path: req.path,
    method: req.method,
    body: req.body,
    query: req.query,
    params: req.params,
    user: req.user || 'Not authenticated'
  });

  // Handle different environments
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    error.message = err.message;

    // Handle specific error types
    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === 'ValidationError') error = handleValidationErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();

    sendErrorProd(error, res);
  }
};

/**
 * Handle 404 routes
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const notFoundHandler = (req, res, next) => {
  const err = new AppError(
    `Can't find ${req.originalUrl} on this server!`,
    STATUS_CODES.NOT_FOUND
  );
  next(err);
};

/**
 * Handle unhandled promise rejections
 * @param {string} err - Error message
 * @param {string} origin - Origin of the error
 */
const unhandledRejectionHandler = (err, origin) => {
  logger.error('UNHANDLED REJECTION! 💥 Shutting down...', {
    error: err,
    origin: origin
  });
  
  // Gracefully shut down the server
  server.close(() => {
    process.exit(1);
  });
};

/**
 * Handle uncaught exceptions
 * @param {Error} err - Error object
 */
const uncaughtExceptionHandler = (err) => {
  logger.error('UNCAUGHT EXCEPTION! 💥 Shutting down...', {
    error: {
      name: err.name,
      message: err.message,
      stack: err.stack
    }
  });
  
  // Gracefully shut down the server after logging
  process.exit(1);
};

// Handle uncaught exceptions
process.on('uncaughtException', uncaughtExceptionHandler);

export {
  AppError,
  errorHandler,
  notFoundHandler,
  unhandledRejectionHandler,
  uncaughtExceptionHandler,
};

export default errorHandler;
