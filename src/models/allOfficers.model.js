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

	async reviewCompetentOfficer(competentOfficerId, reviewerId, reviewStatus, reviewComments = null) {
		try {
			const result = await executeStoredProcedure(
				'usp_ReviewCompetentOfficer',
				[
					{ name: 'CompetentOfficerId', type: sql.Int, value: competentOfficerId },
					{ name: 'ReviewerId', type: sql.Int, value: reviewerId },
					{ name: 'ReviewStatus', type: sql.NVarChar(50), value: reviewStatus },
					{ name: 'ReviewComments', type: sql.NVarChar(1000), value: reviewComments },
					{ name: 'ErrorMessage', type: sql.NVarChar(4000), isOutput: true }
				],
				false
			);

			if (result.returnValue === -1) {
				throw new Error(result.output.ErrorMessage || 'Failed to review competent officer');
			}

			return {
				success: true,
				message: `Competent officer ${reviewStatus.toLowerCase()} successfully`
			};
		} catch (err) {
			logger.error('Error in reviewCompetentOfficer model:', { err });
			throw err;
		}
	}
}

export default AllOfficersModel;
