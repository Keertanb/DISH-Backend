import sql from 'mssql';
import config from '../config/index.js';
import logger from '../utils/logger.js';

// Database Configuration
const DB_CONFIG = {
    server: config.database.server,
    database: config.database.database,
    user: config.database.user,
    password: config.database.password,
    port: config.database.port,
    options: {
        encrypt: config.database.encrypt,
        trustServerCertificate: config.database.trustServerCertificate,
        enableArithAbort: true,
        requestTimeout: config.database.requestTimeout,
    },
    pool: {
        max: config.database.pool.max,
        min: config.database.pool.min,
        idleTimeoutMillis: config.database.pool.idleTimeoutMillis,
    },
};

// Database connection pool
let pool = null;

/**
 * Initialize database connection pool
 */
export const initializeDatabase = async () => {
    try {
        pool = await new sql.ConnectionPool(DB_CONFIG).connect();
        logger.info('Database connected successfully');
    } catch (error) {
        logger.error('Database connection failed', { error: error.message });
        throw error;
    }
};

/**
 * Get database connection pool
 */
const getConnection = () => {
    if (!pool) throw new Error('Database not initialized. Call initializeDatabase() first.');
    return pool;
};

/**
 * Execute a stored procedure
 * @param {string} procedureName - Name of the stored procedure
 * @param {Array} params - Array of parameter objects {name, type, value}
 * @param {boolean} isMultipleResults - Whether to expect multiple result sets
 * @returns {Promise<any>} - Result of the stored procedure execution
 */
export const executeStoredProcedure = async (procedureName, params = [], isMultipleResults = false) => {
    try {
        const connection = getConnection();
        const request = connection.request();

        // Add parameters if provided
        params.forEach((param) => {
            request.input(param.name, param.type, param.value);
        });

        const result = await request.execute(procedureName);

        return isMultipleResults ? result.recordsets : result.recordset;
    } catch (error) {
        logger.error(`Error executing stored procedure ${procedureName}:`, { error });
        throw error;
    }
};

/**
 * Close database connection
 */
export const closeDatabase = async () => {
    if (pool) {
        await pool.close();
        pool = null;
        logger.info('Database connection closed');
    }
};

// Graceful shutdown
process.on('SIGINT', async () => {
    logger.info('Shutting down database connection...');
    await closeDatabase();
    process.exit(0);
});

process.on('SIGTERM', async () => {
    logger.info('Shutting down database connection...');
    await closeDatabase();
    process.exit(0);
});
