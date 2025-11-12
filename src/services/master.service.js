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

	async getCompetentRegisterCountByDistrictId() {
		try {
			const competentRegisterCount = await masterModel.getCompetentRegisterCountByDistrictId();
			return competentRegisterCount;
		} catch (err) {
			logger.error('Error in getCompetentRegisterCountByDistrictId service:', { err });
			throw err;
		}
	}

	async getCompetentRegisterListByDistrictId(districtId, page, limit, search) {
		try {
			const pendingCompetentList = await masterModel.getCompetentRegisterListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return pendingCompetentList;
		} catch (err) {
			logger.error('Error in getCompetentRegisterListByDistrictId service:', { err });
			throw err;
		}
	}

	async getCompetentCountByDistrictId(
		isPressureVesselOrPlant,
		isHoistAndLifts,
		isDustFumeExtractionSystem,
		isPowerPressSafetyDevices,
		isWaterSealedGasHolder,
		isLiftingMachinesChainsRopes,
		isOvenAndDriers,
		isCentrifugeMachine,
		isThermicFluidHeater,
		isConfinedSpace,
		isStability
	) {
		try {
			const competentCount = await masterModel.getCompetentCountByDistrictId(
				isPressureVesselOrPlant,
				isHoistAndLifts,
				isDustFumeExtractionSystem,
				isPowerPressSafetyDevices,
				isWaterSealedGasHolder,
				isLiftingMachinesChainsRopes,
				isOvenAndDriers,
				isCentrifugeMachine,
				isThermicFluidHeater,
				isConfinedSpace,
				isStability
			);
			return competentCount;
		} catch (err) {
			logger.error('Error in getCompetentCountByDistrictId service:', { err });
			throw err;
		}
	}

	async getMachineTypeCompetentListByDistrictId(
		districtId,
		page,
		limit,
		search,
		isPressureVesselOrPlant,
		isHoistAndLifts,
		isDustFumeExtractionSystem,
		isPowerPressSafetyDevices,
		isWaterSealedGasHolder,
		isLiftingMachinesChainsRopes,
		isOvenAndDriers,
		isCentrifugeMachine,
		isThermicFluidHeater,
		isConfinedSpace,
		isStability
	) {
		try {
			const machineTypeCompetentList = await masterModel.getMachineTypeCompetentListByDistrictId(
				districtId,
				page,
				limit,
				search,
				isPressureVesselOrPlant,
				isHoistAndLifts,
				isDustFumeExtractionSystem,
				isPowerPressSafetyDevices,
				isWaterSealedGasHolder,
				isLiftingMachinesChainsRopes,
				isOvenAndDriers,
				isCentrifugeMachine,
				isThermicFluidHeater,
				isConfinedSpace,
				isStability
			);
			return machineTypeCompetentList;
		} catch (err) {
			logger.error('Error in getMachineTypeCompetentListByDistrictId service:', { err });
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

	async getSuspensionCountByDistrictId(suspensionStatus, suspensionCount) {
		try {
			const suspensionsCount = await masterModel.getSuspensionCountByDistrictId(
				suspensionStatus,
				suspensionCount
			);
			return suspensionsCount;
		} catch (err) {
			logger.error('Error in getSuspensionCountByDistrictId service:', { err });
			throw err;
		}
	}

	async getSuspensionListByDistrictId(
		districtId,
		page,
		limit,
		search,
		suspensionStatus,
		suspensionCount
	) {
		try {
			const suspensionList = await masterModel.getSuspensionListByDistrictId(
				districtId,
				page,
				limit,
				search,
				suspensionStatus,
				suspensionCount
			);
			return suspensionList;
		} catch (err) {
			logger.error('Error in getSuspensionListByDistrictId service:', { err });
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

	async getMachineTypeCountByDistrictId(machineType) {
		try {
			const machineTypeCount = await masterModel.getMachineTypeCountByDistrictId(machineType);
			return machineTypeCount;
		} catch (err) {
			logger.error('Error in getMachineTypeCountByDistrictId service:', { err });
			throw err;
		}
	}

	async getMachineTypeListByDistrictId(districtId, page, limit, search, machineType) {
		try {
			const machineTypeList = await masterModel.getMachineTypeListByDistrictId(
				districtId,
				page,
				limit,
				search,
				machineType
			);
			return machineTypeList;
		} catch (err) {
			logger.error('Error in getMachineTypeListByDistrictId service:', { err });
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

	async getRejectedInspectionCountByDistrictId() {
		try {
			const rejectedInspectionCount = await masterModel.getRejectedInspectionCountByDistrictId();
			return rejectedInspectionCount;
		} catch (err) {
			logger.error('Error in getRejectedInspectionCountByDistrictId service:', { err });
			throw err;
		}
	}

	async getRejectedInspectionListByDistrictId(districtId, page, limit, search) {
		try {
			const rejectedInspectionList = await masterModel.getRejectedInspectionListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return rejectedInspectionList;
		} catch (err) {
			logger.error('Error in getRejectedInspectionListByDistrictId service:', { err });
			throw err;
		}
	}

	async getExpiredMachineCountByDistrictId() {
		try {
			const expiredCount = await masterModel.getExpiredMachineCountByDistrictId();
			return expiredCount;
		} catch (err) {
			logger.error('Error in getExpiredMachineCountByDistrictId service:', { err });
			throw err;
		}
	}

	async getExpiredMachineListByDistrictId(districtId, page, limit, search) {
		try {
			const expiredList = await masterModel.getExpiredMachineListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return expiredList;
		} catch (err) {
			logger.error('Error in getExpiredMachineListByDistrictId service:', { err });
			throw err;
		}
	}

	async getCompetentMachineCount(machineAlias) {
		try {
			const count = await masterModel.getCompetentMachineCount(machineAlias);
			return count;
		} catch (err) {
			logger.error('Error in getCompetentMachineCount service:', { err });
			throw err;
		}
	}
}

export default MasterService;
