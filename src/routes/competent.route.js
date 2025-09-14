import express from 'express';

// CONTROLLERS
import CompetentController from '../controllers/competent.controller.js';

import validateSchema from '../middlewares/validateSchema.middleware.js';
import * as competentValidation from '../validations/competent.validation.js';

const router = express.Router();
const competentController = new CompetentController();

router.get(
	'/get-inspection-factory',
	validateSchema(competentValidation.inspectionFactory),
	competentController.inspectionFactory
);

router.get(
	'/get-factory-machine',
	validateSchema(competentValidation.getFactoryList),
	competentController.getFactoryList
);

router.post(
	'/pv-form11',
	validateSchema(competentValidation.pressureVesselInspectionValidation),
	competentController.insertPressureVesselInspection
);

router.post(
	'/hl-form9',
	validateSchema(competentValidation.insertHoistLiftInspection),
	competentController.insertHoistLiftInspection
);

router.post(
	'/lcr-form10',
	validateSchema(competentValidation.insertEquipmentInspection),
	competentController.insertEquipmentInspection
);

router.post(
	'/dfs-form26',
	validateSchema(competentValidation.insertDustFumeExtractionSystem),
	competentController.insertDustFumeExtractionSystem
);

router.post(
	'/oven-driers',
	validateSchema(competentValidation.insertOvenDriersInspection),
	competentController.insertOvenDriersInspection
);

router.post(
	'/centrifuge-machine',
	validateSchema(competentValidation.insertCentrifugeMachineInspection),
	competentController.insertCentrifugeMachineInspection
);

router.post(
	'/psd-inspection',
	validateSchema(competentValidation.insertPowerPressInspection),
	competentController.insertPowerPressInspection
);

router.post(
	'/thermic-fluid-heater',
	validateSchema(competentValidation.insertThermicFluidHeater),
	competentController.insertThermicFluidHeater
);
export default router;
