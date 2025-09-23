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

export default router;
