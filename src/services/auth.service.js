// MODELS
import AuthModel from "../models/auth.model.js";

// UTILS
import logger from '../utils/logger.js';

const authModel = new AuthModel();

class AuthService{
    async factoryOwnerRegistration(data) {
		try {
			const factory = await authModel.factoryOwnerRegistration(data);
			return factory;
		} catch (err) {
			logger.error('Error in factoryOwnerRegistration service:', { err });
			throw err;
		}
	}
}

export default AuthService;