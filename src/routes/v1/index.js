import { Router } from 'express';
//Routes
import authRoutes from '../auth.route.js';
import masterRoutes from '../master.route.js';
import allOfficersRoutes from '../allOfficers.route.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/master', masterRoutes);
router.use('/dish-officers', allOfficersRoutes);

export default router;
