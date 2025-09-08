import sql from 'mssql';

import { executeStoredProcedure } from '../database/index.js';

import logger from '../utils/logger.js';

class AllOfficersModel {
	async getCompetentOfficers(districtId) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetCompetentOfficers',
				[{ name: 'districtId', type: sql.Int, value: districtId ?? null }],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getCompetentOfficers model:', { err });
			throw err;
		}
	}

	async getDashboard() {
		try {
			const result = await executeStoredProcedure('SP_GetDashboardCounts', [], true);
			return result;
		} catch (err) {
			logger.error('Error in getDashboard model:', { err });
			throw err;
		}
	}

	async getCompetentOfficerProfile(userId) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetCompetentOfficerProfile',
				[{ name: 'userId', type: sql.VarChar(30), value: userId ?? null }],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getCompetentOfficerProfile model:', { err });
			throw err;
		}
	}
}

export default AllOfficersModel;
