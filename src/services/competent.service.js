// MODELS
import CompetentModel from '../models/competent.mode.js';

// UTILS
import logger from '../utils/logger.js';
import { sendMail } from '../utils/mail.js';

const competentModel = new CompetentModel();

class CompetentService {
	async updateProfile(userId, data) {
		return await competentModel.updateProfile(userId, data);
	}

	async applyCompetentOfficer(userId) {
		try {
			const result = await competentModel.applyCompetentOfficer(userId);

			const officer = Array.isArray(result) && result.length > 0 ? result[0] : null;
			if (!officer || !officer.email) {
				throw new Error('Officer email not found for the given userId');
			}
			const { email } = result;
			await sendMail({
				to: officer.email,
				subject: 'Competent Officer Application Submitted - DISH Portal',
				html: `
				<p>Dear Competent Officer,</p>
				<p>Your application has been <b>successfully submitted</b>.</p>
				<p>Our team is currently reviewing your application. You will be notified once the verification process is completed.</p>
				<p>Thank you for registering with the DISH portal and for your interest in contributing to workplace safety.</p>
				<p>Regards,<br/>Support Team</p
			`,
			});

			return result;
		} catch (err) {
			logger.error('Error in applyCompetentOfficer service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async inspectionFactory(competentUserId, page, limit, search) {
		return await competentModel.inspectionFactory(competentUserId, page, limit, search);
	}

	async searchFactory(userId) {
		return await competentModel.searchFactory(userId);
	}

	async factoryMachineInspection(
		factoryUserId,
		machineName,
		inspectionCount,
		inspectionDate,
		competentUserId
	) {
		try {
			const result = await competentModel.factoryMachineInspection(
				factoryUserId,
				machineName,
				inspectionCount,
				inspectionDate,
				competentUserId
			);

			const data = Array.isArray(result) && result.length > 0 ? result[0] : null;

			if (data.Status === 'Error') {
				return {
					Status: 'Error',
					Message: data.Message,
				};
			}

			if (!data.email) {
				throw new Error('Factory email not found');
			}

			// ✅ SEND EMAIL ONLY ON SUCCESS
			await sendMail({
				to: data.email,
				subject: 'Machine Inspection Scheduled - DISH Portal',
				html: `
				<p>Dear Factory Owner,</p>

				<p>A machine inspection has been <b>successfully scheduled</b>. Below are the details:</p>

				<p>
					<b>Competent Officer Name:</b> ${data.officerName}<br/>
					<b>Competent Officer Contact:</b> ${data.officerContact}<br/>
					<b>Machine Name:</b> ${data.machineName}<br/>
					<b>Total Machines for Inspection:</b> ${data.inspectionCount}<br/>
					<b>Inspection Date:</b> ${data.inspectionDate}<br/>
					<b>Factory User ID:</b> ${factoryUserId}
				</p>

				<p>Regards,<br/>Support Team</p>
			`,
			});

			return {
				Status: 'Success',
				Message: 'Inspection created successfully & email sent',
				Data: data,
			};
		} catch (err) {
			logger.error('Error in factoryMachineInspection service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async addNewMachine(data) {
		const machine = await competentModel.addNewMachine(data);
		return machine && machine.length > 0 ? machine[0] : null;
	}

	async getFactoryList(factoryUserId, page, limit, search) {
		return await competentModel.getFactoryList(factoryUserId, page, limit, search);
	}

	async getApprovedMachineInspectionList(
		factoryUserId,
		machineNoPattern,
		inspectionDate,
		page,
		limit,
		search
	) {
		return await competentModel.getApprovedMachineInspectionList(
			factoryUserId,
			machineNoPattern,
			inspectionDate,
			page,
			limit,
			search
		);
	}

	async getCompetentOfficerProfile(userId) {
		const profile = await competentModel.getCompetentOfficerProfile(userId);
		return profile && profile.length > 0 ? profile[0] : null;
	}

	async getCompetentApprovedMachineList(competentUserId, districtId, page, limit, search) {
		return await competentModel.getCompetentApprovedMachineList(
			competentUserId,
			districtId,
			page,
			limit,
			search
		);
	}

	async addExperience(data) {
		return await competentModel.addExperience(data);
	}

	async getIdentityByMachines(userId, machineNoPattern, page, limit, search) {
		return await competentModel.getIdentityByMachines(
			userId,
			machineNoPattern,
			page,
			limit,
			search
		);
	}

	async upsertPressureVesselInspection(data) {
		return await competentModel.upsertPressureVesselInspection(data);
	}

	async upsertHoistLiftInspection(data) {
		return await competentModel.upsertHoistLiftInspection(data);
	}

	async upsertEquipmentInspection(data) {
		return await competentModel.upsertEquipmentInspection(data);
	}

	async upsertDustFumeExtractionSystem(data) {
		return await competentModel.upsertDustFumeExtractionSystem(data);
	}

	async upsertOvenDriersInspection(data) {
		return await competentModel.upsertOvenDriersInspection(data);
	}

	async upsertCentrifugeMachineInspection(data) {
		return await competentModel.upsertCentrifugeMachineInspection(data);
	}

	async upsertPowerPressInspection(data) {
		return await competentModel.upsertPowerPressInspection(data);
	}

	async upsertThermicFluidHeater(data) {
		return await competentModel.upsertThermicFluidHeater(data);
	}

	async upsertStabilityForm1A(data) {
		return await competentModel.upsertStabilityForm1A(data);
	}

	async upsertWaterSealedGasHolderForm11A(data) {
		return await competentModel.upsertWaterSealedGasHolderForm11A(data);
	}

	async upsertConfinedSpace(data) {
		return await competentModel.upsertConfinedSpace(data);
	}

	async getPressureVesselInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		const result = await competentModel.getPressureVesselInspection(
			factoryUserId,
			machineNo,
			scheduleInspectionDate
		);
		return result && result.length > 0 ? result[0] : null;
	}

	async getHoistLiftInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		const result = await competentModel.getHoistLiftInspection(
			factoryUserId,
			machineNo,
			scheduleInspectionDate
		);
		return result && result.length > 0 ? result[0] : null;
	}

	async getEquipmentInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		const result = await competentModel.getEquipmentInspection(
			factoryUserId,
			machineNo,
			scheduleInspectionDate
		);
		return result && result.length > 0 ? result[0] : null;
	}

	async getDustFumeExtractionSystem(factoryUserId, machineNo, scheduleInspectionDate) {
		const result = await competentModel.getDustFumeExtractionSystem(
			factoryUserId,
			machineNo,
			scheduleInspectionDate
		);
		return result && result.length > 0 ? result[0] : null;
	}

	async getOvenDriersInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		const result = await competentModel.getOvenDriersInspection(
			factoryUserId,
			machineNo,
			scheduleInspectionDate
		);
		return result && result.length > 0 ? result[0] : null;
	}

	async getCentrifugeMachineInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		const result = await competentModel.getCentrifugeMachineInspection(
			factoryUserId,
			machineNo,
			scheduleInspectionDate
		);
		return result && result.length > 0 ? result[0] : null;
	}

	async getPowerPressInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		const result = await competentModel.getPowerPressInspection(
			factoryUserId,
			machineNo,
			scheduleInspectionDate
		);
		return result && result.length > 0 ? result[0] : null;
	}

	async getThermicFluidHeater(factoryUserId, machineNo, scheduleInspectionDate) {
		const result = await competentModel.getThermicFluidHeater(
			factoryUserId,
			machineNo,
			scheduleInspectionDate
		);
		return result && result.length > 0 ? result[0] : null;
	}

	async getStabilityForm1A(factoryUserId, machineNo, scheduleInspectionDate) {
		const result = await competentModel.getStabilityForm1A(
			factoryUserId,
			machineNo,
			scheduleInspectionDate
		);
		return result && result.length > 0 ? result[0] : null;
	}

	async getWaterSealedGasHolderForm11A(factoryUserId, machineNo, scheduleInspectionDate) {
		const result = await competentModel.getWaterSealedGasHolderForm11A(
			factoryUserId,
			machineNo,
			scheduleInspectionDate
		);
		return result && result.length > 0 ? result[0] : null;
	}

	async getConfinedSpace(factoryUserId, machineNo, scheduleInspectionDate) {
		const result = await competentModel.getConfinedSpace(
			factoryUserId,
			machineNo,
			scheduleInspectionDate
		);
		return result && result.length > 0 ? result[0] : null;
	}

	async competentExpiryEnd() {
		try {
			const candidates = await competentModel.competentExpiryEnd();

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

					<p>Your competent officer validity has expired${
						expirationDate ? ' on <b>' + expirationDate + '</b>' : ' as of today'
					}. Please contact the Administrator to request renewal. Once approved, you will receive a 24-hour authorization period to log in and complete the renewal.</p>

					<p>Regards,<br/>
					<b>DISH Support Team</b></p>
					`,
				});
			}

			return { message: 'Competent Officer Expiry Notification sent successfully', candidates };
		} catch (err) {
			logger.error('Error in getCompetentExpiryEnd service:', { err });
			throw err;
		}
	}

	async competentExpirationReminder() {
		try {
			const candidates = await competentModel.competentExpirationReminder();

			if (!candidates.length) {
				console.error('No competent officers found for Expiration Reminder.');
				return { message: 'No Expiration Reminder competent officers found', data: [] };
			}

			for (const candidate of candidates) {
				const { userId, email, expirationDate } = candidate;

				const msg = candidate.expirationMessage.trim().toLowerCase();

				const isTwoMonths = msg.includes('2 months');
				const isOneMonth = msg.includes('1 month');

				if (!email) {
					console.error(`Missing email for userId ${userId}`);
					continue;
				}

				if (isTwoMonths || isOneMonth) {
					await sendMail({
						to: email,
						subject: 'Login Access Expiration Reminder',
						html: `
						<p>Dear User,</p>
						<p>This is a reminder that your login access will expire soon.</p>

						<p><b>User ID:</b> ${userId}</p>
						<p><b>Expiration Date:</b> ${expirationDate}</p>
						<p><b>${candidate.expirationMessage}</b></p>

						<p>Please renew your account before the expiration date to avoid login interruption.</p>

						<p>Regards,<br/>Support Team</p>
					`,
					});
				}
			}

			return {
				message: 'Competent Officer Expiration Reminder Notification sent successfully',
				candidates,
			};
		} catch (err) {
			logger.error('Error in competent24HoursEnd service:', { message: err.message });
			throw err;
		}
	}

	async competentExpiryPauseEnd() {
		try {
			const candidates = await competentModel.competentExpiryPauseEnd();

			if (!candidates.length) {
				console.error('No competent officers found whose validity period has ended.');
				return { message: 'No expired competent officers found', data: [] };
			}

			for (const candidate of candidates) {
				const { userId, email } = candidate;

				if (!email) {
					console.error(`Missing email for userId ${userId}`);
					continue;
				}

				await sendMail({
					to: email,
					subject: 'Competent Officer Suspension Ended - DISH Portal',
					html: `
						<p>Dear Competent Officer,</p>

						<p>Dear Competent Officer,</p>

						<p>Your suspension period has been completed on.</p>

						<p>Regards,<br/><b>DISH Support Team</b></p>
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

	async competent24HoursEnd() {
		try {
			const candidates = await competentModel.competent24HoursEnd();

			if (!candidates.length) {
				console.error('No competent officers found whose validity period has ended.');
				return { message: 'No expired competent officers found', data: [] };
			}

			for (const candidate of candidates) {
				const { userId, email, expirationDateLimit } = candidate;

				if (!email) {
					console.error(`Missing email for userId ${userId}`);
					continue;
				}

				await sendMail({
					to: email,
					subject: 'Competent Officer 24 Hours Time Ended - DISH Portal',
					html: `
					<p>Dear Competent Officer,</p>

					<p>Your <b>24-hour provisional access period</b> has now <b>expired${
						expirationDateLimit ? ' as of <b>' + expirationDateLimit + '</b>' : ''
					}.</b></p>

					<p>You will no longer be able to log in to the DISH Portal.</p>

					<p>If you believe this is an error or require further assistance, please contact the DISH Support Team.</p>

					<p>Regards,<br/>
					<b>DISH Support Team</b><br/>
					<small>Department of Industrial Safety & Health</small></p>
				`,
				});
			}

			return {
				message: 'Competent Officer 24 Hours Time End Notification sent successfully',
				candidates,
			};
		} catch (err) {
			logger.error('Error in competent24HoursEnd service:', { err });
			throw err;
		}
	}

	async renewCompetentOfficer(userId, data) {
		try {
			const competent = await competentModel.renewCompetentOfficer(userId, data);
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

	async competentLogBook(competentUserId, startDate, endDate) {
		return await competentModel.competentLogBook(competentUserId, startDate, endDate);
	}
}
export default CompetentService;
