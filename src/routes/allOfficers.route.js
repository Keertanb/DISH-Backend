import express from 'express';

import validateSchema from '../middlewares/validateSchema.middleware.js';

import AllOfficersController from '../controllers/allOfficers.controller.js';

import * as allOfficersValidation from '../validations/allOfficers.validation.js';
const allOfficersController = new AllOfficersController();

const router = express.Router();

router.get(
	'/all-officer',
	validateSchema(allOfficersValidation.getCompetentOfficers),
	allOfficersController.getCompetentOfficers
);

router.get(
	'/competent-officer-profile',
	validateSchema(allOfficersValidation.getCompetentOfficerProfile),
	allOfficersController.getCompetentOfficerProfile
);

router.get('/dashboard', allOfficersController.getDashboard);

export default router;
