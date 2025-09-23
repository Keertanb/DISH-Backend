import cors from 'cors';
import express from 'express';
import http from 'http';
import helmet from 'helmet';
import dotenv from 'dotenv';
// CONFIGS
import config from './config/index.js';
import ResponseHandler from './utils/responseHandler.js';
import logger from './utils/logger.js';
import { errorHandler } from './utils/errorHandler.js';
// ROUTES
// import routes from './routes/v1/index.js';
import healthRoute from './routes/health.route.js';

//cron
import factoryCron from './cron/factoryCron.js';

import routes from './routes/v1/index.js';
// DATABASE
import { initializeDatabase, closeDatabase } from './database/index.js';
// RATE LIMITING
import {
	generalRateLimiter,
	apiRateLimiter,
	healthRateLimiter,
	developmentRateLimiter,
} from './middlewares/rateLimit.middlewares.js';

const app = express();
dotenv.config();
const port = config.server.port;

// ------------------------      CREATE HTTP SERVER -------------------------
const server = http.createServer(app);

// ------------------------      GLOBAL MIDDLEWARE -------------------------
app.use(helmet());
app.use(cors()); // CORS configuration
app.use(express.json({ limit: '5mb' })); // ALLOW APPLICATION JSON
app.use(express.urlencoded({ extended: false })); // ALLOW URL ENCODED PARSER
app.use(logger.logRequest.bind(logger)); // Request logging

// ------------------------    RESPONSE HANDLER    -------------------
const handlerMiddleware = (req, res, next) => {
	res.handler = new ResponseHandler(req, res);
	next();
};
app.use(handlerMiddleware);

// ------------------------    RATE LIMITING    -------------------
// Apply different rate limiters based on environment and route type
// if (config.server.nodeEnv === 'development') {
// More lenient rate limiting for development
app.use(developmentRateLimiter);
// } else {
// 	app.use(generalRateLimiter);
// }

// --------------------------    ROUTES    ------------------
// Health check route with specific rate limiting
app.use('/api/ping', healthRateLimiter, healthRoute);

// API routes with API-specific rate limiting
app.use('/api/v1', apiRateLimiter, routes);
app.set('trust proxy', true);
// --------------------------    ERROR HANDLING    ---------------------
app.use(errorHandler);

// --------------------------    START SERVER    ---------------------
const startServer = async () => {
	try {
		// Initialize database connection
		await initializeDatabase();

		server.listen(port, () => {
			logger.info(`Server started successfully on port ${port}`);
			console.log('\x1b[32m%s\x1b[0m', 'Compiled Successfully!');
			console.log(`\n Local:\t\t http://localhost:${port}`);

			factoryCron.stopAll();
		});
	} catch (error) {
		console.error('Failed to start server:', error);
		process.exit(1);
	}
};

// Graceful shutdown
process.on('SIGINT', async () => {
	console.log('\nShutting down server...');
	await closeDatabase();
	process.exit(0);
});

process.on('SIGTERM', async () => {
	console.log('\nShutting down server...');
	await closeDatabase();
	process.exit(0);
});

startServer();
