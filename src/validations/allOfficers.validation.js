import Joi from 'joi';

// Validation for getting competent officers
export const getCompetentOfficers = {
    query: Joi.object().keys({
        districtId: Joi.number().optional(),
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
    body: Joi.object().keys({
        competentOfficerId: Joi.number().integer().positive().required()
            .description('ID of the competent officer being reviewed'),
        status: Joi.string().valid('Approved', 'Rejected').required()
            .description('Review status (Approved/Rejected)'),
        comments: Joi.string().max(1000).optional()
            .description('Optional comments for the review')
    })
    .with('status', ['competentOfficerId']) // Requires both status and competentOfficerId together
};
