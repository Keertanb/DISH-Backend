// MODELS
import MasterModel from '../models/master.model.js';

// UTILS
import logger from '../utils/logger.js';

const masterModel = new MasterModel();

class MasterService {
	async getDistricts() {
		return await masterModel.getDistricts();
	}

	async getBlocksByDistrictId(districtId) {
		return await masterModel.getBlocksByDistrictId(districtId);
	}

	async getBankDetailByIFSCCode(IFSCCode) {
		return await masterModel.getBankDetailByIFSCCode(IFSCCode);
	}

	async getCompetentRegisterCountByDistrictId() {
		return await masterModel.getCompetentRegisterCountByDistrictId();
	}

	async getCompetentRegisterListByDistrictId(districtId, page, limit, search) {
		return await masterModel.getCompetentRegisterListByDistrictId(districtId, page, limit, search);
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
		return await masterModel.getCompetentCountByDistrictId(
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
		return await masterModel.getMachineTypeCompetentListByDistrictId(
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
	}

	async getPendingCompetentCountByDistrictId() {
		return await masterModel.getPendingCompetentCountByDistrictId();
	}

	async getPendingCompetentListByDistrictId(districtId, page, limit, search) {
		return await masterModel.getPendingCompetentListByDistrictId(districtId, page, limit, search);
	}

	async getOverduePendingInspectionCountByDistrictId() {
		return await masterModel.getOverduePendingInspectionCountByDistrictId();
	}

	async getOverduePendingInspectionListByDistrictId(districtId, page, limit, search) {
		return await masterModel.getOverduePendingInspectionListByDistrictId(
			districtId,
			page,
			limit,
			search
		);
	}

	async getSuspensionCountByDistrictId(suspensionStatus, suspensionCount) {
		return await masterModel.getSuspensionCountByDistrictId(suspensionStatus, suspensionCount);
	}

	async getSuspensionListByDistrictId(
		districtId,
		page,
		limit,
		search,
		suspensionStatus,
		suspensionCount
	) {
		return await masterModel.getSuspensionListByDistrictId(
			districtId,
			page,
			limit,
			search,
			suspensionStatus,
			suspensionCount
		);
	}

	async getFactoryCountByDistrictId() {
		return await masterModel.getFactoryCountByDistrictId();
	}

	async getFactoryListByDistrictId(districtId, page, limit, search) {
		return await masterModel.getFactoryListByDistrictId(districtId, page, limit, search);
	}

	async getDueCountByDistrictId() {
		return await masterModel.getDueCountByDistrictId();
	}

	async getDueListByDistrictId(districtId, page, limit, search) {
		return await masterModel.getDueListByDistrictId(districtId, page, limit, search);
	}

	async getOverDueCountByDistrictId() {
		return await masterModel.getOverDueCountByDistrictId();
	}

	async getOverDueListByDistrictId(districtId, page, limit, search) {
		return await masterModel.getOverDueListByDistrictId(districtId, page, limit, search);
	}

	async getInspectionCompletedCountByDistrictId() {
		return await masterModel.getInspectionCompletedCountByDistrictId();
	}

	async getInspectionCompletedListByDistrictId(districtId, page, limit, search) {
		return await masterModel.getInspectionCompletedListByDistrictId(
			districtId,
			page,
			limit,
			search
		);
	}

	async getMachineTypeCountByDistrictId(machineType) {
		return await masterModel.getMachineTypeCountByDistrictId(machineType);
	}

	async getMachineTypeListByDistrictId(districtId, page, limit, search, machineType) {
		return await masterModel.getMachineTypeListByDistrictId(
			districtId,
			page,
			limit,
			search,
			machineType
		);
	}

	async getPendingInspectionCountByDistrictId() {
		return await masterModel.getPendingInspectionCountByDistrictId();
	}

	async getPendingInspectionListByDistrictId(districtId, page, limit, search) {
		return await masterModel.getPendingInspectionListByDistrictId(districtId, page, limit, search);
	}

	async getRejectedInspectionCountByDistrictId() {
		return await masterModel.getRejectedInspectionCountByDistrictId();
	}

	async getRejectedInspectionListByDistrictId(districtId, page, limit, search) {
		return await masterModel.getRejectedInspectionListByDistrictId(districtId, page, limit, search);
	}

	async getExpiredMachineCountByDistrictId() {
		return await masterModel.getExpiredMachineCountByDistrictId();
	}

	async getExpiredMachineListByDistrictId(districtId, page, limit, search) {
		return await masterModel.getExpiredMachineListByDistrictId(districtId, page, limit, search);
	}

	async getCompetentMachineCount(machineAlias) {
		return await masterModel.getCompetentMachineCount(machineAlias);
	}
}

export default MasterService;
