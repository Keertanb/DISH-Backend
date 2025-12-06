import express from 'express';
// MIDDLEWARES
import uploadCompetentDocs from '../middlewares/upload.competent.docs.js';
import validateSchema from '../middlewares/validateSchema.middleware.js';
// VALIDATIONS
import * as competentValidation from '../validations/competent.validation.js';
// CONTROLLERS
import CompetentController from '../controllers/competent.controller.js';
//config
import { jwtMiddleware } from '../config/jwt.js';

const router = express.Router();
const competentController = new CompetentController();

//update profile
router.post(
	'/update-profile',
	jwtMiddleware,
	uploadCompetentDocs,
	validateSchema(competentValidation.updateProfile),
	competentController.updateProfile
);

// Apply for competent officer
router.post(
	'/apply-competent-officer',
	jwtMiddleware,
	validateSchema(competentValidation.applyCompetentOfficer),
	competentController.applyCompetentOfficer
);

// // Search Factory by name or factory Id
router.get(
	'/search-factory',
	jwtMiddleware,
	validateSchema(competentValidation.searchFactory),
	competentController.searchFactory
);

// Factory user schedule machine inspection
router.post(
	'/machine-inspection',
	jwtMiddleware,
	validateSchema(competentValidation.factoryMachineInspection),
	competentController.factoryMachineInspection
);

// Get all pending factory list for machine inspection
router.get(
	'/get-inspection-factory',
	jwtMiddleware,
	validateSchema(competentValidation.inspectionFactory),
	competentController.inspectionFactory
);

// Competent add new machine for factory
router.post(
	'/register-new-machine',
	jwtMiddleware,
	validateSchema(competentValidation.addNewMachine),
	competentController.addNewMachine
);

// Get all pending machine inspection list in factory wise
router.get(
	'/get-factory-machine',
	jwtMiddleware,
	validateSchema(competentValidation.getFactoryList),
	competentController.getFactoryList
);

//Get Approved machine inspection list date wise
router.get(
	'/get-approved-machine-inspection',
	jwtMiddleware,
	validateSchema(competentValidation.getApprovedMachineInspectionList),
	competentController.getApprovedMachineInspectionList
);

// Competent officer profile
router.get(
	'/competent-officer-profile',
	jwtMiddleware,
	validateSchema(competentValidation.getCompetentOfficerProfile),
	competentController.getCompetentOfficerProfile
);

// Get all machine approved list by competent officer
router.get(
	'/get-machine-approved-list',
	jwtMiddleware,
	validateSchema(competentValidation.getCompetentApprovedMachineList),
	competentController.getCompetentApprovedMachineList
);

// Competent add another experience
router.post(
	'/add-experience',
	jwtMiddleware,
	validateSchema(competentValidation.addExperience),
	competentController.addExperience
);

// Get list factory machines for competent officer
router.get(
	'/get-identity-By-machines',
	jwtMiddleware,
	validateSchema(competentValidation.getIdentityByMachines),
	competentController.getIdentityByMachines
);

// Pressure Vessel or Plant machine form
router.post(
	'/pv-form11',
	jwtMiddleware,
	validateSchema(competentValidation.upsertPressureVesselInspection),
	competentController.upsertPressureVesselInspection
);

// Hoist & Lifts machine form
router.post(
	'/hl-form9',
	jwtMiddleware,
	validateSchema(competentValidation.upsertHoistLiftInspection),
	competentController.upsertHoistLiftInspection
);

// Equipment inspection machine form
router.post(
	'/lcr-form10',
	jwtMiddleware,
	validateSchema(competentValidation.upsertEquipmentInspection),
	competentController.upsertEquipmentInspection
);

// Dust / Fume Extraction System machine form
router.post(
	'/dfs-form26',
	jwtMiddleware,
	validateSchema(competentValidation.upsertDustFumeExtractionSystem),
	competentController.upsertDustFumeExtractionSystem
);

// Oven and Driers machine form
router.post(
	'/oven-driers',
	jwtMiddleware,
	validateSchema(competentValidation.upsertOvenDriersInspection),
	competentController.upsertOvenDriersInspection
);

// Centrifuge machine form
router.post(
	'/centrifuge-machine',
	jwtMiddleware,
	validateSchema(competentValidation.upsertCentrifugeMachineInspection),
	competentController.upsertCentrifugeMachineInspection
);

// Power Press / Safety Devices machine form
router.post(
	'/psd-inspection',
	jwtMiddleware,
	validateSchema(competentValidation.upsertPowerPressInspection),
	competentController.upsertPowerPressInspection
);

// Thermic Fluid Heater machine form
router.post(
	'/thermic-fluid-heater',
	jwtMiddleware,
	validateSchema(competentValidation.upsertThermicFluidHeater),
	competentController.upsertThermicFluidHeater
);

// Stability machine form
router.post(
	'/stability-form1a',
	jwtMiddleware,
	validateSchema(competentValidation.upsertStabilityForm1A),
	competentController.upsertStabilityForm1A
);

// Water Sealed Gas Holder machine form
router.post(
	'/wsg-form11a',
	jwtMiddleware,
	validateSchema(competentValidation.upsertWaterSealedGasHolderForm11A),
	competentController.upsertWaterSealedGasHolderForm11A
);

// Confined Space form
router.post(
	'/confined-space-form',
	jwtMiddleware,
	validateSchema(competentValidation.upsertConfinedSpace),
	competentController.upsertConfinedSpace
);

// Get data for Pressure Vessel or Plant machine
router.get(
	'/get-pv-form11',
	jwtMiddleware,
	validateSchema(competentValidation.getPressureVesselInspection),
	competentController.getPressureVesselInspection
);

// Get data for Hoist & Lifts machine
router.get(
	'/get-hl-form9',
	jwtMiddleware,
	validateSchema(competentValidation.getHoistLiftInspection),
	competentController.getHoistLiftInspection
);

// Get data for Equipment inspection machine
router.get(
	'/get-lcr-form10',
	jwtMiddleware,
	validateSchema(competentValidation.getEquipmentInspection),
	competentController.getEquipmentInspection
);

// Get data for Dust / Fume Extraction System machine
router.get(
	'/get-dfs-form26',
	jwtMiddleware,
	validateSchema(competentValidation.getDustFumeExtractionSystem),
	competentController.getDustFumeExtractionSystem
);

// Get data for Oven and Driers machine
router.get(
	'/get-oven-driers',
	jwtMiddleware,
	validateSchema(competentValidation.getOvenDriersInspection),
	competentController.getOvenDriersInspection
);

// Get data for Centrifuge machine
router.get(
	'/get-centrifuge-machine',
	jwtMiddleware,
	validateSchema(competentValidation.getCentrifugeMachineInspection),
	competentController.getCentrifugeMachineInspection
);

// Get data for Power Press / Safety Devices machine
router.get(
	'/get-psd-inspection',
	jwtMiddleware,
	validateSchema(competentValidation.getPowerPressInspection),
	competentController.getPowerPressInspection
);

// Get data for Thermic Fluid Heater machine
router.get(
	'/get-thermic-fluid-heater',
	jwtMiddleware,
	validateSchema(competentValidation.getThermicFluidHeater),
	competentController.getThermicFluidHeater
);

// Get data for Stability machine
router.get(
	'/get-stability-form1a',
	jwtMiddleware,
	validateSchema(competentValidation.getStabilityForm1A),
	competentController.getStabilityForm1A
);

// Get data for Water Sealed Gas Holder machine
router.get(
	'/get-wsg-form11a',
	jwtMiddleware,
	validateSchema(competentValidation.getWaterSealedGasHolderForm11A),
	competentController.getWaterSealedGasHolderForm11A
);

// Get data Confined Space form
router.get(
	'/get-confined-space-form',
	jwtMiddleware,
	validateSchema(competentValidation.getConfinedSpace),
	competentController.getConfinedSpace
);

// Renew Competent Officer Application
router.post(
	'/renew-competent-officer',
	jwtMiddleware,
	uploadCompetentDocs,
	validateSchema(competentValidation.renewCompetentOfficer),
	competentController.renewCompetentOfficer
);

// Competent Generate log book
router.get(
	'/log-book',
	validateSchema(competentValidation.competentLogBook),
	competentController.competentLogBook
);

export default router;
