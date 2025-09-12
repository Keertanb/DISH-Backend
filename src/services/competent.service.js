// MODELS
import CompetentModel from '../models/competent.mode.js';

// UTILS
import logger from '../utils/logger.js';

const competentModel = new CompetentModel();

class CompetentService {
	async inspectionFactory(competentUserId, page, limit) {
		try {
			const result = await competentModel.inspectionFactory(competentUserId, page, limit);
			return result;
		} catch (err) {
			logger.error('Error in inspectionFactory service:', { err });
			throw err;
		}
	}

	async getFactoryList(factoryUserId, page, limit) {
		try {
			const result = await competentModel.getFactoryList(factoryUserId, page, limit);
			return result;
		} catch (err) {
			logger.error('Error in getFactoryList service:', { err });
			throw err;
		}
	}
}
export default CompetentService;
