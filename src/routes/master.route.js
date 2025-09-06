import express from 'express';

// CONTROLLERS
import MasterController from '../controllers/master.controller.js';
import validateSchema from '../middlewares/validateSchema.middleware.js';
import * as masterValidation from '../validations/master.validation.js';
import { jwtMiddleware } from '../config/jwt.js';

const router = express.Router();
const masterController = new MasterController();

router.get('/get-districts', masterController.getDistricts);

router.get(
	'/get-blocks-by-districtId',
	jwtMiddleware,
	validateSchema(masterValidation.blocksByDistrictId),
	masterController.getBlocksByDistrictId
);
router.get(
	'/bank-detail-by-IFSC-code',
	validateSchema(masterValidation.bankDetailByIFSCCode),
	masterController.getBankDetailByIFSCCode
);

export default router;
