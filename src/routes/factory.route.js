import express from 'express';
// MIDDLEWARES
import validateSchema from '../middlewares/validateSchema.middleware.js';
// VALIDATIONS
import * as factoryValidation from '../validations/factory.validation.js';
// CONTROLLERS
import FactoryController from '../controllers/factory.controller.js';
//config
import { jwtMiddleware } from '../config/jwt.js';

const router = express.Router();
const factoryController = new FactoryController();

// Factory machine register
router.post(
	'/register-machine',
	jwtMiddleware,
	validateSchema(factoryValidation.registerMachine),
	factoryController.registerMachine
);

// Factory machine total count
router.get(
	'/get-machine-count',
	jwtMiddleware,
	validateSchema(factoryValidation.getMachineCount),
	factoryController.getMachineCount
);

// Factory User all machine list
router.get(
	'/get-machine-list',
	jwtMiddleware,
	validateSchema(factoryValidation.getMachineList),
	factoryController.getMachineList
);

// factory profile data
router.get(
	'/factory-owner-profile',
	jwtMiddleware,
	validateSchema(factoryValidation.getFactoryOwnerProfile),
	factoryController.getFactoryOwnerProfile
);

// Get List By Factory machine inspection list
router.get(
	'/get-factory-machine-approved',
	jwtMiddleware,
	validateSchema(factoryValidation.getFactoryMachineInspectionList),
	factoryController.getFactoryMachineInspectionList
);

// Machine Expired
router.post(
	'/inactive-machine',
	jwtMiddleware,
	validateSchema(factoryValidation.inactiveMachine),
	factoryController.inactiveMachine
);

export default router;
