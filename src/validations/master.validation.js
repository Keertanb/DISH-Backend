import Joi from 'joi';

export const blocksByDistrictId = {
	query: Joi.object().keys({
		districtId: Joi.number().required(),
	}),
};

export const bankDetailByIFSCCode = {
	query: Joi.object().keys({
		IFSCCode: Joi.string()
			.trim()
			.allow('NA')
			.length(11)
			.message('IFSCCode must be 11 characters long')
			.required(),
	}),
};

export const pendingCompetentListByDistrictId = {
	query: Joi.object().keys({
		districtId: Joi.number().optional(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().trim().allow('').optional(),
	}),
};

export const factoryListByDistrictId = {
	query: Joi.object().keys({
		districtId: Joi.number().optional(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().trim().allow('').optional(),
	}),
};

export const getInspectionCompletedListByDistrictId = {
	query: Joi.object().keys({
		districtId: Joi.number().optional(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().trim().allow('').optional(),
	}),
};

export const getPendingInspectionListByDistrictId = {
	query: Joi.object().keys({
		districtId: Joi.number().optional(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().trim().allow('').optional(),
	}),
};

export const getOverduePendingInspectionListByDistrictId = {
	query: Joi.object().keys({
		districtId: Joi.number().optional(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().trim().allow('').optional(),
	}),
};
