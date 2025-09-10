import Joi from 'joi';

// Validation for getting competent officers
export const getCompetentOfficers = {
	query: Joi.object().keys({
		districtId: Joi.number().optional(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
	}),
};

// Validation for getting Active competent officers
export const getActiveCompetentOfficers = {
	query: Joi.object().keys({
		districtId: Joi.number().optional(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
	}),
};

// Validation for getting Interview competent officers
export const getInterviewCompetentOfficers = {
	query: Joi.object().keys({
		page: Joi.number().required(),
		limit: Joi.number().required(),
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

// Validation for getting competent officer profile
export const getCompetentOfficerProfile = {
	query: Joi.object().keys({
		userId: Joi.string().required(),
	}),
};

// Validation for reviewing a competent officer
export const reviewCompetentOfficer = {
	body: Joi.object()
		.keys({
			competentOfficerId: Joi.number()
				.integer()
				.positive()
				.required()
				.description('ID of the competent officer being reviewed'),
			status: Joi.string()
				.valid('Approved', 'Rejected')
				.required()
				.description('Review status (Approved/Rejected)'),
			comments: Joi.string().max(1000).optional().description('Optional comments for the review'),
		})
		.with('status', ['competentOfficerId']), // Requires both status and competentOfficerId together
};
