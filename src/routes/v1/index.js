import { Router } from 'express';
//Routes
import authRoutes from '../auth.route.js';
import masterRoutes from '../master.route.js';
import allOfficersRoutes from '../allOfficers.route.js';
import dishRoutes from '../dish.route.js';
import factoryRoutes from '../factory.route.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/master', masterRoutes);
router.use('/dish-officers', allOfficersRoutes);
router.use('/dish-officer', dishRoutes);
router.use('/factory', factoryRoutes);

export default router;
