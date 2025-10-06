import sql from 'mssql';
// DATABASE
import { executeStoredProcedure } from '../database/index.js';
// UTILS
import logger from '../utils/logger.js';

export const AddMachine = {
	userId: '',
	machineName: '',
	quantity: 0,
	machineDescription: '',
	serialNumbers: '',
	dateOfFirstUse: null,
	dateOfInstallation: null,
	nameOfManufacture: null,
	addressOfManufacture: null,
	dateOfConstruction: null,
	thicknessOfWall: null,
	identityFicationOfMachine: null,
	safeWorkingPressure: null,
};
class FactoryModel {
	async getMachineList(userId) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetMachineryFactoryAllocation',
				[{ name: 'userId', type: sql.VarChar(), value: userId }],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getMachineList model:', { err });
			throw err;
		}
	}

	async addNewMachine(data) {
		try {
			const {
				userId,
				machineName,
				quantity,
				machineDescription,
				serialNumbers,
				dateOfFirstUse,
				dateOfInstallation,
				nameOfManufacture,
				addressOfManufacture,
				dateOfConstruction,
				thicknessOfWall,
				identityFicationOfMachine,
				safeWorkingPressure,
			} = data;
			const result = await executeStoredProcedure(
				'SP_RegisterMachineryFactoryAllocation',
				[
					{ name: 'userId', type: sql.VarChar(30), value: userId },
					{ name: 'machineName', type: sql.VarChar(40), value: machineName },
					{ name: 'quantity', type: sql.Int(), value: quantity },
					{ name: 'machineDescription', type: sql.VarChar(), value: machineDescription },
					{ name: 'serialNumbers', type: sql.VarChar(50), value: serialNumbers },
					{ name: 'dateOfFirstUse', type: sql.Date(), value: dateOfFirstUse },
					{ name: 'dateOfInstallation', type: sql.Date(), value: dateOfInstallation },
					{ name: 'nameOfManufacture', type: sql.VarChar(50), value: nameOfManufacture },
					{ name: 'addressOfManufacture', type: sql.VarChar(200), value: addressOfManufacture },
					{ name: 'dateOfConstruction', type: sql.Date(), value: dateOfConstruction },
					{ name: 'thicknessOfWall', type: sql.VarChar(30), value: thicknessOfWall },
					{
						name: 'identityFicationOfMachine',
						type: sql.VarChar(50),
						value: identityFicationOfMachine,
					},
					{ name: 'safeWorkingPressure', type: sql.VarChar(50), value: safeWorkingPressure },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in addNewMachine model:', { err });
			throw err;
		}
	}

	async machineInspection(factoryUserId, machineNo, scheduleInspectionDate, competentUserId) {
		try {
			const result = await executeStoredProcedure(
				'SP_MachineInspection',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
					{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
					{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in machineInspection model:', { err });
			throw err;
		}
	}

	async getFactoryOwnerProfile(userId) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetFactoryOwnerProfile',
				[{ name: 'userId', type: sql.VarChar(30), value: userId ?? null }],
				true
			);
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

	async getUpcomingInspectionUsers() {
		try {
			const result = await executeStoredProcedure('SP_GetUpcomingInspectionUsers', [], true);
			if (Array.isArray(result)) {
				return result;
			}
			if (result && result.recordset) {
				return result.recordset;
			}
			return [];
		} catch (err) {
			logger.error('Error in getUpcomingInspectionUsers model:', { err });
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
}

export default FactoryModel;
