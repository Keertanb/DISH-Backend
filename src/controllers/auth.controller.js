// SERVICES
import AuthService from '../services/auth.service.js';
// UTILS
import logger from '../utils/logger.js';

const authService = new AuthService();

class AuthController {
    async factoryOwnerRegistration(req, res) {
		try {
			const factory = await authService.factoryOwnerRegistration(req.body);

			return res.handler.success(factory);

		} catch (err) {
			logger.error('Error in factoryOwnerRegistration:', { err });
			return res.handler.serverError({}, (err).message || 'Error in factoryOwnerRegistration');
		}
	}

	async competentOfficerRegistration(req, res) {
		try {
			const competent = await authService.competentOfficerRegistration(req.body);

			return res.handler.success(competent);

		} catch (err) {
			logger.error('Error in competentOfficerRegistration:', { err });
			return res.handler.serverError({}, (err).message || 'Error in competentOfficerRegistration');
		}
	}
}

export default AuthController;