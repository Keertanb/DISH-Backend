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
}

export default MasterModel;
