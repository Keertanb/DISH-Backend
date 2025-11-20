// MODELS
import DishModel from '../models/dish.model.js';

// UTILS
import logger from '../utils/logger.js';

const dishModel = new DishModel();

class DishService {
	async allQueryToDistrictOfficersController(districtId, page, limit, search) {
		try {
			if (districtId !== undefined && (isNaN(districtId) || districtId <= 0)) {
				throw new Error('Invalid districtId provided');
			}
			const officers = await dishModel.allQueryToDistrictOfficersController(
				districtId,
				page,
				limit,
				search
			);
			return officers;
		} catch (err) {
			logger.error('Error in allQueryToDistrictOfficersController service:', { err });
			throw err;
		}
	}

	async notReviewCompetentPerson() {
		try {
			const result = await dishModel.notReviewCompetentPerson();
			return result;
		} catch (err) {
			logger.error('Error in notReviewCompetentPerson service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}
}

export default DishService;
