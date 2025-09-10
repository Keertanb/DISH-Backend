import express from 'express';

import FactoryController from '../controllers/factory.controller.js';

import * as factoryValidation from '../validations/factory.validation.js';
import validateSchema from '../middlewares/validateSchema.middleware.js';

const router = express.Router();
const factoryController = new FactoryController();

router.get(
	'/get-factory-details',
	validateSchema(factoryValidation.getFactoryDetails),
	factoryController.getFactoryDetails
);

router.get(
	'/get-machine-list',
	validateSchema(factoryValidation.getMachineList),
	factoryController.getMachineList
);

router.post(
	'/register-new-machine',
	validateSchema(factoryValidation.addNewMachine),
	factoryController.addNewMachine
);

export default router;
