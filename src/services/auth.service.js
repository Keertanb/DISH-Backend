// MODELS
import AuthModel from '../models/auth.model.js';

// UTILS
import logger from '../utils/logger.js';

const authModel = new AuthModel();

class AuthService {
	async factoryOwnerRegistration(data) {
		try {
			const factory = await authModel.factoryOwnerRegistration(data);
			return factory;
		} catch (err) {
			logger.error('Error in factoryOwnerRegistration service:', { err });
			throw err;
		}
	}

	async competentOfficerRegistration(data) {
		try {
			const competent = await authModel.competentOfficerRegistration(data);
			return competent;
		} catch (err) {
			logger.error('Error in competentOfficerRegistration service:', { err });
			throw err;
		}
	}

	async login(userId, userPassword) {
		try {
			if (!userId || !userPassword) {
				throw new Error('UserId ane Password required');
			}

			const login = await authModel.login(userId);

			if (!login) {
				throw new Error('Invalid UserId or Password');
			}

			const isPasswordValid = login.userPassword === userPassword;
			if (!isPasswordValid) {
				throw new Error('Invalid UserId or Password');
			}

			return {
				userId: login.userId,
				roleName: login.roleName,
				districtId: login.districtId,
			};
		} catch (err) {
			logger.error('Error in login service:', { err });
			throw err;
		}
	}
}

export default AuthService;
