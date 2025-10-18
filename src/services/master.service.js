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

	async getPendingCompetentListByDistrictId(districtId, page, limit, search) {
		try {
			const pendingCompetentList = await masterModel.getPendingCompetentListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return pendingCompetentList;
		} catch (err) {
			logger.error('Error in getPendingCompetentListByDistrictId service:', { err });
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

	async getFactoryListByDistrictId(districtId, page, limit, search) {
		try {
			const factoryList = await masterModel.getFactoryListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return factoryList;
		} catch (err) {
			logger.error('Error in getFactoryListByDistrictId service:', { err });
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

	async getInspectionCompletedListByDistrictId(districtId, page, limit, search) {
		try {
			const inspectionCompletedList = await masterModel.getInspectionCompletedListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return inspectionCompletedList;
		} catch (err) {
			logger.error('Error in getInspectionCompletedListByDistrictId service:', { err });
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

	async getPendingInspectionListByDistrictId(districtId, page, limit, search) {
		try {
			const pendingInspectionList = await masterModel.getPendingInspectionListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return pendingInspectionList;
		} catch (err) {
			logger.error('Error in getPendingInspectionListByDistrictId service:', { err });
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

	async getOverduePendingInspectionListByDistrictId(districtId, page, limit, search) {
		try {
			const overduePendingInspectionList =
				await masterModel.getOverduePendingInspectionListByDistrictId(
					districtId,
					page,
					limit,
					search
				);
			return overduePendingInspectionList;
		} catch (err) {
			logger.error('Error in getOverduePendingInspectionListByDistrictId service:', { err });
			throw err;
		}
	}
}

export default MasterService;
