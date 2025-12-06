import express from 'express';
// MIDDLEWARES
import validateSchema from '../middlewares/validateSchema.middleware.js';
// VALIDATIONS
import AllOfficersController from '../controllers/allOfficers.controller.js';
// CONTROLLERS
import * as allOfficersValidation from '../validations/allOfficers.validation.js';
//config
import { jwtMiddleware } from '../config/jwt.js';

const router = express.Router();
const allOfficersController = new AllOfficersController();

// Get competent officers
router.get(
	'/get-all-officers',
	jwtMiddleware,
	validateSchema(allOfficersValidation.getCompetentPendingOfficers),
	allOfficersController.getCompetentPendingOfficers
);

// Get all dashboard data Count
router.get(
	'/dashboard',
	jwtMiddleware,
	validateSchema(allOfficersValidation.getDashboard),
	allOfficersController.getDashboard
);

// Get Active competent officers
router.get(
	'/get-approved-officers',
	jwtMiddleware,
	validateSchema(allOfficersValidation.getActiveCompetentOfficers),
	allOfficersController.getActiveCompetentOfficers
);

// Update Status competent officers
router.post(
	'/update-competent-officers-status',
	jwtMiddleware,
	validateSchema(allOfficersValidation.updateCompetentOfficersStatus),
	allOfficersController.updateCompetentOfficersStatus
);

// Get Interview competent officers
router.get(
	'/get-interview-officers',
	jwtMiddleware,
	validateSchema(allOfficersValidation.getInterviewCompetentOfficers),
	allOfficersController.getInterviewCompetentOfficers
);

// schedule Interview
router.post(
	'/schedule-interview',
	jwtMiddleware,
	validateSchema(allOfficersValidation.scheduleInterview),
	allOfficersController.scheduleInterview
);

// reschedule Interview
router.post(
	'/reschedule-interview',
	jwtMiddleware,
	validateSchema(allOfficersValidation.rescheduleInterview),
	allOfficersController.rescheduleInterview
);

// Update Status Interview competent officers (Transfer To super Admin/Reject)
router.post(
	'/interview-competent-officers-status',
	jwtMiddleware,
	validateSchema(allOfficersValidation.InterviewCompetentOfficersStatus),
	allOfficersController.interviewCompetentOfficersStatus
);

// Get Transfer to super admin competent officers
router.get(
	'/get-transfer-super-admin-officers',
	jwtMiddleware,
	validateSchema(allOfficersValidation.getTransferToSuperAdminCompetentOfficers),
	allOfficersController.getTransferToSuperAdminCompetentOfficers
);

// update Transfer to super admin competent officers (Approve/Rejected)
router.post(
	'/transfer-super-admin-competent-officers-status',
	jwtMiddleware,
	validateSchema(allOfficersValidation.transferToSuperAdminCompetentOfficersStatus),
	allOfficersController.transferToSuperAdminCompetentOfficersStatus
);

// Review competent officer pause
router.post(
	'/pause-competent-officer',
	jwtMiddleware,
	validateSchema(allOfficersValidation.pauseCompetentOfficer),
	allOfficersController.pauseCompetentOfficer
);

// Priorities officers top in list interview schedule
router.post(
	'/priorities-officers',
	jwtMiddleware,
	validateSchema(allOfficersValidation.prioritiesCompetentOfficersStatus),
	allOfficersController.prioritiesCompetentOfficersStatus
);

// Query to district pending list
router.get(
	'/get-queryToDistrict-officers',
	jwtMiddleware,
	validateSchema(allOfficersValidation.getQueryToDistrictCompetentOfficers),
	allOfficersController.getQueryToDistrictCompetentOfficers
);

// Get all factory owners
router.get(
	'/get-factory-owners',
	jwtMiddleware,
	validateSchema(allOfficersValidation.getFactoryOwners),
	allOfficersController.getFactoryOwners
);

// Get all competent renew officers List
router.get(
	'/get-all-renew-officers',
	jwtMiddleware,
	validateSchema(allOfficersValidation.getCompetentRenewOfficersList),
	allOfficersController.getCompetentRenewOfficersList
);

// Update Status Renew competent officers (Approve/Reject)
router.post(
	'/renew-competent-officers-status',
	jwtMiddleware,
	validateSchema(allOfficersValidation.renewCompetentOfficersStatus),
	allOfficersController.renewCompetentOfficersStatus
);

// Get all competent person status is TimeEnd
router.get(
	'/get-competent-timeend-officers',
	jwtMiddleware,
	validateSchema(allOfficersValidation.getCompetentTimeEndOfficers),
	allOfficersController.getCompetentTimeEndOfficersList
);

// TimeEnd competent approved last chance renewal
router.put(
	'/timeend-competent-officers-renewal',
	jwtMiddleware,
	validateSchema(allOfficersValidation.timeEndCompetentOfficersRenewal),
	allOfficersController.timeEndCompetentOfficersRenewal
);

export default router;
