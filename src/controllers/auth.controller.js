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
}

export default AuthController;