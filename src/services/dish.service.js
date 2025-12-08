// MODELS
import DishModel from '../models/dish.model.js';

// UTILS
import logger from '../utils/logger.js';

const dishModel = new DishModel();

class DishService {
	async allQueryToDistrictOfficersController(districtId, page, limit, search) {
		return await dishModel.allQueryToDistrictOfficersController(districtId, page, limit, search);
	}

	async notReviewCompetentPerson() {
		return await dishModel.notReviewCompetentPerson();
	}
}

export default DishService;
