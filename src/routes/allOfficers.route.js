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

// Get competent officer profile
router.get(
	'/competent-officer-profile',
	validateSchema(allOfficersValidation.getCompetentOfficerProfile),
	allOfficersController.getCompetentOfficerProfile
);

router.post(
	'/schedule-interview',
	validateSchema(allOfficersValidation.scheduleInterview),
	allOfficersController.scheduleInterview
);

// Review competent officer (Approve/Reject)
router.put(
	'/review-competent-officer',
	validateSchema(allOfficersValidation.reviewCompetentOfficer),
	allOfficersController.reviewCompetentOfficer
);

// Get dashboard data
router.get('/dashboard', allOfficersController.getDashboard);

export default router;
