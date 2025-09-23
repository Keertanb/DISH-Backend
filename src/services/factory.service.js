// MODELS
import FactoryModel from '../models/factory.model.js';

// UTILS
import logger from '../utils/logger.js';
import { sendMail } from '../utils/mail.js';

const factoryModel = new FactoryModel();
class FactoryService {
	async getMachineList(userId) {
		try {
			if (!userId || userId.trim() === '') {
				throw new Error('Invalid userId provided');
			}

			const machine = await factoryModel.getMachineList(userId);
			return machine;
		} catch (err) {
			logger.error('Error in getMachineList service:', { err });
			throw err;
		}
	}

	async addNewMachine(data) {
		try {
			const machine = await factoryModel.addNewMachine(data);
			return machine && machine.length > 0 ? machine[0] : null;
		} catch (err) {
			logger.error('Error in addNewMachine service:', { err });
			throw err;
		}
	}

	async machineInspection({ factoryUserId, machineNo, scheduleInspectionDate, competentUserId }) {
		try {
			const machine = await factoryModel.machineInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate,
				competentUserId
			);
			return machine;
		} catch (err) {
			logger.error('Error in machineInspection service:', { err });
			throw err;
		}
	}

	async getFactoryOwnerProfile(userId) {
		try {
			const profile = await factoryModel.getFactoryOwnerProfile(userId);
			return profile && profile.length > 0 ? profile[0] : null;
		} catch (err) {
			logger.error('Error in getFactoryOwnerProfile service:', { err });
			throw err;
		}
	}

	async getFactoryMachineInspectionList(factoryUserId, page, limit) {
		try {
			const machine = await factoryModel.getFactoryMachineInspectionList(
				factoryUserId,
				page,
				limit
			);
			return machine;
		} catch (err) {
			logger.error('Error in getFactoryMachineInspectionList service:', { err });
			throw err;
		}
	}

	async getUpcomingInspectionUsers() {
		try {
			const candidates = await factoryModel.getUpcomingInspectionUsers();

			if (!candidates.length) {
				console.error(
					' No candidates found. Check if userIds exist in competent_officer or emails are NULL.'
				);
			}

			for (const candidate of candidates) {
				const { userId, email, machineNo, machineName } = candidate;

				if (!email) {
					console.error(` Missing email for userId ${userId}`);
					continue;
				}

				await sendMail({
					to: email,
					subject: 'Machine Inspection Reminder - Factory Portal',
					html: `
					<p>Dear Factory User,</p>
					<p>This is a reminder that your machine inspection is due soon.</p>
					<p>Machine details:</p>
					<ul>
						<li>User ID: <b>${userId}</b></li>
						<li>Machine Name: <b>${machineName}</b></li>
						<li>Machine No: <b>${machineNo}</b></li>
					</ul>
					<p><b>Note:</b> Only <b>5 days</b> are remaining for the current inspection period.</p>
					<p>We kindly request you to re-schedule the inspection <b>after 5 days</b>.</p>
					<p>Regards,<br/>Support Team</p>
					`,
				});
			}

			return { message: 'Machine Inspection Reminder successfully', candidates };
		} catch (err) {
			logger.error('Error in getUpcomingInspectionUsers service:', { err });
			throw err;
		}
	}

	async nextInspectionOnMachine() {
		try {
			const candidates = await factoryModel.nextInspectionOnMachine();

			if (!candidates.length) {
				console.error(
					' No candidates found. Check if userIds exist in competent_officer or emails are NULL.'
				);
			}

			for (const candidate of candidates) {
				const { userId, email, machineNo, machineName } = candidate;

				if (!email) {
					console.error(` Missing email for userId ${userId}`);
					continue;
				}

				await sendMail({
					to: email,
					subject: 'Machine Inspection Reminder - Factory Portal',
					html: `
					<p>Dear Factory User,</p>
					<p>This is a reminder that your machine inspection is due soon.</p>
					<p>Machine details:</p>
					<ul>
						<li>User ID: <b>${userId}</b></li>
						<li>Machine Name: <b>${machineName}</b></li>
						<li>Machine No: <b>${machineNo}</b></li>
					</ul>
					<p><b>Note:</b> Only <b>5 days</b> are remaining for the current inspection period.</p>
					<p>We kindly request you to re-schedule the inspection <b>after 5 days</b>.</p>
					<p>Regards,<br/>Support Team</p>
					`,
				});
			}

			return { message: 'Machine Inspection Reminder successfully', candidates };
		} catch (err) {
			logger.error('Error in nextInspectionOnMachine service:', { err });
			throw err;
		}
	}
}

export default FactoryService;
