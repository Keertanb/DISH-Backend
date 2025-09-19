// MODELS
import CompetentModel from '../models/competent.mode.js';

// UTILS
import logger from '../utils/logger.js';
import { sendMail } from '../utils/mail.js';

const competentModel = new CompetentModel();

class CompetentService {
	async getScheduledInspectionList(competentUserId, page, limit) {
		try {
			const result = await competentModel.getScheduledInspectionList(competentUserId, page, limit);
			return result;
		} catch (err) {
			logger.error('Error in getScheduledInspectionList service:', { err });
			throw err;
		}
	}

	async scheduledMachineInspectionStatus({
		userId,
		machineNo,
		scheduleInspectionDate,
		status,
		reason,
	}) {
		try {
			if (!userId || userId.trim() === '') {
				throw new Error('Invalid userId provided');
			}
			if (!status || !['Approved', 'Rejected'].includes(status)) {
				throw new Error('Invalid status provided');
			}

			if (status === 'Rejected' && (!reason || reason.trim() === '')) {
				throw new Error('Reason is required when status is Rejected');
			}
			const result = await competentModel.scheduledMachineInspectionStatus(
				userId,
				machineNo,
				scheduleInspectionDate,
				status,
				reason
			);
			if (result?.email) {
				let subject = '';
				let html = '';

				if (status === 'Approved') {
					subject = `Inspection Approved for Machine ${result.machineNo}`;
					html = `
					<p>Dear Factory Owner,</p>
					<p><b>Congratulations!</b></p>
					<p>Your scheduled inspection for Machine No: ${result.machineNo} on 
					${result.scheduleInspectionDate} has been approved.
					You may proceed with the inspection as scheduled.</p>
					<p>Regards,<br/>Factory Inspection Team</p>
				`;
				} else if (status === 'Rejected') {
					subject = `Inspection Rejected for Machine ${result.machineNo}`;
					html = `
					<p>Dear Factory Owner,</p>
					<p>Your scheduled inspection for Machine No: ${result.machineNo} on 
					${result.scheduleInspectionDate} 
					has been <b>Rejected</b>.</p>
					<p><b>Reason:</b> ${result.reason}</p>
					<p>Regards,<br/>Factory Inspection Team</p>
				`;
				}

				await sendMail({ to: result.email, subject, html });
			}

			return result;
		} catch (err) {
			logger.error('Error in scheduledMachineInspectionStatus service:', { err });
			throw err;
		}
	}

	async inspectionFactory(competentUserId, page, limit) {
		try {
			const result = await competentModel.inspectionFactory(competentUserId, page, limit);
			return result;
		} catch (err) {
			logger.error('Error in inspectionFactory service:', { err });
			throw err;
		}
	}

	async getFactoryList(factoryUserId, page, limit) {
		try {
			const result = await competentModel.getFactoryList(factoryUserId, page, limit);
			return result;
		} catch (err) {
			logger.error('Error in getFactoryList service:', { err });
			throw err;
		}
	}

	async getCompetentOfficerProfile(userId) {
		try {
			const profile = await competentModel.getCompetentOfficerProfile(userId);
			return profile && profile.length > 0 ? profile[0] : null;
		} catch (err) {
			logger.error('Error in getCompetentOfficerProfile service:', { err });
			throw err;
		}
	}

	async addExperience(data) {
		try {
			const result = await competentModel.addExperience(data);
			return result;
		} catch (err) {
			logger.error('Error in addExperience service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertPressureVesselInspection(data) {
		try {
			const result = await competentModel.upsertPressureVesselInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertPressureVesselInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertHoistLiftInspection(data) {
		try {
			const result = await competentModel.upsertHoistLiftInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertHoistLiftInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertEquipmentInspection(data) {
		try {
			const result = await competentModel.upsertEquipmentInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertEquipmentInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertDustFumeExtractionSystem(data) {
		try {
			const result = await competentModel.upsertDustFumeExtractionSystem(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertDustFumeExtractionSystem service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertOvenDriersInspection(data) {
		try {
			const result = await competentModel.upsertOvenDriersInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertOvenDriersInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertCentrifugeMachineInspection(data) {
		try {
			const result = await competentModel.upsertCentrifugeMachineInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertCentrifugeMachineInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertPowerPressInspection(data) {
		try {
			const result = await competentModel.upsertPowerPressInspection(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertPowerPressInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertThermicFluidHeater(data) {
		try {
			const result = await competentModel.upsertThermicFluidHeater(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertThermicFluidHeater service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertStabilityForm1A(data) {
		try {
			const result = await competentModel.upsertStabilityForm1A(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertStabilityForm1A service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertWaterSealedGasHolderForm11A(data) {
		try {
			const result = await competentModel.upsertWaterSealedGasHolderForm11A(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertWaterSealedGasHolderForm11A service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async upsertConfinedSpace(data) {
		try {
			const result = await competentModel.upsertConfinedSpace(data);
			return result;
		} catch (err) {
			logger.error('Error in upsertConfinedSpace service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async getPressureVesselInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await competentModel.getPressureVesselInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getPressureVesselInspection service:', { err });
			throw err;
		}
	}

	async getHoistLiftInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await competentModel.getHoistLiftInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getHoistLiftInspection service:', { err });
			throw err;
		}
	}

	async getEquipmentInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await competentModel.getEquipmentInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getEquipmentInspection service:', { err });
			throw err;
		}
	}

	async getDustFumeExtractionSystem(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await competentModel.getDustFumeExtractionSystem(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getDustFumeExtractionSystem service:', { err });
			throw err;
		}
	}

	async getOvenDriersInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await competentModel.getOvenDriersInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getOvenDriersInspection service:', { err });
			throw err;
		}
	}

	async getCentrifugeMachineInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await competentModel.getCentrifugeMachineInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getCentrifugeMachineInspection service:', { err });
			throw err;
		}
	}

	async getPowerPressInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await competentModel.getPowerPressInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getPowerPressInspection service:', { err });
			throw err;
		}
	}

	async getThermicFluidHeater(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await competentModel.getThermicFluidHeater(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getThermicFluidHeater service:', { err });
			throw err;
		}
	}
	async getStabilityForm1A(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await competentModel.getStabilityForm1A(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getStabilityForm1A service:', { err });
			throw err;
		}
	}

	async getWaterSealedGasHolderForm11A(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await competentModel.getWaterSealedGasHolderForm11A(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);
			// if (!result || result.length === 0) {
			// 	// No record found case
			// 	const error = new Error('Record not found');
			// 	error.statusCode = 404;
			// 	throw error;
			// }
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getWaterSealedGasHolderForm11A service:', { err });
			throw err;
		}
	}

	async getConfinedSpace(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await competentModel.getConfinedSpace(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);
			return result && result.length > 0 ? result[0] : null;
		} catch (err) {
			logger.error('Error in getConfinedSpace service:', { err });
			throw err;
		}
	}
}
export default CompetentService;
