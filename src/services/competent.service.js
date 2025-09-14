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

	async insertPressureVesselInspection(data) {
		try {
			const result = await competentModel.insertPressureVesselInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in insertPressureVesselInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async insertHoistLiftInspection(data) {
		try {
			const result = await competentModel.insertHoistLiftInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in insertHoistLiftInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async insertEquipmentInspection(data) {
		try {
			const result = await competentModel.insertEquipmentInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in insertEquipmentInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async insertDustFumeExtractionSystem(data) {
		try {
			const result = await competentModel.insertDustFumeExtractionSystem(data);
			return result;
		} catch (err) {
			logger.error('Error in insertDustFumeExtractionSystem service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async insertOvenDriersInspection(data) {
		try {
			const result = await competentModel.insertOvenDriersInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in insertOvenDriersInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async insertCentrifugeMachineInspection(data) {
		try {
			const result = await competentModel.insertCentrifugeMachineInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in insertCentrifugeMachineInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async insertPowerPressInspection(data) {
		try {
			const result = await competentModel.insertPowerPressInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in insertPowerPressInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async insertThermicFluidHeater(data) {
		try {
			const result = await competentModel.insertThermicFluidHeater(data);
			return result;
		} catch (err) {
			logger.error('Error in insertThermicFluidHeater service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}
}
export default CompetentService;
