import express from 'express';
// MIDDLEWARES
import validateSchema from '../middlewares/validateSchema.middleware.js';
// VALIDATIONS
import * as factoryValidation from '../validations/factory.validation.js';
// CONTROLLERS
import FactoryController from '../controllers/factory.controller.js';

const router = express.Router();
const factoryController = new FactoryController();

// Factory machine register
router.post(
	'/register-machine',
	validateSchema(factoryValidation.registerMachine),
	factoryController.registerMachine
);

// Factory machine total count
router.get(
	'/get-machine-count',
	validateSchema(factoryValidation.getMachineCount),
	factoryController.getMachineCount
);

// Factory User all machine list
router.get(
	'/get-machine-list',
	validateSchema(factoryValidation.getMachineList),
	factoryController.getMachineList
);

// Factory user add new machine
router.post(
	'/register-new-machine',
	validateSchema(factoryValidation.addNewMachine),
	factoryController.addNewMachine
);

// Factory user schedule machine inspection
router.post(
	'/machine-inspection',
	validateSchema(factoryValidation.machineInspection),
	factoryController.machineInspection
);

// factory profile data
router.get(
	'/factory-owner-profile',
	validateSchema(factoryValidation.getFactoryOwnerProfile),
	factoryController.getFactoryOwnerProfile
);

// Get List By Factory machine inspection list
router.get(
	'/get-factory-machine-approved',
	validateSchema(factoryValidation.getFactoryMachineInspectionList),
	factoryController.getFactoryMachineInspectionList
);

// Machine Expired
router.post(
	'/inactive-machine',
	validateSchema(factoryValidation.inactiveMachine),
	factoryController.inactiveMachine
);

// Re-schedule machine Inspection warning after 5 day  mail
router.post('/upcoming-inspection', factoryController.getUpcomingInspectionUsers);

// Re-schedule machine Inspection
router.post('/expire-inspection', factoryController.nextInspectionOnMachine);

// machine inspection pending before 15 days mail
router.post('/before-pending-inspection', factoryController.beforePendingInspectionUsers);

export default router;
