import Joi from 'joi';

// Validation for getting competent officers
export const getCompetentOfficers = {
	query: Joi.object().keys({
		districtId: Joi.number().optional(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().optional(),
	}),
};

// Validation for getting Active competent officers
export const getActiveCompetentOfficers = {
	query: Joi.object().keys({
		districtId: Joi.number().optional(),
		page: Joi.number().optional(),
		limit: Joi.number().optional(),
		search: Joi.string().optional(),
	}),
};

export const getDashboard = {
	query: Joi.object().keys({
		userId: Joi.string().max(30).optional(),
	}),
};

// Validation for getting Interview competent officers
export const getInterviewCompetentOfficers = {
	query: Joi.object().keys({
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().optional(),
	}),
};

export const updateCompetentOfficersStatus = {
	body: Joi.object().keys({
		userId: Joi.string().max(30).required(),

		applicationType: Joi.string()
			.valid('Approved', 'Reject', 'RecommendedByDistrict', 'QueryToDistrict')
			.required(),

		reason: Joi.when('applicationType', {
			is: 'Reject',
			then: Joi.string().max(255).required(),
			otherwise: Joi.allow(null).optional(),
		}),
	}),
};

export const scheduleInterview = {
	body: Joi.object().keys({
		interviewCandidates: Joi.array()
			.items(Joi.object({ userId: Joi.string().max(30).required() }))
			.min(1)
			.required(),
		scheduledInterviewDate: Joi.date().required(),
	}),
};

export const InterviewCompetentOfficersStatus = {
	body: Joi.object().keys({
		userId: Joi.string().max(30).required(),

		applicationType: Joi.string().valid('Approved', 'Reject').required(),

		reason: Joi.when('applicationType', {
			is: 'Reject',
			then: Joi.string().max(255).required(),
			otherwise: Joi.allow(null).optional(),
		}),
	}),
};

export const pauseCompetentOfficer = {
	body: Joi.object().keys({
		userId: Joi.string().max(30).required(),
	}),
};

export const prioritiesCompetentOfficersStatus = {
	body: Joi.object().keys({
		userId: Joi.string().max(30).required(),
	}),
};

export const getQueryToDistrictCompetentOfficers = {
	query: Joi.object().keys({
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().optional(),
	}),
};

export const getFactoryOwners = {
	query: Joi.object().keys({
		districtId: Joi.number().optional(),
		page: Joi.number().optional(),
		limit: Joi.number().optional(),
		search: Joi.string().optional(),
	}),
};

export const getCompetentRenewOfficersList = {
	query: Joi.object().keys({
		districtId: Joi.number().optional(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().optional(),
	}),
};

export const renewCompetentOfficersStatus = {
	body: Joi.object().keys({
		userId: Joi.string().max(30).required(),

		applicationType: Joi.string().valid('Approved', 'Reject').required(),

		reason: Joi.when('applicationType', {
			is: 'Reject',
			then: Joi.string().max(255).required(),
			otherwise: Joi.allow(null).optional(),
		}),
	}),
};
