import { Router } from 'express';
// ROUTES
import authRoutes from './auth.route.js';

const router = Router();

router.use('/auth', authRoutes);

export default router;
