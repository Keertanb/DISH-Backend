import * as sql from 'mssql';
import { executeStoredProcedure } from '../database/index.js';
import logger from '../utils/logger.js';

class AuthModel {
    /**
     * Get user by username
     * @param {string} userName - Username to search for
     * @returns {Promise<Array>} Array of user records
     */
    async getUserByUserName(userName) {
        try {
            const userDetails = await executeStoredProcedure(
                'SP_GetUserByUserName',
                [{ name: 'userName', type: sql.VarChar, value: userName }],
                true
            );
            return userDetails || [];
        } catch (error) {
            logger.error('Error in getUserByUserName model:', { error });
            throw error;
        }
    }

    /**
     * Create a new user session
     * @param {number} userId - User ID
     * @param {string} token - JWT token
     * @param {string} ipAddress - User's IP address
     * @param {boolean} isForcedLogin - Whether this is a forced login
     * @returns {Promise<Object>} Session details
     */
    async createUserSession(userId, token, ipAddress, isForcedLogin = false) {
        try {
            const sessionDetails = await executeStoredProcedure(
                'SP_CreateUserSession',
                [
                    { name: 'userId', type: sql.Int, value: userId },
                    { name: 'token', type: sql.VarChar, value: token },
                    { name: 'ipAddress', type: sql.VarChar, value: ipAddress },
                    { name: 'isForcedLogin', type: sql.Bit, value: isForcedLogin }
                ]
            );
            return sessionDetails;
        } catch (error) {
            logger.error('Error in createUserSession model:', { error });
            throw error;
        }
    }

    /**
     * Update user session (e.g., on logout)
     * @param {number} userId - User ID
     * @param {string} token - JWT token
     * @param {string} logoutType - Type of logout (e.g., 'normal', 'expired')
     * @returns {Promise<void>}
     */
    async updateUserSession(userId, token, logoutType) {
        try {
            await executeStoredProcedure('SP_UpdateUserSession', [
                { name: 'userId', type: sql.Int, value: userId },
                { name: 'token', type: sql.VarChar, value: token },
                { name: 'logoutType', type: sql.VarChar, value: logoutType }
            ]);
        } catch (error) {
            logger.error('Error in updateUserSession model:', { error });
            throw error;
        }
    }

    /**
     * Check if a user session is valid
     * @param {number} userId - User ID
     * @param {number} roleId - Role ID
     * @param {string} token - JWT token
     * @returns {Promise<Object>} Session validation result
     */
    async checkUserSession(userId, roleId, token) {
        try {
            const result = await executeStoredProcedure('SP_CheckUserSession', [
                { name: 'userId', type: sql.Int, value: userId },
                { name: 'roleId', type: sql.Int, value: roleId },
                { name: 'token', type: sql.VarChar, value: token }
            ]);
            return result;
        } catch (error) {
            logger.error('Error in checkUserSession model:', { error });
            throw error;
        }
    }
}

export default new AuthModel();