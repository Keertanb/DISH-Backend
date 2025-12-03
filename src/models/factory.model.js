import sql from 'mssql';
// DATABASE
import { executeStoredProcedure } from '../database/index.js';
// UTILS
import logger from '../utils/logger.js';

class FactoryModel {
	async registerMachine({ userId, machineName, totalMachines }) {
		try {
			const result = await executeStoredProcedure(
				'SP_RegisterFactoryMachine',
				[
					{ name: 'userId', type: sql.VarChar(30), value: userId },
					{ name: 'machineName', type: sql.VarChar(40), value: machineName },
					{ name: 'totalMachines', type: sql.Int(), value: totalMachines },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in registerMachine model:', { err });
			throw err;
		}
	}

	async getMachineCount(userId) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetFactoryMachineSummary',
				[{ name: 'userId', type: sql.VarChar(30), value: userId }],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getMachineCount model:', { err });
			throw err;
		}
	}

	async getMachineList(userId, machineType, page, limit, search) {
		try {
			logger.info('getMachineList Params:', { userId, machineType, page, limit, search });
			const result = await executeStoredProcedure(
				'SP_GetMachineryFactoryAllocation',
				[
					{ name: 'userId', type: sql.VarChar(30), value: userId },
					{ name: 'machineType', type: sql.VarChar(20), value: machineType ?? null },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],
				true
			);

			return result;
		} catch (err) {
			logger.error('Error in getMachineList model:', { err });
			throw err;
		}
	}

	async getFactoryOwnerProfile(userId) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetFactoryOwnerProfile',
				[{ name: 'userId', type: sql.VarChar(30), value: userId }],
				true
			);
			if (result && result[0]?.machines) {
				result[0].machines = JSON.parse(result[0].machines);
			}
			return result;
		} catch (err) {
			logger.error('Error in getFactoryOwnerProfile model:', { err });
			throw err;
		}
	}

	async getFactoryMachineInspectionList(factoryUserId, page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetFactoryMachineInspectionsList',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getFactoryMachineInspectionList model:', { err });
			throw err;
		}
	}

	async inactiveMachine(factoryUserId, machineNo) {
		try {
			const result = await executeStoredProcedure(
				'SP_UpdateInActiveMachine',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{
						name: 'machineNo',
						type: sql.VarChar(50),
						value: machineNo,
					},
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in inactiveMachine model:', { err });
			throw err;
		}
	}

	async upcomingInspectionUsers() {
		try {
			const result = await executeStoredProcedure('SP_UpcomingInspectionUsers', [], true);
			if (Array.isArray(result)) {
				return result;
			}
			if (result && result.recordset) {
				return result.recordset;
			}
			return [];
		} catch (err) {
			logger.error('Error in upcomingInspectionUsers model:', { err });
			throw err;
		}
	}

	async nextInspectionOnMachine() {
		try {
			const result = await executeStoredProcedure('SP_NextInspectionOnMachine', [], true);
			if (Array.isArray(result)) {
				return result;
			}
			if (result && result.recordset) {
				return result.recordset;
			}
			return [];
		} catch (err) {
			logger.error('Error in nextInspectionOnMachine model:', { err });
			throw err;
		}
	}

	async beforeUnderInspectionSchedule() {
		try {
			const result = await executeStoredProcedure('SP_beforeUnderInspectionSchedule', [], true);
			if (Array.isArray(result)) {
				return result;
			}
			if (result && result.recordset) {
				return result.recordset;
			}
			return [];
		} catch (err) {
			logger.error('Error in beforeUnderInspectionSchedule model:', { err });
			throw err;
		}
	}
}

export default FactoryModel;
