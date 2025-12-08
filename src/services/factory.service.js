// MODELS
import FactoryModel from '../models/factory.model.js';

// UTILS
import logger from '../utils/logger.js';
import { sendMail } from '../utils/mail.js';

const factoryModel = new FactoryModel();
class FactoryService {
	async registerMachine({ userId, machineName, totalMachines }) {
		const machine = await factoryModel.registerMachine({
			userId,
			machineName,
			totalMachines,
		});
		return machine && machine.length > 0 ? machine[0] : null;
	}

	async getMachineCount(userId) {
		return await factoryModel.getMachineCount(userId);
	}

	async getMachineList(userId, machineType, page, limit, search) {
		return await factoryModel.getMachineList(userId, machineType, page, limit, search);
	}

	async getFactoryOwnerProfile(userId) {
		const profile = await factoryModel.getFactoryOwnerProfile(userId);
		return profile && profile.length > 0 ? profile[0] : null;
	}

	async getFactoryMachineInspectionList(factoryUserId, page, limit, search) {
		return await factoryModel.getFactoryMachineInspectionList(factoryUserId, page, limit, search);
	}

	async inactiveMachine(factoryUserId, machineNo) {
		return await factoryModel.inactiveMachine(factoryUserId, machineNo);
	}

	async upcomingInspectionUsers() {
		try {
			const candidates = await factoryModel.upcomingInspectionUsers();

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
			logger.error('Error in upcomingInspectionUsers service:', { err });
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

	async beforeUnderInspectionSchedule() {
		try {
			const candidates = await factoryModel.beforeUnderInspectionSchedule();
			if (!candidates.length) {
				console.error(
					' No candidates found. Check if userIds exist in competent_officer or emails are NULL.'
				);
			}
			for (const candidate of candidates) {
				const {
					userId,
					email,
					competentName,
					competentMo,
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
					subject: 'Reminder: Under Inspection Machines - Factory Portal',
					html: `
					<p>Dear Factory User,</p>
					<p>Our records indicate that you have conducted inspections for your machine(s) listed below. However, some inspections remain under for more than <b>7 days</b>.</p>
					
					<p><b>Machine Details:</b></p>
					<ul>
						<li>Competent person name : <b>${competentName}</b></li>
						<li>Competent Context No : <b>${competentMo}</b></li>
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
			logger.error('Error in beforeUnderInspectionSchedule service:', { err });
			throw err;
		}
	}
}

export default FactoryService;
