// SERVICES
import FactoryService from '../services/factory.service.js';

// UTILS
import logger from '../utils/logger.js';

const factoryService = new FactoryService();

class FactoryController {
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

	async machineInspection(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate, competentUserId } = req.body;

			const machine = await factoryService.machineInspection({
				factoryUserId,
				machineNo,
				scheduleInspectionDate,
				competentUserId,
			});

			return res.handler.success(machine);
		} catch (err) {
			logger.error('Error in machineInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error in machineInspection controller');
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

	async getUpcomingInspectionUsers(req, res) {
		try {
			const result = await factoryService.getUpcomingInspectionUsers();
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getUpcomingInspectionUsers controller:', { err });
			return res.handler.serverError({}, err.message || 'Error fetching upcoming inspections');
		}
	}

	async nextInspectionOnMachine(req, res) {
		try {
			const result = await factoryService.nextInspectionOnMachine();
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in nextInspectionOnMachine controller:', { err });
			return res.handler.serverError({}, err.message || 'Error fetching upcoming inspections');
		}
	}
}

export default FactoryController;
