import express from 'express';
// MIDDLEWARES
import uploadCompetentDocs from '../middlewares/upload.competent.docs.js';
import validateSchema from '../middlewares/validateSchema.middleware.js';
// VALIDATIONS
import * as competentValidation from '../validations/competent.validation.js';
// CONTROLLERS
import CompetentController from '../controllers/competent.controller.js';

const router = express.Router();
const competentController = new CompetentController();

//update profile
router.post(
	'/update-profile',
	uploadCompetentDocs,
	validateSchema(competentValidation.updateProfile),
	competentController.updateProfile
);

// Apply for competent officer
router.post(
	'/apply-competent-officer',
	validateSchema(competentValidation.applyCompetentOfficer),
	competentController.applyCompetentOfficer
);

// Factory user request for machine inspection
router.get(
	'/get-scheduled-inspection',
	validateSchema(competentValidation.getScheduledInspectionList),
	competentController.getScheduledInspectionList
);

// Machine inspection request(Approved/rejected)
router.post(
	'/scheduled-machine-status',
	validateSchema(competentValidation.scheduledMachineInspectionStatus),
	competentController.scheduledMachineInspectionStatus
);

// Get all pending factory list for machine inspection
router.get(
	'/get-inspection-factory',
	validateSchema(competentValidation.inspectionFactory),
	competentController.inspectionFactory
);

// // Search Factory by name or factory Id
router.get(
	'/search-factory',
	validateSchema(competentValidation.searchFactory),
	competentController.searchFactory
);

// Competent add new machine for factory
router.post(
	'/register-new-machine',
	validateSchema(competentValidation.addNewMachine),
	competentController.addNewMachine
);

// Get all pending machine inspection list in factory wise
router.get(
	'/get-factory-machine',
	validateSchema(competentValidation.getFactoryList),
	competentController.getFactoryList
);

//Get Approved machine inspection list date wise
router.get(
	'/get-approved-machine-inspection',
	validateSchema(competentValidation.getApprovedMachineInspectionList),
	competentController.getApprovedMachineInspectionList
);

// Competent officer profile
router.get(
	'/competent-officer-profile',
	validateSchema(competentValidation.getCompetentOfficerProfile),
	competentController.getCompetentOfficerProfile
);

// Get all machine approved list by competent officer
router.get(
	'/get-machine-approved-list',
	validateSchema(competentValidation.getCompetentApprovedMachineList),
	competentController.getCompetentApprovedMachineList
);

// Competent add another experience
router.post(
	'/add-experience',
	validateSchema(competentValidation.addExperience),
	competentController.addExperience
);

// Get list factory machines for competent officer
router.get(
	'/get-identity-By-machines',
	validateSchema(competentValidation.getIdentityByMachines),
	competentController.getIdentityByMachines
);

// Pressure Vessel or Plant machine form
router.post(
	'/pv-form11',
	validateSchema(competentValidation.upsertPressureVesselInspection),
	competentController.upsertPressureVesselInspection
);

// Hoist & Lifts machine form
router.post(
	'/hl-form9',
	validateSchema(competentValidation.upsertHoistLiftInspection),
	competentController.upsertHoistLiftInspection
);

// Equipment inspection machine form
router.post(
	'/lcr-form10',
	validateSchema(competentValidation.upsertEquipmentInspection),
	competentController.upsertEquipmentInspection
);

// Dust / Fume Extraction System machine form
router.post(
	'/dfs-form26',
	validateSchema(competentValidation.upsertDustFumeExtractionSystem),
	competentController.upsertDustFumeExtractionSystem
);

// Oven and Driers machine form
router.post(
	'/oven-driers',
	validateSchema(competentValidation.upsertOvenDriersInspection),
	competentController.upsertOvenDriersInspection
);

// Centrifuge machine form
router.post(
	'/centrifuge-machine',
	validateSchema(competentValidation.upsertCentrifugeMachineInspection),
	competentController.upsertCentrifugeMachineInspection
);

// Power Press / Safety Devices machine form
router.post(
	'/psd-inspection',
	validateSchema(competentValidation.upsertPowerPressInspection),
	competentController.upsertPowerPressInspection
);

// Thermic Fluid Heater machine form
router.post(
	'/thermic-fluid-heater',
	validateSchema(competentValidation.upsertThermicFluidHeater),
	competentController.upsertThermicFluidHeater
);

// Stability machine form
router.post(
	'/stability-form1a',
	validateSchema(competentValidation.upsertStabilityForm1A),
	competentController.upsertStabilityForm1A
);

// Water Sealed Gas Holder machine form
router.post(
	'/wsg-form11a',
	validateSchema(competentValidation.upsertWaterSealedGasHolderForm11A),
	competentController.upsertWaterSealedGasHolderForm11A
);

// Confined Space form
router.post(
	'/confined-space-form',
	validateSchema(competentValidation.upsertConfinedSpace),
	competentController.upsertConfinedSpace
);

// Get data for Pressure Vessel or Plant machine
router.get(
	'/get-pv-form11',
	validateSchema(competentValidation.getPressureVesselInspection),
	competentController.getPressureVesselInspection
);

// Get data for Hoist & Lifts machine
router.get(
	'/get-hl-form9',
	validateSchema(competentValidation.getHoistLiftInspection),
	competentController.getHoistLiftInspection
);

// Get data for Equipment inspection machine
router.get(
	'/get-lcr-form10',
	validateSchema(competentValidation.getEquipmentInspection),
	competentController.getEquipmentInspection
);

// Get data for Dust / Fume Extraction System machine
router.get(
	'/get-dfs-form26',
	validateSchema(competentValidation.getDustFumeExtractionSystem),
	competentController.getDustFumeExtractionSystem
);

// Get data for Oven and Driers machine
router.get(
	'/get-oven-driers',
	validateSchema(competentValidation.getOvenDriersInspection),
	competentController.getOvenDriersInspection
);

// Get data for Centrifuge machine
router.get(
	'/get-centrifuge-machine',
	validateSchema(competentValidation.getCentrifugeMachineInspection),
	competentController.getCentrifugeMachineInspection
);

// Get data for Power Press / Safety Devices machine
router.get(
	'/get-psd-inspection',
	validateSchema(competentValidation.getPowerPressInspection),
	competentController.getPowerPressInspection
);

// Get data for Thermic Fluid Heater machine
router.get(
	'/get-thermic-fluid-heater',
	validateSchema(competentValidation.getThermicFluidHeater),
	competentController.getThermicFluidHeater
);

// Get data for Stability machine
router.get(
	'/get-stability-form1a',
	validateSchema(competentValidation.getStabilityForm1A),
	competentController.getStabilityForm1A
);

// Get data for Water Sealed Gas Holder machine
router.get(
	'/get-wsg-form11a',
	validateSchema(competentValidation.getWaterSealedGasHolderForm11A),
	competentController.getWaterSealedGasHolderForm11A
);

// Get data Confined Space form
router.get(
	'/get-confined-space-form',
	validateSchema(competentValidation.getConfinedSpace),
	competentController.getConfinedSpace
);

// Renew Competent Officer Application
router.post(
	'/renew-competent-officer',
	uploadCompetentDocs,
	validateSchema(competentValidation.renewCompetentOfficer),
	competentController.renewCompetentOfficer
);

export default router;
