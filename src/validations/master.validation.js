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

export const getCompetentRegisterListByDistrictId = {
	query: Joi.object().keys({
		districtId: Joi.number().required(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().trim().allow('').optional(),
	}),
};

export const machineTypeCompetentListByDistrictId = {
	query: Joi.object().keys({
		districtId: Joi.number().required(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().trim().allow('').optional(),
		isPressureVesselOrPlant: Joi.number().valid(0, 1).optional(),
		isHoistAndLifts: Joi.number().valid(0, 1).optional(),
		isDustFumeExtractionSystem: Joi.number().valid(0, 1).optional(),
		isPowerPressSafetyDevices: Joi.number().valid(0, 1).optional(),
		isWaterSealedGasHolder: Joi.number().valid(0, 1).optional(),
		isLiftingMachinesChainsRopes: Joi.number().valid(0, 1).optional(),
		isOvenAndDriers: Joi.number().valid(0, 1).optional(),
		isCentrifugeMachine: Joi.number().valid(0, 1).optional(),
		isThermicFluidHeater: Joi.number().valid(0, 1).optional(),
		isConfinedSpace: Joi.number().valid(0, 1).optional(),
		isStability: Joi.number().valid(0, 1).optional(),
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

export const getOverduePendingInspectionListByDistrictId = {
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
