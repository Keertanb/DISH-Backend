import express from 'express';
// MIDDLEWARES
import validateSchema from '../middlewares/validateSchema.middleware.js';
// VALIDATIONS
import * as masterValidation from '../validations/master.validation.js';
// CONTROLLERS
import MasterController from '../controllers/master.controller.js';
//config
import { jwtMiddleware } from '../config/jwt.js';

const router = express.Router();
const masterController = new MasterController();

// All district name show
router.get('/get-districts', masterController.getDistricts);

// DistrictId wise show block names
router.get(
	'/get-blocks-by-districtId',
	validateSchema(masterValidation.blocksByDistrictId),
	masterController.getBlocksByDistrictId
);

// Ifsc code wise bank details
router.get(
	'/bank-detail-by-IFSC-code',
	validateSchema(masterValidation.bankDetailByIFSCCode),
	masterController.getBankDetailByIFSCCode
);

//DistrictId wise competent Register counts
router.get(
	'/get-competent-register-count-by-districtId',
	masterController.getCompetentRegisterCountByDistrictId
);

//DistrictId wise competent Register List
router.get(
	'/get-competent-register-list-by-districtId',
	validateSchema(masterValidation.getCompetentRegisterListByDistrictId),
	masterController.getCompetentRegisterListByDistrictId
);

// DistrictId wise competent counts
router.get('/get-competent-count-by-districtId', masterController.getCompetentCountByDistrictId);

//DistrictId machine type wise competent list
router.get(
	'/get-machine-type-competent-list-by-districtId',
	validateSchema(masterValidation.machineTypeCompetentListByDistrictId),
	masterController.getMachineTypeCompetentListByDistrictId
);

//DistrictId wise competent status is pending counts
router.get(
	'/get-pending-competent-count-by-districtId',
	masterController.getPendingCompetentCountByDistrictId
);

// DistrictId wise competent status is pending list
router.get(
	'/get-pending-competent-list-by-districtId',
	validateSchema(masterValidation.pendingCompetentListByDistrictId),
	masterController.getPendingCompetentListByDistrictId
);

//DistrictId wise factory machine overdue pending inspection counts
router.get(
	'/get-overdue-pending-count-by-districtId',
	masterController.getOverduePendingInspectionCountByDistrictId
);

//DistrictId wise factory machine overdue pending inspection list
router.get(
	'/get-overdue-pending-list-by-districtId',
	validateSchema(masterValidation.getOverduePendingInspectionListByDistrictId),
	masterController.getOverduePendingInspectionListByDistrictId
);

// DistrictId wise suspension competent counts
router.get(
	'/get-suspension-count-by-districtId',
	validateSchema(masterValidation.getSuspensionCountByDistrictId),
	masterController.getSuspensionCountByDistrictId
);

//DistrictId wise suspension competent list
router.get(
	'/get-suspension-list-by-districtId',
	validateSchema(masterValidation.getSuspensionListByDistrictId),
	masterController.getSuspensionListByDistrictId
);

// DistrictId wise factory counts
router.get('/get-factory-count-by-districtId', masterController.getFactoryCountByDistrictId);

// DistrictId wise factory list
router.get(
	'/get-factory-list-by-districtId',
	validateSchema(masterValidation.factoryListByDistrictId),
	masterController.getFactoryListByDistrictId
);

// DistrictId wise competent inspection completed this month counts
router.get(
	'/get-inspection-completed-count-by-districtId',
	masterController.getInspectionCompletedCountByDistrictId
);

// DistrictId wise competent inspection competent this month List
router.get(
	'/get-inspection-completed-list-by-districtId',
	validateSchema(masterValidation.getInspectionCompletedListByDistrictId),
	masterController.getInspectionCompletedListByDistrictId
);

//DistrictId machine type wise machine counts
router.get(
	'/get-machine-type-count-by-districtId',
	validateSchema(masterValidation.getMachineTypeCountByDistrictId),
	masterController.getMachineTypeCountByDistrictId
);

//DistrictId machine type wise machine List
router.get(
	'/get-machine-type-list-by-districtId',
	validateSchema(masterValidation.getMachineTypeListByDistrictId),
	masterController.getMachineTypeListByDistrictId
);

//DistrictId wise factory machine pending inspection counts
router.get(
	'/get-pending-inspection-count-by-districtId',
	masterController.getPendingInspectionCountByDistrictId
);

//DistrictId wise factory machine pending inspection list
router.get(
	'/get-pending-inspection-list-by-districtId',
	validateSchema(masterValidation.getPendingInspectionListByDistrictId),
	masterController.getPendingInspectionListByDistrictId
);

//DistrictId wise Inspection request rejected counts
router.get(
	'/get-rejected-inspection-count-by-districtId',
	masterController.getRejectedInspectionCountByDistrictId
);

//DistrictId wise Inspection request rejected list
router.get(
	'/get-rejected-inspection-list-by-districtId',
	validateSchema(masterValidation.getRejectedInspectionListByDistrictId),
	masterController.getRejectedInspectionListByDistrictId
);

//District wise expired machine counts
router.get(
	'/get-expired-machine-count-by-districtId',
	masterController.getExpiredMachineCountByDistrictId
);

//DistrictId wise expired machine list
router.get(
	'/get-expired-machine-list-by-districtId',
	validateSchema(masterValidation.getExpiredMachineListByDistrictId),
	masterController.getExpiredMachineListByDistrictId
);

// Competent and machine Count
router.get(
	'/get-competent-machine-count',
	validateSchema(masterValidation.getCompetentMachineCount),
	masterController.getCompetentMachineCount
);

export default router;
