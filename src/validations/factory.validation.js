import Joi from 'joi';

export const getFactoryDetails = {
	query: Joi.object().keys({
		userId: Joi.string().max(30).required(),
	}),
};

export const getMachineList = {
	query: Joi.object().keys({
		userId: Joi.string().max(30).required(),
	}),
};

export const addNewMachine = {
	body: Joi.object().keys({
		userId: Joi.string().max(30).required(),
		machineName: Joi.string().max(30).required(),
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
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
		competentUserId: Joi.string().max(30).required(),
	}),
};
