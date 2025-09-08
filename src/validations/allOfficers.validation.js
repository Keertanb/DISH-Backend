import Joi from 'joi';

export const getCompetentOfficers = {
	query: Joi.object().keys({
		districtId: Joi.number().optional(),
	}),
};

export const getCompetentOfficerProfile = {
	query: Joi.object().keys({
		userId: Joi.string().required(),
	}),
};
