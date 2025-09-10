import express from 'express';
import validateSchema from '../middlewares/validateSchema.middleware.js';
import DishController from '../controllers/dish.controller.js';
import * as dishValidation from '../validations/dish.validation.js';

const dishController = new DishController();
const router = express.Router();

// Get Query to District competent officers
router.get(
	'/get-district-officers',
	validateSchema(dishValidation.allQueryToDistrictOfficersController),
	dishController.allQueryToDistrictOfficersController
);

export default router;
