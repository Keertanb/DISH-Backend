// MODELS
import FactoryModel from '../models/factory.model.js';

// UTILS
import logger from '../utils/logger.js';
import { sendMail } from '../utils/mail.js';

const factoryModel = new FactoryModel();
class FactoryService {
	async registerMachine({ userId, machineName, totalMachines }) {
		try {
			const machine = await factoryModel.registerMachine({
				userId,
				machineName,
				totalMachines,
			});
			return machine && machine.length > 0 ? machine[0] : null;
		} catch (err) {
			logger.error('Error in registerMachine service:', { err });
			throw err;
		}
	}

	async getMachineCount(userId) {
		try {
			const count = await factoryModel.getMachineCount(userId);
			return count;
		} catch (err) {
			logger.error('Error in getMachineCount service:', { err });
			throw err;
		}
	}

	async getMachineList(userId, machineType, page, limit, search) {
		try {
			const machine = await factoryModel.getMachineList(userId, machineType, page, limit, search);
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

	async machineInspection({
		factoryUserId,
		machineName,
		inspectionCount,
		inspectionDate,
		machineNo,
		competentUserIds,
	}) {
		try {
			const result = await factoryModel.machineInspection({
				factoryUserId,
				machineName,
				inspectionCount,
				inspectionDate,
				machineNo,
				competentUserIds,
			});

			return result && result.length > 0 ? result[0] : null;
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

	async getFactoryMachineInspectionList(factoryUserId, page, limit, search) {
		try {
			const machine = await factoryModel.getFactoryMachineInspectionList(
				factoryUserId,
				page,
				limit,
				search
			);
			return machine;
		} catch (err) {
			logger.error('Error in getFactoryMachineInspectionList service:', { err });
			throw err;
		}
	}

	async inactiveMachine(factoryUserId, machineNo) {
		try {
			const machine = await factoryModel.inactiveMachine(factoryUserId, machineNo);
			return machine;
		} catch (err) {
			logger.error('Error in inactiveMachine service:', { err });
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

	async beforePendingInspectionUsers() {
		try {
			const candidates = await factoryModel.beforePendingInspectionUsers();
			if (!candidates.length) {
				console.error(
					' No candidates found. Check if userIds exist in competent_officer or emails are NULL.'
				);
			}
			for (const candidate of candidates) {
				const {
					userId,
					email,
					machineNo,
					machineName,
					inspectionDate,
					inspectedCount,
					approvedCount,
					differenceCount,
				} = candidate;

				if (!email) {
					console.error(`Missing email for userId ${userId}`);
					continue;
				}

				await sendMail({
					to: email,
					subject: 'Reminder: Pending Machine Inspection - Factory Portal',
					html: `
					<p>Dear Factory User,</p>
					<p>Our records indicate that you have conducted inspections for your machine(s) listed below. However, some inspections remain pending for more than <b>15 days</b>.</p>
					
					<p><b>Machine Details:</b></p>
					<ul>
						${machineName ? `<li>Machine Name: <b>${machineName}</b></li>` : ''}
						${machineNo ? `<li>Machine No: <b>${machineNo}</b></li>` : ''}
						<li>Inspection Date: <b>${inspectionDate}</b></li
						<li>Total Inspected Machines: <b>${inspectedCount}</b></li>
						<li>Approved Machines: <b>${approvedCount ? approvedCount : 0}</b></li>
						<li>Pending Machines: <b>${differenceCount ? differenceCount : 0}</b></li>
					</ul>

					<p>If necessary, you can also <b>request a re-inspection</b> for the pending machines through the Factory Portal.</p>

					<p>Thank you for your prompt cooperation.</p>
					<p>Regards,<br/><b>Factory Inspection Support Team</b></p>
				`,
				});
			}

			return { message: 'Pending Machine Inspection Reminder successfully', candidates };
		} catch (err) {
			logger.error('Error in beforePendingInspectionUsers service:', { err });
			throw err;
		}
	}
}

export default FactoryService;
