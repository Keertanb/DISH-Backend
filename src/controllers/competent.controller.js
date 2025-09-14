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

	async insertPressureVesselInspection(req, res) {
		try {
			const result = await competentService.insertPressureVesselInspection(req.body);
			return res.handler.success(result, 'Pressure vessel inspection inserted successfully!');
		} catch (err) {
			logger.error('Error in insertPressureVesselInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error inserting inspection data');
		}
	}

	async insertHoistLiftInspection(req, res) {
		try {
			const result = await competentService.insertHoistLiftInspection(req.body);
			return res.handler.success(result, 'Hoist Lift Inspection inserted successfully!');
		} catch (err) {
			logger.error('Error in insertHoistLiftInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Hoist Lift Inspection data');
		}
	}

	async insertEquipmentInspection(req, res) {
		try {
			const result = await competentService.insertEquipmentInspection(req.body);
			return res.handler.success(result, 'Equipment Inspection inserted successfully!');
		} catch (err) {
			logger.error('Error in insertEquipmentInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error inserting Equipment Inspection');
		}
	}

	async insertDustFumeExtractionSystem(req, res) {
		try {
			const result = await competentService.insertDustFumeExtractionSystem(req.body);
			return res.handler.success(result, 'Dust Fume Extraction System inserted successfully!');
		} catch (err) {
			logger.error('Error in insertDustFumeExtractionSystem controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error Dust Fume Extraction System Inspection'
			);
		}
	}

	async insertOvenDriersInspection(req, res) {
		try {
			const result = await competentService.insertOvenDriersInspection(req.body);
			return res.handler.success(result, 'Oven Driers Inspection inserted successfully!');
		} catch (err) {
			logger.error('Error in insertOvenDriersInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Oven Driers Inspection');
		}
	}

	async insertCentrifugeMachineInspection(req, res) {
		try {
			const result = await competentService.insertCentrifugeMachineInspection(req.body);
			return res.handler.success(result, 'Centrifuge Machine Inspection inserted successfully!');
		} catch (err) {
			logger.error('Error in insertCentrifugeMachineInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Centrifuge Machine Inspection');
		}
	}

	async insertPowerPressInspection(req, res) {
		try {
			const result = await competentService.insertPowerPressInspection(req.body);
			return res.handler.success(result, 'Power Press Inspection inserted successfully!');
		} catch (err) {
			logger.error('Error in insertPowerPressInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Power Press Inspection');
		}
	}

	async insertThermicFluidHeater(req, res) {
		try {
			const result = await competentService.insertThermicFluidHeater(req.body);
			return res.handler.success(result, 'Thermic Fluid Heater Inspection inserted successfully!');
		} catch (err) {
			logger.error('Error in insertThermicFluidHeater controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Thermic Fluid Heater Inspection');
		}
	}
}

export default CompetentController;
