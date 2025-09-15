import express from 'express';
import validateSchema from '../middlewares/validateSchema.middleware.js';
import AllOfficersController from '../controllers/allOfficers.controller.js';
import * as allOfficersValidation from '../validations/allOfficers.validation.js';

const allOfficersController = new AllOfficersController();
const router = express.Router();

// Get competent officers
router.get(
	'/get-all-officers',
	validateSchema(allOfficersValidation.getCompetentOfficers),
	allOfficersController.getCompetentOfficers
);

// Get Active competent officers
router.get(
	'/get-approved-officers',
	validateSchema(allOfficersValidation.getActiveCompetentOfficers),
	allOfficersController.getActiveCompetentOfficers
);

// Get Interview competent officers
router.get(
	'/get-interview-officers',
	validateSchema(allOfficersValidation.getInterviewCompetentOfficers),
	allOfficersController.getInterviewCompetentOfficers
);

// Update Status competent officers
router.post(
	'/update-competent-officers-status',
	validateSchema(allOfficersValidation.updateCompetentOfficersStatus),
	allOfficersController.updateCompetentOfficersStatus
);

// schedule Interview
router.post(
	'/schedule-interview',
	validateSchema(allOfficersValidation.scheduleInterview),
	allOfficersController.scheduleInterview
);

// Update Status Interview competent officers (Approve/Reject)
router.post(
	'/interview-competent-officers-status',
	validateSchema(allOfficersValidation.InterviewCompetentOfficersStatus),
	allOfficersController.interviewCompetentOfficersStatus
);

// Review competent officer (Approve/Reject)
router.put(
	'/review-competent-officer',
	validateSchema(allOfficersValidation.reviewCompetentOfficer),
	allOfficersController.reviewCompetentOfficer
);

// Get dashboard data
router.get('/dashboard', allOfficersController.getDashboard);

// Review competent officer pause
router.post(
	'/pause-competent-officer',
	validateSchema(allOfficersValidation.pauseCompetentOfficer),
	allOfficersController.pauseCompetentOfficer
);

export default router;
