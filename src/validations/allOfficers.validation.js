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
