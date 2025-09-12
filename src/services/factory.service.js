import FactoryModel from '../models/factory.model.js';

// UTILS
import logger from '../utils/logger.js';

const factoryModel = new FactoryModel();
class FactoryService {
	async getFactoryDetails(userId) {
		try {
			if (!userId || userId.trim() === '') {
				throw new Error('Invalid userId provided');
			}

			const factory = await factoryModel.getFactoryDetails(userId);
			return factory && factory.length > 0 ? factory[0] : null;
		} catch (err) {
			logger.error('Error in getFactoryDetails service:', { err });
			throw err;
		}
	}

	async getMachineList(userId) {
		try {
			if (!userId || userId.trim() === '') {
				throw new Error('Invalid userId provided');
			}

			const machine = await factoryModel.getMachineList(userId);
			return machine;
		} catch (err) {
			logger.error('Error in getMachineList service:', { err });
			throw err;
		}
	}

	async addNewMachine(data) {
		try {
			const machine = await factoryModel.addNewMachine(data);
			return machine && machine.length > 0 ? machine[0] : null;
		} catch (err) {
			logger.error('Error in addNewMachine service:', { err });
			throw err;
		}
	}

	async machineInspection({ factoryUserId, machineNo, scheduleInspectionDate, competentUserId }) {
		try {
			const machine = await factoryModel.machineInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate,
				competentUserId
			);
			return machine;
		} catch (err) {
			logger.error('Error in machineInspection service:', { err });
			throw err;
		}
	}
}

export default FactoryService;
