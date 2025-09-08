import AllOfficersService from '../services/allOfficers.service.js';
// UTILS
import logger from '../utils/logger.js';

const allOfficersService = new AllOfficersService();

class AllOfficersController {
	async getCompetentOfficers(req, res) {
		try {
			const { districtId } = req.query;

			const officer = await allOfficersService.getCompetentOfficers(districtId);

			return res.handler.success(officer);
		} catch (err) {
			logger.error('Error in getCompetentOfficers controller:', { err });
			return res.handler.serverError({}, err.message || 'Error in getCompetentOfficers controller');
		}
	}

	async getDashboard(req, res) {
		try {
			const dashboard = await allOfficersService.getDashboard(req.body);

			return res.handler.success(dashboard);
		} catch (err) {
			logger.error('Error in getDashboard controller:', { err });
			return res.handler.serverError({}, err.message || 'Error in getDashboard controller');
		}
	}

	async getCompetentOfficerProfile(req, res) {
		try {
			const { userId } = req.query;

			const profile = await allOfficersService.getCompetentOfficerProfile(userId);

			return res.handler.success(profile);
		} catch (err) {
			logger.error('Error in getCompetentOfficerProfile controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getCompetentOfficerProfile controller'
			);
		}
	}
}

export default AllOfficersController;
