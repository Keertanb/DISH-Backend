import Joi from 'joi';


export const blocksByDistrictId = {
	query: Joi.object().keys({
		districtId: Joi.number().required(),
	}),
};

export const bankDetailByIFSCCode = {
	query: Joi.object().keys({
		IFSCCode: Joi.string().trim().allow('NA').length(11).message('IFSCCode must be 11 characters long').required(),
	}),
};