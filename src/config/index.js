import dotenv from 'dotenv';

dotenv.config();

const config = {
	database: {
		server: process.env.DB_SERVER || 'dish-db.c0ryweokuiro.us-east-1.rds.amazonaws.com',
		database: process.env.DB_NAME || 'DISHPortal',
		user: process.env.DB_USER || 'admin',
		password: process.env.DB_PASSWORD || 'XXwm$i#:luF6Q*aONO7u3n9g)jf9',
		port: parseInt(process.env.DB_PORT || '1433', 10),
		encrypt: process.env.DB_ENCRYPT === 'true',
		trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === 'true',
		requestTimeout: parseInt(process.env.DB_REQUEST_TIMEOUT || '30000', 10),
		pool: {
			max: parseInt(process.env.DB_POOL_MAX || '10', 10),
			min: parseInt(process.env.DB_POOL_MIN || '0', 10),
			idleTimeoutMillis: parseInt(process.env.DB_POOL_IDLE_TIMEOUT || '30000', 10),
		},
	},
	MAIL: {
		mail: process.env.MAIL_USER || 'oldeal2k23@gmail.com',
		password: process.env.MAIL_PASS || 'qhlg qfkq ywjy kegh',
	},

	jwt: {
		secret: process.env.JWT_SECRET || 'DISH_PORTAL_JWT',
		expiresIn: process.env.JWT_EXPIRES_IN || '2d',
	},
	server: {
		port: parseInt(process.env.PORT || '8000', 10),
		nodeEnv: process.env.NODE_ENV || 'development',
		corsOrigin: process.env.CORS_ORIGIN || '*',
	},
	rateLimit: {
		windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '300000', 10), // 15 minutes
		authWindowMs: parseInt(process.env.RATE_LIMIT_AUTH_WINDOW_MS || '900000', 10), // 15 minutes
		healthWindowMs: parseInt(process.env.RATE_LIMIT_HEALTH_WINDOW_MS || '60000', 10), // 1 minute
	},
};

export default config;
