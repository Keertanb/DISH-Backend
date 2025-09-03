// MODELS
import MasterModel from "../models/master.model.js";

// UTILS
import logger from '../utils/logger.js';

const masterModel = new MasterModel();

class MasterService{
    	async getDistricts() {
		try {
			const districts = await masterModel.getDistricts();
			return districts;
		} catch (err) {
			logger.error('Error in getDistricts service:', { err });
			throw err;
		}
	}

    async getBlocksByDistrictId(districtId) {
		try {
			if (!districtId || districtId <= 0) {
				throw new Error('Invalid districtId provided');
			}

			const blocks = await masterModel.getBlocksByDistrictId(districtId);
			return blocks;
		} catch (err) {
			logger.error('Error in getBlocksByDistrictId service:', { err });
			throw err;
		}
	}

	async getBankDetailByIFSCCode(IFSCCode) {
		try {
			if (!IFSCCode || IFSCCode.trim().length === 0) {
				throw new Error('Invalid IFSCCode provided');
			}

			const bankDetail = await masterModel.getBankDetailByIFSCCode(IFSCCode);
			return bankDetail;
		} catch (err) {
			logger.error('Error in getBankDetailByIFSCCode service:', { err });
			throw err;
		}
	}
}

export default MasterService;