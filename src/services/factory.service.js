import { executeStoredProcedure } from '../database';
import { AppError } from '../utils/errorHandler';

export const scheduleInspection = async (inspectionData, userId) => {
    try {
        const params = [
            { name: 'InspectionDate', value: inspectionData.inspectionDate, type: 'DateTime' },
            { name: 'MachineType', value: inspectionData.machineType, type: 'NVarChar' },
            { name: 'CompetentOfficerId', value: inspectionData.competentOfficerId, type: 'Int' },
            { name: 'FactoryId', value: inspectionData.factoryId, type: 'Int' },
            { name: 'ScheduledBy', value: userId, type: 'Int' },
            { name: 'InspectionId', value: null, type: 'Int', isOutput: true },
            { name: 'ErrorMessage', value: null, type: 'NVarChar', isOutput: true }
        ];

        const result = await executeStoredProcedure('usp_ScheduleInspection', params);
        
        if (result.returnValue === -1) {
            throw new AppError(result.output.ErrorMessage || 'Failed to schedule inspection', 400);
        }

        return {
            success: true,
            inspectionId: result.output.InspectionId,
            message: 'Inspection scheduled successfully'
        };
    } catch (error) {
        throw new AppError(error.message || 'Failed to schedule inspection', error.statusCode || 500);
    }
};