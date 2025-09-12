import sql from 'mssql';

import { executeStoredProcedure } from '../database/index.js';
import logger from '../utils/logger.js';

class DishModel {
	async allQueryToDistrictOfficersController(districtId, page, limit) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetQueryToDistrictCompetentOfficers',
				[
					{ name: 'districtId', type: sql.Int, value: districtId },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in allQueryToDistrictOfficersController model:', { err });
			throw err;
		}
	}
}

export default DishModel;
