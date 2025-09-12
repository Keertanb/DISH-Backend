import Joi from 'joi';

export const inspectionFactory = {
	query: Joi.object().keys({
		competentUserId: Joi.string().max(30).required(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
	}),
};

export const getFactoryList = {
	query: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
	}),
};
