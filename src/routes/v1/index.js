import { Router } from 'express';
//Routes
import authRoutes from '../auth.route.js';
import masterRoutes from '../master.route.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/master', masterRoutes)

export default router;