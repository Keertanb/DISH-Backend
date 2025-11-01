import e from 'express';
import Joi from 'joi';

export const registerMachine = {
	body: Joi.object().keys({
		userId: Joi.string().max(30).required(),
		machineName: Joi.string().max(70).required(),
		totalMachines: Joi.number().required(),
	}),
};

export const getMachineCount = {
	query: Joi.object().keys({
		userId: Joi.string().max(30).required(),
	}),
};

export const getMachineList = {
	query: Joi.object().keys({
		userId: Joi.string().max(30).required(),
		machineType: Joi.string().max(20).optional(),
		page: Joi.number().integer().required(),
		limit: Joi.number().integer().required(),
		search: Joi.string().max(100).optional(),
	}),
};

export const addNewMachine = {
	body: Joi.object().keys({
		userId: Joi.string().max(30).required(),
		machineName: Joi.string().max(40).required(),
		quantity: Joi.number().required(),
		machineDescription: Joi.string().max(300).required(),
		serialNumbers: Joi.string().max(50).required(),
		dateOfFirstUse: Joi.date().required(),
		dateOfInstallation: Joi.date().optional(),
		nameOfManufacture: Joi.string().max(200).required(),
		addressOfManufacture: Joi.string().max(200).required(),
		dateOfConstruction: Joi.date().optional(),
		thicknessOfWall: Joi.string().max(30).optional(),
		identityFicationOfMachine: Joi.string().max(50).optional(),
		safeWorkingPressure: Joi.when('machineName', {
			is: 'Pressure Vessel or Plant',
			then: Joi.string().max(50).required(),
			otherwise: Joi.string().optional(),
		}),
	}),
};

export const machineInspection = {
	body: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		machineName: Joi.string().max(70).required(),
		inspectionCount: Joi.number().integer().min(1).required(),
		inspectionDate: Joi.date().required(),
		machineNo: Joi.when('inspectionCount', {
			is: 1,
			then: Joi.string().max(50).required(),
			otherwise: Joi.string().allow(null).optional(),
		}),
		competentUserIds: Joi.array()
			.items(
				Joi.object({
					userId: Joi.string().max(30).required(),
				})
			)
			.min(1)
			.required(),
	}),
};

export const getFactoryOwnerProfile = {
	query: Joi.object().keys({
		userId: Joi.string().required(),
	}),
};

export const getFactoryMachineInspectionList = {
	query: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().max(100).optional(),
	}),
};
