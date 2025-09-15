// MODELS
import CompetentModel from '../models/competent.mode.js';

// UTILS
import logger from '../utils/logger.js';

const competentModel = new CompetentModel();

class CompetentService {
	async inspectionFactory(competentUserId, page, limit) {
		try {
			const result = await competentModel.inspectionFactory(competentUserId, page, limit);
			return result;
		} catch (err) {
			logger.error('Error in inspectionFactory service:', { err });
			throw err;
		}
	}

	async getFactoryList(factoryUserId, page, limit) {
		try {
			const result = await competentModel.getFactoryList(factoryUserId, page, limit);
			return result;
		} catch (err) {
			logger.error('Error in getFactoryList service:', { err });
			throw err;
		}
	}

	async getCompetentOfficerProfile(userId) {
		try {
			const profile = await competentModel.getCompetentOfficerProfile(userId);
			return profile && profile.length > 0 ? profile[0] : null;
		} catch (err) {
			logger.error('Error in getCompetentOfficerProfile service:', { err });
			throw err;
		}
	}

	async upsertPressureVesselInspection(data) {
		try {
			const result = await competentModel.upsertPressureVesselInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertPressureVesselInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertHoistLiftInspection(data) {
		try {
			const result = await competentModel.upsertHoistLiftInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertHoistLiftInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertEquipmentInspection(data) {
		try {
			const result = await competentModel.upsertEquipmentInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertEquipmentInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertDustFumeExtractionSystem(data) {
		try {
			const result = await competentModel.upsertDustFumeExtractionSystem(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertDustFumeExtractionSystem service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertOvenDriersInspection(data) {
		try {
			const result = await competentModel.upsertOvenDriersInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertOvenDriersInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertCentrifugeMachineInspection(data) {
		try {
			const result = await competentModel.upsertCentrifugeMachineInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertCentrifugeMachineInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertPowerPressInspection(data) {
		try {
			const result = await competentModel.upsertPowerPressInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertPowerPressInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertThermicFluidHeater(data) {
		try {
			const result = await competentModel.upsertThermicFluidHeater(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertThermicFluidHeater service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async getPressureVesselInspection(factoryUserId, machineNo) {
		try {
			const result = await competentModel.getPressureVesselInspection(factoryUserId, machineNo);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getPressureVesselInspection service:', { err });
			throw err;
		}
	}

	async getHoistLiftInspection(factoryUserId, machineNo) {
		try {
			const result = await competentModel.getHoistLiftInspection(factoryUserId, machineNo);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getHoistLiftInspection service:', { err });
			throw err;
		}
	}

	async getEquipmentInspection(factoryUserId, machineNo) {
		try {
			const result = await competentModel.getEquipmentInspection(factoryUserId, machineNo);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getEquipmentInspection service:', { err });
			throw err;
		}
	}

	async getDustFumeExtractionSystem(factoryUserId, machineNo) {
		try {
			const result = await competentModel.getDustFumeExtractionSystem(factoryUserId, machineNo);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getDustFumeExtractionSystem service:', { err });
			throw err;
		}
	}

	async getOvenDriersInspection(factoryUserId, machineNo) {
		try {
			const result = await competentModel.getOvenDriersInspection(factoryUserId, machineNo);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getOvenDriersInspection service:', { err });
			throw err;
		}
	}

	async getCentrifugeMachineInspection(factoryUserId, machineNo) {
		try {
			const result = await competentModel.getCentrifugeMachineInspection(factoryUserId, machineNo);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getCentrifugeMachineInspection service:', { err });
			throw err;
		}
	}

	async getPowerPressInspection(factoryUserId, machineNo) {
		try {
			const result = await competentModel.getPowerPressInspection(factoryUserId, machineNo);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getPowerPressInspection service:', { err });
			throw err;
		}
	}

	async getThermicFluidHeater(factoryUserId, machineNo) {
		try {
			const result = await competentModel.getThermicFluidHeater(factoryUserId, machineNo);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getThermicFluidHeater service:', { err });
			throw err;
		}
	}
}
export default CompetentService;
