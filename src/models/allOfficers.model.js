import sql from 'mssql';

import { executeStoredProcedure } from '../database/index.js';
import logger from '../utils/logger.js';

class AllOfficersModel {
	async getCompetentOfficers(districtId, page, limit) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetCompetentOfficers',
				[
					{ name: 'districtId', type: sql.Int, value: districtId ?? null },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getCompetentOfficers model:', { err });
			throw err;
		}
	}

	async getActiveCompetentOfficers(districtId, page, limit) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetCompetentActiveOfficers',
				[
					{ name: 'districtId', type: sql.Int, value: districtId ?? null },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getActiveCompetentOfficers model:', { err });
			throw err;
		}
	}

	async getInterviewCompetentOfficers(page, limit) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetInterviewCompetentOfficers',
				[
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getInterviewCompetentOfficers model:', { err });
			throw err;
		}
	}

	async updateCompetentOfficersStatus(userId, applicationType, reason = null) {
		try {
			const result = await executeStoredProcedure(
				'SP_UpdateCompetentOfficersStatus',
				[
					{ name: 'userId', type: sql.VarChar(30), value: userId },
					{ name: 'applicationType', type: sql.VarChar(30), value: applicationType },
					{ name: 'reason', type: sql.VarChar(255), value: reason },
				],
				true
			);

			return result;
		} catch (err) {
			logger.error('Error in updateCompetentOfficersStatus model:', { err });
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

	async scheduleInterview(userIds, scheduledInterviewDate) {
		try {
			const result = await executeStoredProcedure(
				'SP_ScheduleInterview',
				[
					{ name: 'userIds', type: sql.NVarChar, value: userIds },
					{ name: 'scheduledInterviewDate', type: sql.Date, value: scheduledInterviewDate },
				],
				true
			);

			if (Array.isArray(result)) {
				return result;
			}
			if (result && result.recordset) {
				return result.recordset;
			}
			return [];
		} catch (err) {
			logger.error('Error in scheduleInterview model:', { err });
			throw err;
		}
	}

	async InterviewCompetentOfficersStatus(userId, applicationType, reason = null) {
		try {
			const result = await executeStoredProcedure(
				'SP_InterviewCompetentOfficersStatus',
				[
					{ name: 'userId', type: sql.VarChar(30), value: userId },
					{ name: 'applicationType', type: sql.VarChar(30), value: applicationType },
					{ name: 'reason', type: sql.VarChar(255), value: reason },
				],
				true
			);

			return result[0];
		} catch (err) {
			logger.error('Error in InterviewCompetentOfficersStatus model:', { err });
			throw err;
		}
	}

	async reviewCompetentOfficer(
		competentOfficerId,
		reviewerId,
		reviewStatus,
		reviewComments = null
	) {
		try {
			const result = await executeStoredProcedure(
				'usp_ReviewCompetentOfficer',
				[
					{ name: 'CompetentOfficerId', type: sql.Int, value: competentOfficerId },
					{ name: 'ReviewerId', type: sql.Int, value: reviewerId },
					{ name: 'ReviewStatus', type: sql.NVarChar(50), value: reviewStatus },
					{ name: 'ReviewComments', type: sql.NVarChar(1000), value: reviewComments },
					{ name: 'ErrorMessage', type: sql.NVarChar(4000), isOutput: true },
				],
				false
			);

			if (result.returnValue === -1) {
				throw new Error(result.output.ErrorMessage || 'Failed to review competent officer');
			}

			return {
				success: true,
				message: `Competent officer ${reviewStatus.toLowerCase()} successfully`,
			};
		} catch (err) {
			logger.error('Error in reviewCompetentOfficer model:', { err });
			throw err;
		}
	}
}

export default AllOfficersModel;
