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
			const {
				factoryUserId,
				machineName,
				inspectionCount,
				inspectionDate,
				machineNo,
				competentUserIds,
			} = req.body;

			const competentUserIdsJson = JSON.stringify(competentUserIds);

			const result = await factoryService.machineInspection({
				factoryUserId,
				machineName,
				inspectionCount,
				machineNo,
				inspectionDate,
				competentUserIds: competentUserIdsJson,
			});
			return res.handler.success(result);
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

	async beforePendingInspectionUsers(req, res) {
		try {
			const result = await factoryService.beforePendingInspectionUsers();
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in beforePendingInspectionUsers controller:', { err });
			return res.handler.serverError({}, err.message || 'Error fetching pending inspections');
		}
	}
}

export default FactoryController;
