import sql from 'mssql';
// DATABASE
import { executeStoredProcedure } from '../database/index.js';
// UTILS
import logger from '../utils/logger.js';

class MasterModel {
	async getDistricts() {
		try {
			const result = await executeStoredProcedure('SP_GetAllDistricts', [], true);
			return result;
		} catch (err) {
			logger.error('Error in getDistricts model:', { err });
			throw err;
		}
	}

	async getBlocksByDistrictId(districtId) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetBlocksByDistrictId',
				[{ name: 'districtId', type: sql.Int(), value: districtId }],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getBlocksByDistrictId model:', { err });
			throw err;
		}
	}

	async getBankDetailByIFSCCode(IFSCCode) {
		try {
			const result = await executeStoredProcedure('SP_GetBankDetailByIFSCCode', [
				{ name: 'IFSCCode', type: sql.VarChar(11), value: IFSCCode },
			]);
			return result;
		} catch (err) {
			logger.error('Error in getBankDetailByIFSCCode model:', { err });
			throw err;
		}
	}

	async getCompetentCountByDistrictId() {
		try {
			const result = await executeStoredProcedure('SP_GetDistrictCompetentCount', [], true);
			return result;
		} catch (err) {
			logger.error('Error in getCompetentCountByDistrictId model:', { err });
			throw err;
		}
	}

	async getPendingCompetentCountByDistrictId() {
		try {
			const result = await executeStoredProcedure('SP_GetDistrictCompetentPendingCount', [], true);

			return result;
		} catch (err) {
			logger.error('Error in getPendingCompetentCountByDistrictId model:', { err });
			throw err;
		}
	}

	async getInspectionCompletedCountByDistrictId() {
		try {
			const result = await executeStoredProcedure(
				'SP_GetDistrictInspectionThisMonthCount',
				[],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getInspectionCompletedCountByDistrictId model:', { err });
			throw err;
		}
	}

	async getFactoryCountByDistrictId() {
		try {
			const result = await executeStoredProcedure('SP_GetDistrictFactoryCount', [], true);
			return result;
		} catch (err) {
			logger.error('Error in getFactoryCountByDistrictId model:', { err });
			throw err;
		}
	}

	async getPendingInspectionCountByDistrictId() {
		try {
			const result = await executeStoredProcedure(
				'SP_GetDistrictMachineInspectionPendingCount',
				[],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getPendingInspectionCountByDistrictId model:', { err });
			throw err;
		}
	}

	async getOverduePendingInspectionCountByDistrictId() {
		try {
			const result = await executeStoredProcedure(
				'SP_GetDistrictMachineOverduePendingCount',
				[],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getOverduePendingInspectionCountByDistrictId model:', { err });
			throw err;
		}
	}
}

export default MasterModel;
