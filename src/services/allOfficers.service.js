// MODELS
import AllOfficersModel from '../models/allOfficers.model.js';

// UTILS
import logger from '../utils/logger.js';

const allOfficersModel = new AllOfficersModel();

class AllOfficersService {
	async getCompetentOfficers(districtId) {
		try {
			if (districtId !== undefined && (isNaN(districtId) || districtId <= 0)) {
				throw new Error('Invalid districtId provided');
			}
			const officers = await allOfficersModel.getCompetentOfficers(districtId);
			return officers;
		} catch (err) {
			logger.error('Error in getCompetentOfficers service:', { err });
			throw err;
		}
	}

	async getDashboard() {
		try {
			const dashboard = await allOfficersModel.getDashboard();
			return dashboard;
		} catch (err) {
			logger.error('Error in getDashboard service:', { err });
			throw err;
		}
	}

	async getCompetentOfficerProfile(userId) {
		try {
			const profile = await allOfficersModel.getCompetentOfficerProfile(userId);
			return profile;
		} catch (err) {
			logger.error('Error in getCompetentOfficerProfile service:', { err });
			throw err;
		}
	}
}

export default AllOfficersService;
