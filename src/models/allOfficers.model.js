import sql from 'mssql';
// UTILS
import { executeStoredProcedure } from '../database/index.js';
// UTILS
import logger from '../utils/logger.js';

class AllOfficersModel {
	async getCompetentOfficers(districtId, page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetCompetentOfficers',
				[
					{ name: 'districtId', type: sql.Int, value: districtId ?? null },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getCompetentOfficers model:', { err });
			throw err;
		}
	}

	async getActiveCompetentOfficers(districtId, page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetCompetentActiveOfficers',
				[
					{ name: 'districtId', type: sql.Int, value: districtId ?? null },
					{ name: 'page', type: sql.Int(), value: page ?? null },
					{ name: 'limit', type: sql.Int(), value: limit ?? null },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getActiveCompetentOfficers model:', { err });
			throw err;
		}
	}

	async getInterviewCompetentOfficers(page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetInterviewCompetentOfficers',
				[
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
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

	async getDashboard(userId = null) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetDashboardCounts',
				[{ name: 'userId', type: sql.VarChar(30), value: userId }],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getDashboard model:', { err });
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

	async interviewCompetentOfficersStatus(userId, applicationType, reason = null) {
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

	async pauseCompetentOfficer(userId) {
		try {
			const result = await executeStoredProcedure(
				'SP_PauseCompetentSuspensionStatus',
				[{ name: 'userId', type: sql.VarChar(30), value: userId }],
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
			logger.error('Error in pauseCompetentOfficer model:', { err });
			throw err;
		}
	}

	async prioritiesCompetentOfficersStatus(userId) {
		try {
			const result = await executeStoredProcedure(
				'SP_PrioritiesCompetentOfficersStatus',
				[{ name: 'userId', type: sql.VarChar(30), value: userId }],
				true
			);

			return result;
		} catch (err) {
			logger.error('Error in prioritiesCompetentOfficersStatus model:', { err });
			throw err;
		}
	}

	async getQueryToDistrictCompetentOfficers(page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetCompetentOfficersQueryToDistrict',
				[
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getQueryToDistrictCompetentOfficers model:', { err });
			throw err;
		}
	}

	async getFactoryOwners(districtId, page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetFactoryOwners',
				[
					{ name: 'districtId', type: sql.Int(), value: districtId ?? null },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getFactoryOwners model:', { err });
			throw err;
		}
	}

	async getCompetentRenewOfficersList(districtId, page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetCompetentRenewOfficers',
				[
					{ name: 'districtId', type: sql.Int(), value: districtId ?? null },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getCompetentRenewOfficersList model:', { err });
			throw err;
		}
	}

	async renewCompetentOfficersStatus(userId, applicationType, reason = null) {
		try {
			const result = await executeStoredProcedure(
				'SP_RenewCompetentOfficersStatus',
				[
					{ name: 'userId', type: sql.VarChar(30), value: userId },
					{ name: 'applicationType', type: sql.VarChar(30), value: applicationType },
					{ name: 'reason', type: sql.VarChar(255), value: reason },
				],
				true
			);

			return result[0];
		} catch (err) {
			logger.error('Error in renewCompetentOfficersStatus model:', { err });
			throw err;
		}
	}
}

export default AllOfficersModel;
