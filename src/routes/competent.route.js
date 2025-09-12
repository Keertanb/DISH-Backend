import express from 'express';

// CONTROLLERS
import CompetentController from '../controllers/competent.controller.js';

import validateSchema from '../middlewares/validateSchema.middleware.js';
import * as competentValidation from '../validations/competent.validation.js';

const router = express.Router();
const competentController = new CompetentController();

router.get(
	'/machine-inspection',
	validateSchema(competentValidation.inspectionFactory),
	competentController.inspectionFactory
);

router.get(
	'/get-factory-machine',
	validateSchema(competentValidation.getFactoryList),
	competentController.getFactoryList
);

export default router;
