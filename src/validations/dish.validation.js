import Joi from 'joi';

// Validation for getting competent officers
export const allQueryToDistrictOfficersController = {
	query: Joi.object().keys({
		districtId: Joi.number().required(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().optional(),
	}),
};
