// SERVICES
import FactoryService from '../services/factory.service.js';

// UTILS
import logger from '../utils/logger.js';

const factoryService = new FactoryService();

class FactoryController {
	async registerMachine(req, res) {
		try {
			const { userId, machineName, totalMachines } = req.body;
			const machine = await factoryService.registerMachine({
				userId,
				machineName,
				totalMachines,
			});
			return res.handler.success(machine);
		} catch (err) {
			logger.error('Error in registerMachine controller:', { err });
			return res.handler.serverError({}, err.message || 'Error in registerMachine controller');
		}
	}

	async getMachineCount(req, res) {
		try {
			const { userId } = req.query;
			const machineCount = await factoryService.getMachineCount(userId);
			return res.handler.success(machineCount);
		} catch (err) {
			logger.error('Error in getMachineCount controller:', { err });
			return res.handler.serverError({}, err.message || 'Error in getMachineCount controller');
		}
	}

	async getMachineList(req, res) {
		try {
			const { userId, machineType, page, limit, search } = req.query;

			const machine = await factoryService.getMachineList(userId, machineType, page, limit, search);

			return res.handler.success(machine);
		} catch (err) {
			logger.error('Error in getMachineList:', { err });
			return res.handler.serverError({}, err.message || 'Error in getMachineList');
		}
	}

	async getFactoryOwnerProfile(req, res) {
		try {
			const { userId } = req.query;

			const profile = await factoryService.getFactoryOwnerProfile(userId);

			return res.handler.success(profile);
		} catch (err) {
			logger.error('Error in getFactoryOwnerProfile controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getFactoryOwnerProfile controller'
			);
		}
	}

	async getFactoryMachineInspectionList(req, res) {
		try {
			const { factoryUserId, page, limit, search } = req.query;

			const machine = await factoryService.getFactoryMachineInspectionList(
				factoryUserId,
				page,
				limit,
				search
			);

			return res.handler.success(machine);
		} catch (err) {
			logger.error('Error in getFactoryMachineInspectionList controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getFactoryMachineInspectionList controller'
			);
		}
	}

	async inactiveMachine(req, res) {
		try {
			const { factoryUserId, machineNo } = req.body;

			const machine = await factoryService.inactiveMachine(factoryUserId, machineNo);

			return res.handler.success(machine);
		} catch (err) {
			logger.error('Error in inactiveMachine controller:', { err });
			return res.handler.serverError({}, err.message || 'Error in inactiveMachine controller');
		}
	}
}

export default FactoryController;
