// SERVICES
import AuthService from '../services/auth.service.js';
// UTILS
import logger from '../utils/logger.js';
// Config
import { createToken } from '../config/jwt.js';

const authService = new AuthService();

class AuthController {
	async factoryOwnerRegistration(req, res) {
		try {
			// console.log(req.body);
			const factory = await authService.factoryOwnerRegistration(req.body);

			return res.handler.success(factory, 'Factory registered successfully!');
		} catch (err) {
			logger.error('Error in factoryOwnerRegistration controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in factoryOwnerRegistration controller'
			);
		}
	}

	async competentOfficerRegistration(req, res) {
		try {
			const competent = await authService.competentOfficerRegistration(req.body);

			return res.handler.success(competent, 'Competent Officer registered successfully!');
		} catch (err) {
			logger.error('Error in competentOfficerRegistration controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in competentOfficerRegistration controller'
			);
		}
	}

	async login(req, res) {
		try {
			const { userId, userPassword } = req.body;
			const login = await authService.login(userId, userPassword);
			const authToken = createToken(login);
			return res.handler.success({ ...login, authToken });
		} catch (err) {
			logger.error('Error in login controller:', { message: err.message, stack: err.stack });
			return res.handler.serverError({}, err.message || 'Error in login controller');
		}
	}

	async forgotPassword(req, res) {
		try {
			const { userId, email } = req.body;
			const result = await authService.forgotPassword(userId, email);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in forgotPassword:', { err });
			return res.handler.serverError({}, err.message || 'Error in forgotPassword');
		}
	}

	async resetPassword(req, res) {
		try {
			const { token, newPassword } = req.body;
			const result = await authService.resetPassword(token, newPassword);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in resetPassword:', { err });
			return res.handler.serverError({}, err.message || 'Error in resetPassword');
		}
	}
}

export default AuthController;
