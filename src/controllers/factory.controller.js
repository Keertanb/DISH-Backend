import FactoryService from '../services/factory.service.js';

// UTILS
import logger from '../utils/logger.js';

const factoryService = new FactoryService();

class FactoryController {
	async getFactoryDetails(req, res) {
		try {
			const { userId } = req.query;

			const details = await factoryService.getFactoryDetails(userId);

			return res.handler.success(details);
		} catch (err) {
			logger.error('Error in getFactoryDetails:', { err });
			return res.handler.serverError({}, err.message || 'Error in getFactoryDetails');
		}
	}

	async getMachineList(req, res) {
		try {
			const { userId } = req.query;

			const machine = await factoryService.getMachineList(userId);

			return res.handler.success(machine);
		} catch (err) {
			logger.error('Error in getMachineList:', { err });
			return res.handler.serverError({}, err.message || 'Error in getMachineList');
		}
	}

	async addNewMachine(req, res) {
		try {
			const machine = await factoryService.addNewMachine(req.body);

			return res.handler.success(machine);
		} catch (err) {
			logger.error('Error in addNewMachine:', { err });
			return res.handler.serverError({}, err.message || 'Error in addNewMachine');
		}
	}
}

export default FactoryController;
