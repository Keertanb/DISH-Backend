// SERVICES
import CompetentService from '../services/competent.service.js';
// UTILS
import logger from '../utils/logger.js';

const competentService = new CompetentService();

class CompetentController {
	async inspectionFactory(req, res) {
		try {
			const { competentUserId, page, limit } = req.query;
			const result = await competentService.inspectionFactory(competentUserId, page, limit);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in inspectionFactory:', { err });
			return res.handler.serverError({}, err.message || 'Error in inspectionFactory');
		}
	}

	async getFactoryList(req, res) {
		try {
			const { factoryUserId, page, limit } = req.query;
			const result = await competentService.getFactoryList(factoryUserId, page, limit);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getFactoryList:', { err });
			return res.handler.serverError({}, err.message || 'Error in getFactoryList');
		}
	}
}

export default CompetentController;
