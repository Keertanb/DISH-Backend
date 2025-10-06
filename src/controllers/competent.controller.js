// SERVICES
import CompetentService from '../services/competent.service.js';
// UTILS
import logger from '../utils/logger.js';

const competentService = new CompetentService();

class CompetentController {
	async getScheduledInspectionList(req, res) {
		try {
			const { competentUserId, page, limit, search } = req.query;
			const result = await competentService.getScheduledInspectionList(
				competentUserId,
				page,
				limit,
				search
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getScheduledInspectionList:', { err });
			return res.handler.serverError({}, err.message || 'Error in getScheduledInspectionList');
		}
	}

	async scheduledMachineInspectionStatus(req, res) {
		try {
			const { userId, machineNo, scheduleInspectionDate, status, reason } = req.body;

			const result = await competentService.scheduledMachineInspectionStatus({
				userId,
				machineNo,
				scheduleInspectionDate,
				status,
				reason,
			});

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in scheduledMachineInspectionStatus controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in scheduledMachineInspectionStatus controller'
			);
		}
	}

	async inspectionFactory(req, res) {
		try {
			const { competentUserId, page, limit, search } = req.query;
			const result = await competentService.inspectionFactory(competentUserId, page, limit, search);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in inspectionFactory:', { err });
			return res.handler.serverError({}, err.message || 'Error in inspectionFactory');
		}
	}

	async getFactoryList(req, res) {
		try {
			const { factoryUserId, page, limit, search } = req.query;
			const result = await competentService.getFactoryList(factoryUserId, page, limit, search);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getFactoryList:', { err });
			return res.handler.serverError({}, err.message || 'Error in getFactoryList');
		}
	}

	async getCompetentOfficerProfile(req, res) {
		try {
			const { userId } = req.query;

			const profile = await competentService.getCompetentOfficerProfile(userId);

			return res.handler.success(profile);
		} catch (err) {
			logger.error('Error in getCompetentOfficerProfile controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getCompetentOfficerProfile controller'
			);
		}
	}

	async getCompetentApprovedMachineList(req, res) {
		try {
			const { competentUserId, districtId, page, limit, search } = req.query;
			const result = await competentService.getCompetentApprovedMachineList(
				competentUserId,
				districtId,
				page,
				limit,
				search
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getCompetentApprovedMachineList:', { err });
			return res.handler.serverError({}, err.message || 'Error in getCompetentApprovedMachineList');
		}
	}

	async addExperience(req, res) {
		try {
			const result = await competentService.addExperience(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in addExperience controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Add Experience data');
		}
	}
	async upsertPressureVesselInspection(req, res) {
		try {
			const result = await competentService.upsertPressureVesselInspection(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertPressureVesselInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error inserting inspection data');
		}
	}

	async upsertHoistLiftInspection(req, res) {
		try {
			const result = await competentService.upsertHoistLiftInspection(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertHoistLiftInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Hoist Lift Inspection data');
		}
	}

	async upsertEquipmentInspection(req, res) {
		try {
			const result = await competentService.upsertEquipmentInspection(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertEquipmentInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error inserting Equipment Inspection');
		}
	}

	async upsertDustFumeExtractionSystem(req, res) {
		try {
			const result = await competentService.upsertDustFumeExtractionSystem(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertDustFumeExtractionSystem controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error Dust Fume Extraction System Inspection'
			);
		}
	}

	async upsertOvenDriersInspection(req, res) {
		try {
			const result = await competentService.upsertOvenDriersInspection(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertOvenDriersInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Oven Driers Inspection');
		}
	}

	async upsertCentrifugeMachineInspection(req, res) {
		try {
			const result = await competentService.upsertCentrifugeMachineInspection(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertCentrifugeMachineInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Centrifuge Machine Inspection');
		}
	}

	async upsertPowerPressInspection(req, res) {
		try {
			const result = await competentService.upsertPowerPressInspection(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertPowerPressInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Power Press Inspection');
		}
	}

	async upsertStabilityForm1A(req, res) {
		try {
			const result = await competentService.upsertStabilityForm1A(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertStabilityForm1A controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Stability Form1A');
		}
	}

	async upsertThermicFluidHeater(req, res) {
		try {
			const result = await competentService.upsertThermicFluidHeater(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertThermicFluidHeater controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Thermic Fluid Heater Inspection');
		}
	}

	async upsertWaterSealedGasHolderForm11A(req, res) {
		try {
			const result = await competentService.upsertWaterSealedGasHolderForm11A(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertWaterSealedGasHolderForm11A controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Water Sealed Gas Holder Form11A');
		}
	}

	async upsertConfinedSpace(req, res) {
		try {
			const result = await competentService.upsertConfinedSpace(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertConfinedSpace controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Confined Space Form');
		}
	}

	async getPressureVesselInspection(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getPressureVesselInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getPressureVesselInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getPressureVesselInspection');
		}
	}

	async getHoistLiftInspection(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getHoistLiftInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getHoistLiftInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getHoistLiftInspection');
		}
	}

	async getEquipmentInspection(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getEquipmentInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getEquipmentInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getEquipmentInspection');
		}
	}

	async getDustFumeExtractionSystem(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getDustFumeExtractionSystem(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getDustFumeExtractionSystem:', { err });
			return res.handler.serverError({}, err.message || 'Error in getDustFumeExtractionSystem');
		}
	}

	async getOvenDriersInspection(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getOvenDriersInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getOvenDriersInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getOvenDriersInspection');
		}
	}

	async getCentrifugeMachineInspection(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getCentrifugeMachineInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getCentrifugeMachineInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getCentrifugeMachineInspection');
		}
	}

	async getPowerPressInspection(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getPowerPressInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getPowerPressInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getPowerPressInspection');
		}
	}

	async getThermicFluidHeater(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getThermicFluidHeater(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getThermicFluidHeater:', { err });
			return res.handler.serverError({}, err.message || 'Error in getThermicFluidHeater');
		}
	}

	async getStabilityForm1A(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getStabilityForm1A(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getStabilityForm1A:', { err });
			return res.handler.serverError({}, err.message || 'Error in getStabilityForm1A');
		}
	}

	async getWaterSealedGasHolderForm11A(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getWaterSealedGasHolderForm11A(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getWaterSealedGasHolderForm11A:', { err });
			return res.handler.serverError({}, err.message || 'Error in getWaterSealedGasHolderForm11A');
		}
	}

	async getConfinedSpace(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getConfinedSpace(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getConfinedSpace:', { err });
			return res.handler.serverError({}, err.message || 'Error in getConfinedSpace');
		}
	}
}

export default CompetentController;
