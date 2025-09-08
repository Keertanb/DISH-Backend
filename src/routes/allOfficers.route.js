import express from 'express';
import validateSchema from '../middlewares/validateSchema.middleware.js';
import { validateToken } from '../middlewares/validateToken.middleware.js';
import { checkRole } from '../middlewares/checkRole.middleware.js';
import AllOfficersController from '../controllers/allOfficers.controller.js';
import * as allOfficersValidation from '../validations/allOfficers.validation.js';

const allOfficersController = new AllOfficersController();
const router = express.Router();

// Get competent officers
router.get(
    '/all-officer',
    validateSchema(allOfficersValidation.getCompetentOfficers),
    allOfficersController.getCompetentOfficers
);

// Get competent officer profile
router.get(
    '/competent-officer-profile',
    validateSchema(allOfficersValidation.getCompetentOfficerProfile),
    allOfficersController.getCompetentOfficerProfile
);

// Review competent officer (Approve/Reject)
router.put(
    '/review-competent-officer',
    validateToken, // Ensures user is authenticated
    checkRole(['DISH_OFFICER']), // Only DISH officers can review
    validateSchema(allOfficersValidation.reviewCompetentOfficer),
    allOfficersController.reviewCompetentOfficer
);

// Get dashboard data
router.get('/dashboard', allOfficersController.getDashboard);

export default router;
