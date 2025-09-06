import express from 'express';

import validateSchema from '../middlewares/validateSchema.middleware.js';
// VALIDATIONS
import * as authValidation from '../validations/auth.validation.js';
// CONTROLLERS
import AuthController from '../controllers/auth.controller.js';

const router = express.Router();

const authController = new AuthController();

router.post(
	'/factory-registration',
	validateSchema(authValidation.factoryOwnerRegistration),
	authController.factoryOwnerRegistration
);
router.post(
	'/competent-registration',
	validateSchema(authValidation.competentOfficerSchema),
	authController.competentOfficerRegistration
);

router.post('/login', validateSchema(authValidation.login), authController.login);

export default router;
