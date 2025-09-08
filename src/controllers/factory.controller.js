import { scheduleInspection } from '../services/factory.service';
import { AppError } from '../utils/errorHandler';

export const scheduleInspectionController = async (req, res, next) => {
    try {
        const { inspectionDate, machineType, competentOfficerId, factoryId } = req.body;
        
        if (!inspectionDate || !machineType || !competentOfficerId || !factoryId) {
            throw new AppError('All fields are required', 400);
        }

        const result = await scheduleInspection(
            { inspectionDate, machineType, competentOfficerId, factoryId },
            req.user.id 
        );

        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};