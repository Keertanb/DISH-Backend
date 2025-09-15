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

// Get competent officer profile
router.get(
	'/competent-officer-profile',
	validateSchema(competentValidation.getCompetentOfficerProfile),
	competentController.getCompetentOfficerProfile
);

router.post(
	'/pv-form11',
	validateSchema(competentValidation.upsertPressureVesselInspection),
	competentController.upsertPressureVesselInspection
);

router.post(
	'/hl-form9',
	validateSchema(competentValidation.upsertHoistLiftInspection),
	competentController.upsertHoistLiftInspection
);

router.post(
	'/lcr-form10',
	validateSchema(competentValidation.upsertEquipmentInspection),
	competentController.upsertEquipmentInspection
);

router.post(
	'/dfs-form26',
	validateSchema(competentValidation.upsertDustFumeExtractionSystem),
	competentController.upsertDustFumeExtractionSystem
);

router.post(
	'/oven-driers',
	validateSchema(competentValidation.upsertOvenDriersInspection),
	competentController.upsertOvenDriersInspection
);

router.post(
	'/centrifuge-machine',
	validateSchema(competentValidation.upsertCentrifugeMachineInspection),
	competentController.upsertCentrifugeMachineInspection
);

router.post(
	'/psd-inspection',
	validateSchema(competentValidation.upsertPowerPressInspection),
	competentController.upsertPowerPressInspection
);

router.post(
	'/thermic-fluid-heater',
	validateSchema(competentValidation.upsertThermicFluidHeater),
	competentController.upsertThermicFluidHeater
);

router.get(
	'/get-pv-form11',
	validateSchema(competentValidation.getPressureVesselInspection),
	competentController.getPressureVesselInspection
);

router.get(
	'/get-hl-form9',
	validateSchema(competentValidation.getHoistLiftInspection),
	competentController.getHoistLiftInspection
);

router.get(
	'/get-lcr-form10',
	validateSchema(competentValidation.getEquipmentInspection),
	competentController.getEquipmentInspection
);

router.get(
	'/get-dfs-form26',
	validateSchema(competentValidation.getDustFumeExtractionSystem),
	competentController.getDustFumeExtractionSystem
);

router.get(
	'/get-oven-driers',
	validateSchema(competentValidation.getOvenDriersInspection),
	competentController.getOvenDriersInspection
);

router.get(
	'/get-centrifuge-machine',
	validateSchema(competentValidation.getCentrifugeMachineInspection),
	competentController.getCentrifugeMachineInspection
);

router.get(
	'/get-psd-inspection',
	validateSchema(competentValidation.getPowerPressInspection),
	competentController.getPowerPressInspection
);

router.get(
	'/get-thermic-fluid-heater',
	validateSchema(competentValidation.getThermicFluidHeater),
	competentController.getThermicFluidHeater
);

export default router;
