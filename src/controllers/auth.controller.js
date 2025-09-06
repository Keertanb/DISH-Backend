// SERVICES
import AuthService from '../services/auth.service.js';
// UTILS
import logger from '../utils/logger.js';

import { createToken } from '../config/jwt.js';

const authService = new AuthService();

class AuthController {
	async factoryOwnerRegistration(req, res) {
		try {
			const factory = await authService.factoryOwnerRegistration(req.body);

			return res.handler.success(factory);
		} catch (err) {
			logger.error('Error in factoryOwnerRegistration:', { err });
			return res.handler.serverError({}, err.message || 'Error in factoryOwnerRegistration');
		}
	}

	async competentOfficerRegistration(req, res) {
		try {
			const competent = await authService.competentOfficerRegistration(req.body);

			return res.handler.success(competent);
		} catch (err) {
			logger.error('Error in competentOfficerRegistration:', { err });
			return res.handler.serverError({}, err.message || 'Error in competentOfficerRegistration');
		}
	}

	async login(req, res) {
		try {
			const { userId, userPassword } = req.body;
			const login = await authService.login(userId, userPassword);
			const authToken = createToken(login);
			return res.handler.success({ ...login, authToken });
		} catch (err) {
			logger.error('Error in login:', { err });
			return res.handler.serverError({}, err.message || 'Error in login');
		}
	}
}

export default AuthController;
