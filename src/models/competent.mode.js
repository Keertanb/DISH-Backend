import sql from 'mssql';
// DATABASE
import { executeStoredProcedure } from '../database/index.js';
// UTILS
import logger from '../utils/logger.js';

class CompetentModel {
	async inspectionFactory(competentUserId, page, limit) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetPendingFactoriesByCompetent',
				[
					{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in inspectionFactory model:', { err });
			throw err;
		}
	}

	async getFactoryList(factoryUserId, page, limit) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetMachineInspectionsList',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getFactoryList model:', { err });
			throw err;
		}
	}
}

export default CompetentModel;
