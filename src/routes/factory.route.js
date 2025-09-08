import express from 'express';
import { scheduleInspectionController } from '../controllers/factory.controller';
import { validateToken } from '../middlewares/validateToken.middleware';

const router = express.Router();

router.post(
    '/inspections/schedule',
    validateToken, 
    scheduleInspectionController
);

export default router;