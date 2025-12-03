// SERVICES
import AuthService from '../services/auth.service.js';
// UTILS
import logger from '../utils/logger.js';
// Config
import { createToken } from '../config/jwt.js';
import AuthModel from '../models/auth.model.js';

const authService = new AuthService();
const authModel = new AuthModel();

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
			const { userId, userPassword, forceLogin } = req.body;

			const login = await authService.login(userId, userPassword, forceLogin);

			if (login.alreadyLoggedIn) {
				return res.status(409).send({
					success: false,
					message: login.message,
					code: 'ALREADY_LOGGED_IN',
				});
			}

			const authToken = createToken(login);

			await authModel.updateLoginToken(login.userId, authToken);

			return res.handler.success({ ...login, authToken });
		} catch (err) {
			return res.handler.serverError({}, err.message);
		}
	}

	async logout(req, res) {
		try {
			const userId = req.data.userId;

			const result = await authService.logout(userId);

			return res.handler.success(result);
		} catch (err) {
			return res.handler.serverError({}, err.message);
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

	async renewPauseCompetentOfficer(req, res) {
		try {
			const { userId, email } = req.body;
			const result = await authService.renewPauseCompetentOfficer(userId, email);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in renewPauseCompetentOfficer:', { err });
			return res.handler.serverError({}, err.message || 'Error in renewPauseCompetentOfficer');
		}
	}
}

export default AuthController;
