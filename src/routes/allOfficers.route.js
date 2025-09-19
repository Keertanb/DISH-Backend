import express from 'express';
// MIDDLEWARES
import validateSchema from '../middlewares/validateSchema.middleware.js';
// VALIDATIONS
import AllOfficersController from '../controllers/allOfficers.controller.js';
// CONTROLLERS
import * as allOfficersValidation from '../validations/allOfficers.validation.js';

const router = express.Router();
const allOfficersController = new AllOfficersController();

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

// Get all dashboard data Count
router.get(
	'/dashboard',
	validateSchema(allOfficersValidation.getDashboard),
	allOfficersController.getDashboard
);

// Review competent officer pause
router.post(
	'/pause-competent-officer',
	validateSchema(allOfficersValidation.pauseCompetentOfficer),
	allOfficersController.pauseCompetentOfficer
);

// Priorities officers top in list interview schedule
router.post(
	'/priorities-officers',
	validateSchema(allOfficersValidation.prioritiesCompetentOfficersStatus),
	allOfficersController.prioritiesCompetentOfficersStatus
);

// Query to district pending list
router.get(
	'/get-queryToDistrict-officers',
	validateSchema(allOfficersValidation.getQueryToDistrictCompetentOfficers),
	allOfficersController.getQueryToDistrictCompetentOfficers
);

export default router;
