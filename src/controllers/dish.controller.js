// SERVICES
import DishService from '../services/dish.service.js';
// UTILS
import logger from '../utils/logger.js';

const dishService = new DishService();

class DishController {
	async allQueryToDistrictOfficersController(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;

			const officer = await dishService.allQueryToDistrictOfficersController(
				districtId,
				page,
				limit,
				search
			);

			return res.handler.success(officer);
		} catch (err) {
			logger.error('Error in allQueryToDistrictOfficersController controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in allQueryToDistrictOfficersController controller'
			);
		}
	}
}

export default DishController;
