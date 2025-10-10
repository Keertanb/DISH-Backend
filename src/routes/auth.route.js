import express from 'express';
// MIDDLEWARES
import validateSchema from '../middlewares/validateSchema.middleware.js';
// VALIDATIONS
import * as authValidation from '../validations/auth.validation.js';
// CONTROLLERS
import AuthController from '../controllers/auth.controller.js';

const router = express.Router();

const authController = new AuthController();

// Factory registration
router.post(
	'/factory-registration',
	validateSchema(authValidation.factoryOwnerRegistration),
	authController.factoryOwnerRegistration
);

//Competent registration
router.post(
	'/competent-registration',
	validateSchema(authValidation.competentOfficerSchema),
	authController.competentOfficerRegistration
);

// All user login api
router.post('/login', validateSchema(authValidation.login), authController.login);

//User forgot password link send mail throw
router.post(
	'/forgot-password',
	validateSchema(authValidation.forgotPasswordSchema),
	authController.forgotPassword
);

//user reset password
router.post(
	'/reset-password',
	validateSchema(authValidation.resetPasswordSchema),
	authController.resetPassword
);

//Renew Pause Competent Officer Application
router.post(
	'/renew-pause-competent-officer',
	validateSchema(authValidation.renewPauseCompetentOfficer),
	authController.renewPauseCompetentOfficer
);

export default router;
