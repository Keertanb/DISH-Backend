// MODELS
import CompetentModel from '../models/competent.mode.js';

// UTILS
import logger from '../utils/logger.js';
import { sendMail } from '../utils/mail.js';

const competentModel = new CompetentModel();

class CompetentService {
	async getScheduledInspectionList(competentUserId, page, limit, search) {
		try {
			const result = await competentModel.getScheduledInspectionList(
				competentUserId,
				page,
				limit,
				search
			);
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

	async inspectionFactory(competentUserId, page, limit, search) {
		try {
			const result = await competentModel.inspectionFactory(competentUserId, page, limit, search);
			return result;
		} catch (err) {
			logger.error('Error in inspectionFactory service:', { err });
			throw err;
		}
	}

	async getFactoryList(factoryUserId, page, limit, search) {
		try {
			const result = await competentModel.getFactoryList(factoryUserId, page, limit, search);
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

	async getCompetentApprovedMachineList(competentUserId, districtId, page, limit, search) {
		try {
			const result = await competentModel.getCompetentApprovedMachineList(
				competentUserId,
				districtId,
				page,
				limit,
				search
			);
			return result;
		} catch (err) {
			logger.error('Error in getCompetentApprovedMachineList service:', { err });
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

	async getCompetentExpiryEnd() {
		try {
			const candidates = await competentModel.getCompetentExpiryEnd();

			if (!candidates.length) {
				console.error('No competent officers found whose validity period has ended.');
				return { message: 'No expired competent officers found', data: [] };
			}

			for (const candidate of candidates) {
				const { userId, email, expirationDate } = candidate;

				if (!email) {
					console.error(`Missing email for userId ${userId}`);
					continue;
				}

				await sendMail({
					to: email,
					subject: 'Competent Officer Validity Expired - DISH Portal',
					html: `
					<p>Dear Competent Officer,</p>

					<p>We would like to inform you that your <b>competent officer validity period has expired${
						expirationDate ? ' on <b>' + expirationDate + '</b>' : ' as of today'
					}.</b></p>

					<p>If you wish to continue your registration as a competent officer, please log in to the <b>DISH Portal</b> and complete the renewal process at your earliest convenience.</p>

					<p><b>Important:</b> Without renewal, you will no longer be able to access your account or perform related activities on the portal.</p>

					<p>To renew your account, please log in using your registered credentials and follow the on-screen instructions.</p>

					<p>For any assistance or queries, please contact the DISH Support Team.</p>

					<p>Regards,<br/>
					<b>DISH Support Team</b><br/>
					<small>Department of Industrial Safety & Health</small></p>
				`,
				});
			}

			return { message: 'Competent Officer Expiry Notification sent successfully', candidates };
		} catch (err) {
			logger.error('Error in getCompetentExpiryEnd service:', { err });
			throw err;
		}
	}

	async getCompetentExpiryPauseEnd() {
		try {
			const candidates = await competentModel.getCompetentExpiryPauseEnd();

			if (!candidates.length) {
				console.error('No competent officers found whose validity period has ended.');
				return { message: 'No expired competent officers found', data: [] };
			}

			for (const candidate of candidates) {
				const { userId, email, expirationDate } = candidate;

				if (!email) {
					console.error(`Missing email for userId ${userId}`);
					continue;
				}

				await sendMail({
					to: email,
					subject: 'Competent Officer Suspension Ended - DISH Portal',
					html: `
						<p>Dear Competent Officer,</p>

						<p>We would like to inform you that your <b>competent officer suspension period has ended${
							expirationDate ? ' on <b>' + expirationDate + '</b>' : ' as of today'
						}.</b></p>

						<p>You can now resume your duties as a competent officer. Please log in to the <b>DISH Portal</b> to continue your activities.</p>

						<p><b>Important:</b> Ensure your account is active and updated. If you wish to renew any other settings or information, please do so after logging in.</p>

						<p>If you face any issues accessing your account, contact the <b>DISH Support Team</b>.</p>

						<p>Regards,<br/>
						<b>DISH Support Team</b><br/>
						<small>Department of Industrial Safety & Health</small></p>
					`,
				});
			}

			return {
				message: 'Competent Officer Pause Expiry Notification sent successfully',
				candidates,
			};
		} catch (err) {
			logger.error('Error in getCompetentExpiryPauseEnd service:', { err });
			throw err;
		}
	}

	async renewCompetentOfficer(userId) {
		try {
			const competent = await competentModel.renewCompetentOfficer(userId);
			const { userId: dbUserId, email: dbEmail } = competent;
			await sendMail({
				to: dbEmail,
				subject: 'Competent Officer Renewal - DISH Portal',
				html: `
				<p>Dear Competent Officer,</p>
				<p>Your request for renewal as a competent officer has been <b>successfully processed</b>.</p>
				<p>If you encounter any issues or have questions, please contact the <b>DISH Support Team</b>.</p>
				<p>Regards,<br/>
				<b>DISH Support Team</b><br/>
				<small>Department of Industrial Safety & Health</small></p>
			`,
			});
			return competent;
		} catch (err) {
			logger.error('Error in renewCompetentOfficer service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}
}
export default CompetentService;
