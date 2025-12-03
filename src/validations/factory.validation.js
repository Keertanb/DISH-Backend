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

export const inactiveMachine = {
	body: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(50).required(),
	}),
};
