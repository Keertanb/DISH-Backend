// SERVICES
import MasterService from '../services/master.service.js';
// UTILS
import logger from '../utils/logger.js';

const masterService = new MasterService();

class MasterController {
	async getDistricts(req, res) {
		try {
			const districts = await masterService.getDistricts(req.body);

			return res.handler.success(districts);
		} catch (err) {
			logger.error('Error in getDistricts:', { err });
			return res.handler.serverError({}, err.message || 'Error in getDistricts');
		}
	}

	async getBlocksByDistrictId(req, res) {
		try {
			const { districtId } = req.query;
			const data = req?.data;
			console.log(data);
			const blocks = await masterService.getBlocksByDistrictId(districtId);

			return res.handler.success({ blocks });
		} catch (err) {
			logger.error('Error in getDistricts:', { err });
			return res.handler.serverError({}, err.message || 'Error in getDistricts');
		}
	}

	async getBankDetailByIFSCCode(req, res) {
		try {
			const { IFSCCode } = req.query;

			const bankDetail = await masterService.getBankDetailByIFSCCode(IFSCCode);

			if (!bankDetail) return res.handler.notFound(undefined, 'Bank detail not found');

			return res.handler.success(bankDetail, 'Bank detail fetched successfully');
		} catch (err) {
			logger.error('Error in getBankDetailByIFSCCode:', { err, IFSCCode: req.query.IFSCCode });
			return res.handler.serverError({}, err.message || 'Error in getBankDetailByIFSCCode');
		}
	}

	async getCompetentRegisterCountByDistrictId(req, res) {
		try {
			const competentRegisterCount = await masterService.getCompetentRegisterCountByDistrictId();
			return res.handler.success({ competentRegisterCount });
		} catch (err) {
			logger.error('Error in getCompetentRegisterCountByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getCompetentRegisterCountByDistrictId'
			);
		}
	}

	async getCompetentRegisterListByDistrictId(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;
			const competentList = await masterService.getCompetentRegisterListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return res.handler.success({ competentList });
		} catch (err) {
			logger.error('Error in getCompetentRegisterListByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getCompetentRegisterListByDistrictId'
			);
		}
	}

	async getCompetentCountByDistrictId(req, res) {
		try {
			const {
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
				isStability,
			} = req.query;
			const competentCount = await masterService.getCompetentCountByDistrictId(
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

			return res.handler.success({ competentCount });
		} catch (err) {
			logger.error('Error in getCompetentCountByDistrictId:', { err });
			return res.handler.serverError({}, err.message || 'Error in getCompetentCountByDistrictId');
		}
	}

	async getMachineTypeCompetentListByDistrictId(req, res) {
		try {
			const {
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
				isStability,
			} = req.query;
			const machineTypeCompetentList = await masterService.getMachineTypeCompetentListByDistrictId(
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
			return res.handler.success({ machineTypeCompetentList });
		} catch (err) {
			logger.error('Error in getMachineTypeCompetentListByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getMachineTypeCompetentListByDistrictId'
			);
		}
	}

	async getPendingCompetentCountByDistrictId(req, res) {
		try {
			const pendingCompetentCount = await masterService.getPendingCompetentCountByDistrictId();
			return res.handler.success({ pendingCompetentCount });
		} catch (err) {
			logger.error('Error in getPendingCompetentCountByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getPendingCompetentCountByDistrictId'
			);
		}
	}

	async getPendingCompetentListByDistrictId(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;
			const pendingCompetentList = await masterService.getPendingCompetentListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return res.handler.success({ pendingCompetentList });
		} catch (err) {
			logger.error('Error in getPendingCompetentListByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getPendingCompetentListByDistrictId'
			);
		}
	}

	async getOverduePendingInspectionCountByDistrictId(req, res) {
		try {
			const overduePendingInspectionCount =
				await masterService.getOverduePendingInspectionCountByDistrictId();
			return res.handler.success({ overduePendingInspectionCount });
		} catch (err) {
			logger.error('Error in getOverduePendingInspectionCountByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getOverduePendingInspectionCountByDistrictId'
			);
		}
	}

	async getOverduePendingInspectionListByDistrictId(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;
			const overduePendingInspectionList =
				await masterService.getOverduePendingInspectionListByDistrictId(
					districtId,
					page,
					limit,
					search
				);
			return res.handler.success({ overduePendingInspectionList });
		} catch (err) {
			logger.error('Error in getOverduePendingInspectionListByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getOverduePendingInspectionListByDistrictId'
			);
		}
	}

	async getSuspensionCountByDistrictId(req, res) {
		try {
			const { suspensionStatus, suspensionCount } = req.query;
			const suspensionsCount = await masterService.getSuspensionCountByDistrictId(
				suspensionStatus,
				suspensionCount
			);
			return res.handler.success({ suspensionsCount });
		} catch (err) {
			logger.error('Error in getSuspensionCountByDistrictId:', { err });
			return res.handler.serverError({}, err.message || 'Error in getSuspensionCountByDistrictId');
		}
	}

	async getSuspensionListByDistrictId(req, res) {
		try {
			const { districtId, page, limit, search, suspensionStatus, suspensionCount } = req.query;
			const suspensionList = await masterService.getSuspensionListByDistrictId(
				districtId,
				page,
				limit,
				search,
				suspensionStatus,
				suspensionCount
			);
			return res.handler.success({ suspensionList });
		} catch (err) {
			logger.error('Error in getSuspensionListByDistrictId:', { err });
			return res.handler.serverError({}, err.message || 'Error in getSuspensionListByDistrictId');
		}
	}

	async getFactoryCountByDistrictId(req, res) {
		try {
			const factoryCount = await masterService.getFactoryCountByDistrictId();
			return res.handler.success({ factoryCount });
		} catch (err) {
			logger.error('Error in getFactoryCountByDistrictId:', { err });
			return res.handler.serverError({}, err.message || 'Error in getFactoryCountByDistrictId');
		}
	}

	async getFactoryListByDistrictId(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;
			const factoryList = await masterService.getFactoryListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return res.handler.success({ factoryList });
		} catch (err) {
			logger.error('Error in getFactoryListByDistrictId:', { err });
			return res.handler.serverError({}, err.message || 'Error in getFactoryListByDistrictId');
		}
	}

	async getInspectionCompletedCountByDistrictId(req, res) {
		try {
			const inspectionCompletedCount =
				await masterService.getInspectionCompletedCountByDistrictId();
			return res.handler.success({ inspectionCompletedCount });
		} catch (err) {
			logger.error('Error in getInspectionCompletedCountByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getInspectionCompletedCountByDistrictId'
			);
		}
	}

	async getInspectionCompletedListByDistrictId(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;
			const inspectionCompletedList = await masterService.getInspectionCompletedListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return res.handler.success({ inspectionCompletedList });
		} catch (err) {
			logger.error('Error in getInspectionCompletedListByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getInspectionCompletedListByDistrictId'
			);
		}
	}

	async getMachineTypeCountByDistrictId(req, res) {
		try {
			const { machineType } = req.query;
			const machineTypeCount = await masterService.getMachineTypeCountByDistrictId(machineType);
			return res.handler.success({ machineTypeCount });
		} catch (err) {
			logger.error('Error in getMachineTypeCountByDistrictId:', { err });
			return res.handler.serverError({}, err.message || 'Error in getMachineTypeCountByDistrictId');
		}
	}

	async getMachineTypeListByDistrictId(req, res) {
		try {
			const { districtId, page, limit, search, machineType } = req.query;
			const machineTypeList = await masterService.getMachineTypeListByDistrictId(
				districtId,
				page,
				limit,
				search,
				machineType
			);
			return res.handler.success({ machineTypeList });
		} catch (err) {
			logger.error('Error in getMachineTypeListByDistrictId:', { err });
			return res.handler.serverError({}, err.message || 'Error in getMachineTypeListByDistrictId');
		}
	}

	async getPendingInspectionCountByDistrictId(req, res) {
		try {
			const pendingInspectionCount = await masterService.getPendingInspectionCountByDistrictId();
			return res.handler.success({ pendingInspectionCount });
		} catch (err) {
			logger.error('Error in getPendingInspectionCountByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getPendingInspectionCountByDistrictId'
			);
		}
	}

	async getPendingInspectionListByDistrictId(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;
			const pendingInspectionList = await masterService.getPendingInspectionListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return res.handler.success({ pendingInspectionList });
		} catch (err) {
			logger.error('Error in getPendingInspectionListByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getPendingInspectionListByDistrictId'
			);
		}
	}

	async getRejectedInspectionCountByDistrictId(req, res) {
		try {
			const rejectedInspectionCount = await masterService.getRejectedInspectionCountByDistrictId();
			return res.handler.success({ rejectedInspectionCount });
		} catch (err) {
			logger.error('Error in getRejectedInspectionCountByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getRejectedInspectionCountByDistrictId'
			);
		}
	}

	async getRejectedInspectionListByDistrictId(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;
			const rejectedInspectionList = await masterService.getRejectedInspectionListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return res.handler.success({ rejectedInspectionList });
		} catch (err) {
			logger.error('Error in getRejectedInspectionListByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getRejectedInspectionListByDistrictId'
			);
		}
	}

	async getExpiredMachineCountByDistrictId(req, res) {
		try {
			const expiredCount = await masterService.getExpiredMachineCountByDistrictId();
			return res.handler.success({ expiredCount });
		} catch (err) {
			logger.error('Error in getExpiredMachineCountByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getExpiredMachineCountByDistrictId'
			);
		}
	}

	async getExpiredMachineListByDistrictId(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;
			const expiredList = await masterService.getExpiredMachineListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return res.handler.success({ expiredList });
		} catch (err) {
			logger.error('Error in getExpiredMachineListByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getExpiredMachineListByDistrictId'
			);
		}
	}

	async getCompetentMachineCount(req, res) {
		try {
			const { machineAlias } = req.query;
			const count = await masterService.getCompetentMachineCount(machineAlias);
			return res.handler.success({ count });
		} catch (err) {
			logger.error('Error in getCompetentMachineCount:', { err });
			return res.handler.serverError({}, err.message || 'Error in getCompetentMachineCount');
		}
	}
}

export default MasterController;
