// SERVICES
import CompetentService from '../services/competent.service.js';
// UTILS
import logger from '../utils/logger.js';

const competentService = new CompetentService();

class CompetentController {
	async inspectionFactory(req, res) {
		try {
			const { competentUserId, page, limit } = req.query;
			const result = await competentService.inspectionFactory(competentUserId, page, limit);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in inspectionFactory:', { err });
			return res.handler.serverError({}, err.message || 'Error in inspectionFactory');
		}
	}

	async getFactoryList(req, res) {
		try {
			const { factoryUserId, page, limit } = req.query;
			const result = await competentService.getFactoryList(factoryUserId, page, limit);

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

	async upsertThermicFluidHeater(req, res) {
		try {
			const result = await competentService.upsertThermicFluidHeater(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertThermicFluidHeater controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Thermic Fluid Heater Inspection');
		}
	}

	async getPressureVesselInspection(req, res) {
		try {
			const { factoryUserId, machineNo } = req.query;
			const result = await competentService.getPressureVesselInspection(factoryUserId, machineNo);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getPressureVesselInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getPressureVesselInspection');
		}
	}

	async getHoistLiftInspection(req, res) {
		try {
			const { factoryUserId, machineNo } = req.query;
			const result = await competentService.getHoistLiftInspection(factoryUserId, machineNo);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getHoistLiftInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getHoistLiftInspection');
		}
	}

	async getEquipmentInspection(req, res) {
		try {
			const { factoryUserId, machineNo } = req.query;
			const result = await competentService.getEquipmentInspection(factoryUserId, machineNo);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getEquipmentInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getEquipmentInspection');
		}
	}

	async getDustFumeExtractionSystem(req, res) {
		try {
			const { factoryUserId, machineNo } = req.query;
			const result = await competentService.getDustFumeExtractionSystem(factoryUserId, machineNo);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getDustFumeExtractionSystem:', { err });
			return res.handler.serverError({}, err.message || 'Error in getDustFumeExtractionSystem');
		}
	}

	async getOvenDriersInspection(req, res) {
		try {
			const { factoryUserId, machineNo } = req.query;
			const result = await competentService.getOvenDriersInspection(factoryUserId, machineNo);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getOvenDriersInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getOvenDriersInspection');
		}
	}

	async getCentrifugeMachineInspection(req, res) {
		try {
			const { factoryUserId, machineNo } = req.query;
			const result = await competentService.getCentrifugeMachineInspection(
				factoryUserId,
				machineNo
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getCentrifugeMachineInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getCentrifugeMachineInspection');
		}
	}

	async getPowerPressInspection(req, res) {
		try {
			const { factoryUserId, machineNo } = req.query;
			const result = await competentService.getPowerPressInspection(factoryUserId, machineNo);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getPowerPressInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getPowerPressInspection');
		}
	}

	async getThermicFluidHeater(req, res) {
		try {
			const { factoryUserId, machineNo } = req.query;
			const result = await competentService.getThermicFluidHeater(factoryUserId, machineNo);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getThermicFluidHeater:', { err });
			return res.handler.serverError({}, err.message || 'Error in getThermicFluidHeater');
		}
	}
}

export default CompetentController;
