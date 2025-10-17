// MODELS
import MasterModel from '../models/master.model.js';

// UTILS
import logger from '../utils/logger.js';

const masterModel = new MasterModel();

class MasterService {
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

	async getCompetentCountByDistrictId() {
		try {
			const competentCount = await masterModel.getCompetentCountByDistrictId();
			return competentCount;
		} catch (err) {
			logger.error('Error in getCompetentCountByDistrictId service:', { err });
			throw err;
		}
	}

	async getPendingCompetentCountByDistrictId() {
		try {
			const pendingCompetentCount = await masterModel.getPendingCompetentCountByDistrictId();
			return pendingCompetentCount;
		} catch (err) {
			logger.error('Error in getPendingCompetentCountByDistrictId service:', { err });
			throw err;
		}
	}

	async getInspectionCompletedCountByDistrictId() {
		try {
			const inspectionCompletedCount = await masterModel.getInspectionCompletedCountByDistrictId();
			return inspectionCompletedCount;
		} catch (err) {
			logger.error('Error in getInspectionCompletedCountByDistrictId service:', { err });
			throw err;
		}
	}

	async getFactoryCountByDistrictId() {
		try {
			const factoryCount = await masterModel.getFactoryCountByDistrictId();
			return factoryCount;
		} catch (err) {
			logger.error('Error in getFactoryCountByDistrictId service:', { err });
			throw err;
		}
	}

	async getPendingInspectionCountByDistrictId() {
		try {
			const pendingInspectionCount = await masterModel.getPendingInspectionCountByDistrictId();
			return pendingInspectionCount;
		} catch (err) {
			logger.error('Error in getPendingInspectionCountByDistrictId service:', { err });
			throw err;
		}
	}

	async getOverduePendingInspectionCountByDistrictId() {
		try {
			const overduePendingInspectionCount =
				await masterModel.getOverduePendingInspectionCountByDistrictId();
			return overduePendingInspectionCount;
		} catch (err) {
			logger.error('Error in getOverduePendingInspectionCountByDistrictId service:', { err });
			throw err;
		}
	}
}

export default MasterService;
