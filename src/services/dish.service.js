// MODELS
import DishModel from '../models/dish.model.js';

// UTILS
import logger from '../utils/logger.js';

const dishModel = new DishModel();

class DishService {
	async allQueryToDistrictOfficersController(districtId, page, limit) {
		try {
			if (districtId !== undefined && (isNaN(districtId) || districtId <= 0)) {
				throw new Error('Invalid districtId provided');
			}
			const officers = await dishModel.allQueryToDistrictOfficersController(
				districtId,
				page,
				limit
			);
			return officers;
		} catch (err) {
			logger.error('Error in allQueryToDistrictOfficersController service:', { err });
			throw err;
		}
	}
}

export default DishService;
