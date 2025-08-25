import authModel from "../models/auth.models.js";
import logger from "../utils/logger.js";

class AuthService {
  /**
   * Get user by username with role information
   * @param {string} userName - Username to search for
   * @returns {Promise<Object|null>} User object with roles or null if not found
   */
  async getUserByUserName(userName) {
    try {
      // Input validation
      if (!userName || userName.trim().length === 0) {
        throw new Error("Invalid userName provided");
      }

      const userDetails = await authModel.getUserByUserName(userName);

      if (!userDetails || userDetails.length === 0) return null;

      // Transform data to match expected format
      const firstUser = userDetails[0];
      const roles = userDetails.map((user) => ({
        roleId: user.roleId,
        roleName: user.roleName,
      }));

      return {
        userName: firstUser.userName,
        userEmail: firstUser.userEmail,
        userPassword: firstUser.userPassword,
        isReset: firstUser.isReset || false,
        roles: roles,
      };
    } catch (error) {
      logger.error("Error in getUserByUserName service:", { error });
      throw error;
    }
  }

  /**
   * Create a new user session
   * @param {string} token - JWT token
   * @param {string} ipAddress - User's IP address
   * @param {boolean} isForcedLogin - Whether this is a forced login
   * @returns {Promise<Object>} Session details
   */
  async createUserSession(userName, token, ipAddress, isForcedLogin = false) {
    try {
      // Input validation
      if (!userName || userName <= 0) {
        throw new Error("Invalid userName provided");
      }
      if (!token || token.trim().length === 0) {
        throw new Error("Invalid token provided");
      }
      if (!ipAddress || ipAddress.trim().length === 0) {
        throw new Error("Invalid ipAddress provided");
      }

      const sessionDetails = await authModel.createUserSession(
        userName,
        token,
        ipAddress,
        isForcedLogin
      );

      return sessionDetails;
    } catch (error) {
      logger.error("Error in createUserSession service:", { error });
      throw error;
    }
  }

  /**
   * Update user session (e.g., on logout)
   * @param {number} userName - User Name
   * @param {string} token - JWT token
   * @param {string} logoutType - Type of logout (e.g., 'normal', 'expired')
   * @returns {Promise<void>}
   */
  async updateUserSession(userName, token, logoutType = "normal") {
    try {
      // Input validation
      if (!userName || userName <= 0) {
        throw new Error("Invalid userName provided");
      }
      if (!token || token.trim().length === 0) {
        throw new Error("Invalid token provided");
      }
      if (!logoutType || logoutType.trim().length === 0) {
        throw new Error("Invalid logoutType provided");
      }

      await authModel.updateUserSession(userName, token, logoutType);
    } catch (error) {
      logger.error("Error in updateUserSession service:", { error });
      throw error;
    }
  }

  /**
   * Check if a user session is valid
   * @param {number} userName - User ID
   * @param {number} roleId - Role ID
   * @param {string} token - JWT token
   * @returns {Promise<Object>} Session validation result
   */
  async checkUserSession(userName, roleId, token) {
    try {
      // Input validation
      if (!userName || userName <= 0) {
        throw new Error("Invalid userName provided");
      }
      if (!roleId || roleId <= 0) {
        throw new Error("Invalid roleId provided");
      }
      if (!token || token.trim().length === 0) {
        throw new Error("Invalid token provided");
      }

      const result = await authModel.checkUserSession(userName, roleId, token);
      return result;
    } catch (error) {
      logger.error("Error in checkUserSession service:", { error });
      throw error;
    }
  }
}

export default new AuthService();
