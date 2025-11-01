// MODELS
import AllOfficersModel from '../models/allOfficers.model.js';
import { generateInterviewPDF } from '../pdf/generateInterviewPDF.js';

// UTILS
import logger from '../utils/logger.js';
import { sendMail } from '../utils/mail.js';
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

const allOfficersModel = new AllOfficersModel();

class AllOfficersService {
	async getCompetentOfficers(districtId, page, limit, search) {
		try {
			if (districtId !== undefined && (isNaN(districtId) || districtId <= 0)) {
				throw new Error('Invalid districtId provided');
			}
			const officers = await allOfficersModel.getCompetentOfficers(districtId, page, limit, search);
			return officers;
		} catch (err) {
			logger.error('Error in getCompetentOfficers service:', { err });
			throw err;
		}
	}

	async getActiveCompetentOfficers(districtId, page, limit, search) {
		try {
			if (districtId !== undefined && (isNaN(districtId) || districtId <= 0)) {
				throw new Error('Invalid districtId provided');
			}
			const officers = await allOfficersModel.getActiveCompetentOfficers(
				districtId,
				page,
				limit,
				search
			);
			return officers;
		} catch (err) {
			logger.error('Error in getActiveCompetentOfficers service:', { err });
			throw err;
		}
	}

	async getInterviewCompetentOfficers(page, limit, search) {
		try {
			const officers = await allOfficersModel.getInterviewCompetentOfficers(page, limit, search);
			return officers;
		} catch (err) {
			logger.error('Error in getInterviewCompetentOfficers service:', { err });
			throw err;
		}
	}

	async updateCompetentOfficersStatus({ userId, applicationType, reason }) {
		try {
			if (!userId || userId.trim() === '') {
				throw new Error('Invalid userId provided');
			}
			if (
				!applicationType ||
				![
					'Approved',
					'Reject',
					'RecommendedByDistrict',
					'QueryToDistrict',
					'NonRecommendedByDistrict',
				].includes(applicationType)
			) {
				throw new Error('Invalid applicationType provided');
			}

			if (
				(applicationType === 'Reject' || applicationType === 'NonRecommendedByDistrict') &&
				(!reason || reason.trim() === '')
			) {
				throw new Error(
					'Reason is required when applicationType is Reject OR NonRecommendedByDistrict'
				);
			}
			const status = await allOfficersModel.updateCompetentOfficersStatus(
				userId,
				applicationType,
				reason
			);
			return status;
		} catch (err) {
			logger.error('Error in updateCompetentOfficersStatus service:', { err });
			throw err;
		}
	}

	async getDashboard(userId) {
		try {
			const dashboard = await allOfficersModel.getDashboard(userId);
			return dashboard;
		} catch (err) {
			logger.error('Error in getDashboard service:', { err });
			throw err;
		}
	}

	async scheduleInterview({ interviewCandidates, scheduledInterviewDate }) {
		try {
			const userIds = interviewCandidates.map((c) => c.userId).join(',');

			const candidates = await allOfficersModel.scheduleInterview(userIds, scheduledInterviewDate);

			if (!candidates.length) {
				console.error(
					' No candidates found. Check if userIds exist in competent_officer or emails are NULL.'
				);
			}

			const formattedDate = new Date(scheduledInterviewDate).toLocaleDateString('en-GB');

			for (const candidate of candidates) {
				const { userId, email, name, scheduledTime } = candidate;

				if (!email) {
					console.error(` Missing email for userId ${userId}`);
					continue;
				}

				const pdfBuffer = await generateInterviewPDF({
					name: name || '...............................',
					userId,
					interviewDate: formattedDate,
					interviewTime: scheduledTime,
				});

				await sendMail({
					to: email,
					subject: 'Interview Scheduled - Factory Portal',
					html: `
						<p>Dear Competent Officer,</p>
						<p>Your interview has been <b>successfully scheduled</b>.</p>
						<p>Below are your details:</p>
						<ul>
							<li>User ID: <b>${userId}</b></li>
							<li>Interview Date: <b>${formattedDate}</b></li>
							<li>Interview Time: <b>${scheduledTime}</b></li>
						</ul>
						<p>Regards,<br/>Support Team</p>
						`,
					attachments: [
						{
							filename: `interview_call_${userId}.pdf`,
							content: pdfBuffer,
							contentType: 'application/pdf',
						},
					],
				});
			}

			return { message: 'Interview scheduled successfully', candidates };
		} catch (err) {
			logger.error('Error in scheduleInterview service:', { err });
			throw err;
		}
	}

	async rescheduleInterview({ interviewCandidates, oldScheduledDate, newScheduledDate }) {
		try {
			const userId = interviewCandidates.map((c) => c.userId).join(',');

			const candidates = await allOfficersModel.rescheduleInterview(
				userId,
				oldScheduledDate,
				newScheduledDate
			);

			console.log(candidates);

			const formattedDate = new Date(newScheduledDate).toLocaleDateString('en-GB');

			for (const candidate of candidates) {
				const { userId, email, name, scheduleTime } = candidate;

				if (!email) {
					console.error(`Missing email for userId ${userId}`);
					continue;
				}

				const pdfBuffer = await generateInterviewPDF({
					name: name || '...............................',
					userId,
					interviewDate: formattedDate,
					interviewTime: scheduleTime,
				});

				await sendMail({
					to: email,
					subject: 'Interview Rescheduled - Factory Portal',
					html: `
							<p>Dear Competent Officer,</p>
							<p>Your interview has been <b>rescheduled</b>.</p>
							<p>Below are your updated details:</p>
							<ul>
								<li>User ID: <b>${userId}</b></li>
								<li>Interview Date: <b>${formattedDate}</b></li>
								<li>Interview Time: <b>${scheduleTime}</b></li>
							</ul>
							<p>Regards,<br/>Support Team</p>
							`,
					attachments: [
						{
							filename: `interview_reschedule_${userId}.pdf`,
							content: pdfBuffer,
							contentType: 'application/pdf',
						},
					],
				});
			}

			return { message: 'Interview rescheduled successfully', candidates };
		} catch (err) {
			logger.error('Error in rescheduleInterview service:', { err });
			console.error('SQL Error Message:', err.message);
			throw err;
		}
	}

	async pauseCompetentOfficer({ userId }) {
		try {
			const pause = await allOfficersModel.pauseCompetentOfficer(userId);

			if (!pause || pause.length === 0) {
				throw new Error('No record found for this userId');
			}

			const { email, CompetentSuspensionStatus, CompetentSuspensionDate, suspensionCount } =
				pause[0];

			let subject = '';
			let html = '';

			if (CompetentSuspensionStatus === 1) {
				subject = 'Warning Notice';
				html = `
                <p>Dear Competent Officer,</p>
                <p>This is to inform you that you have received a <b>warning from the state authorities</b>.</p>
                <p>If any mistake occurs again in the future, you will be suspended for a period of <b>6 months</b>.</p>
                <p>Please take this warning seriously and ensure compliance with all required regulations.</p>
                <p>Regards,<br/>Support Team</p>
            `;
			} else if (CompetentSuspensionStatus === 2) {
				subject = 'Suspension Notice';
				html = `
                <p>Dear Competent Officer,</p>
                <p>This is to notify you that you have been <b>suspended for a period of 6 months</b>.</p>
                <p>Your suspension will remain effective until <b>${CompetentSuspensionDate}</b>.</p>
                <p>Please contact the concerned department for any further clarification.</p>
                <p>Regards,<br/>Support Team</p>
            `;
			} else if (suspensionCount === 2) {
				subject = 'Suspension Notice';
				html = `
				<p>Dear Competent Officer,</p>
				<p>This is to inform you that you have been <b>suspended for the second time</b>.</p>
				<p>As a result, you are no longer allowed to <b>renew your application</b> or <b>login</b> to the system.</p>
				<p>Your suspension is effective from <b>${CompetentSuspensionDate}</b>.</p>
				<p>Please contact the concerned department for any further clarification.</p>
				<p>Regards,<br/>Support Team</p>
				`;
			}

			if (email && subject && html) {
				await sendMail({ to: email, subject, html });
			}

			return pause[0];
		} catch (err) {
			logger.error('Error in pauseCompetentOfficer service:', { err });
			throw err;
		}
	}

	async interviewCompetentOfficersStatus({ userId, applicationType, reason }) {
		try {
			if (!userId || userId.trim() === '') {
				throw new Error('Invalid userId provided');
			}
			if (!applicationType || !['Approved', 'Reject'].includes(applicationType)) {
				throw new Error('Invalid applicationType provided');
			}

			if (applicationType === 'Reject' && (!reason || reason.trim() === '')) {
				throw new Error('Reason is required when applicationType is Reject');
			}
			const status = await allOfficersModel.interviewCompetentOfficersStatus(
				userId,
				applicationType,
				reason
			);
			if (status?.email) {
				let subject = '';
				let html = '';

				if (applicationType === 'Approved') {
					subject = 'Competent Officer Approval Notification';
					html = `
					<p>Dear Officer,</p>
					<p><b>Congratulations!</b></p>
					<p>You are a new competent officer.</p>
					<p><b>Start Date:</b> ${status.StartDate}</p>
					<p><b>End Date:</b> ${status.EndDate}</p>
					<p>Regards,<br/>Factory Portal</p>
				`;
				} else if (applicationType === 'Reject') {
					subject = 'Competent Officer Rejection Notification';
					html = `
					<p>Dear Officer,</p>
					<p>Your application has been <b>Rejected</b>.</p>
					<p><b>Reason:</b> ${status.reason}</p>
					<p>Regards,<br/>Factory Portal</p>
				`;
				}

				await sendMail({ to: status.email, subject, html });
			}

			return status;
		} catch (err) {
			logger.error('Error in InterviewCompetentOfficersStatus service:', { err });
			throw err;
		}
	}

	async prioritiesCompetentOfficersStatus({ userId }) {
		try {
			if (!userId || userId.trim() === '') {
				throw new Error('Invalid userId provided');
			}
			const status = await allOfficersModel.prioritiesCompetentOfficersStatus(userId);

			return status;
		} catch (err) {
			logger.error('Error in prioritiesCompetentOfficersStatus service:', { err });
			throw err;
		}
	}

	async getQueryToDistrictCompetentOfficers(page, limit, search) {
		try {
			const officers = await allOfficersModel.getQueryToDistrictCompetentOfficers(
				page,
				limit,
				search
			);
			return officers;
		} catch (err) {
			logger.error('Error in getQueryToDistrictCompetentOfficers service:', { err });
			throw err;
		}
	}

	async getFactoryOwners(districtId, page, limit, search) {
		try {
			const factory = await allOfficersModel.getFactoryOwners(districtId, page, limit, search);
			return factory;
		} catch (err) {
			logger.error('Error in getFactoryOwners service:', { err });
			throw err;
		}
	}

	async getCompetentRenewOfficersList(districtId, page, limit, search) {
		try {
			const renew = await allOfficersModel.getCompetentRenewOfficersList(
				districtId,
				page,
				limit,
				search
			);
			return renew;
		} catch (err) {
			logger.error('Error in getCompetentRenewOfficersList service:', { err });
			throw err;
		}
	}

	async renewCompetentOfficersStatus({ userId, applicationType, reason }) {
		try {
			if (!userId || userId.trim() === '') {
				throw new Error('Invalid userId provided');
			}
			if (!applicationType || !['Approved', 'Reject'].includes(applicationType)) {
				throw new Error('Invalid applicationType provided');
			}

			if (applicationType === 'Reject' && (!reason || reason.trim() === '')) {
				throw new Error('Reason is required when applicationType is Reject');
			}
			const status = await allOfficersModel.renewCompetentOfficersStatus(
				userId,
				applicationType,
				reason
			);
			if (status?.email) {
				let subject = '';
				let html = '';

				if (applicationType === 'Approved') {
					subject = 'Competent Officer Approval Notification';
					html = `
					<p>Dear Officer,</p>
					<p><b>Congratulations!</b></p>
					<p>You have been successfully reappointed as a Competent Officer.</p>
					<p><b>Start Date:</b> ${status.StartDate}</p>
					<p><b>End Date:</b> ${status.EndDate}</p>
					<p>We appreciate your continued service and dedication.</p>
					<p>Regards,<br/>Factory Portal</p>
				`;
				} else if (applicationType === 'Reject') {
					subject = 'Competent Officer Rejection Notification';
					html = `
					<p>Dear Officer,</p>
					<p>We regret to inform you that your Competent Officer renewal application has been <b>Rejected</b>.</p>
					<p><b>Reason:</b> ${status.reason}</p>
					<p>Regards,<br/>Factory Portal</p>
				`;
				}

				await sendMail({ to: status.email, subject, html });
			}

			return status;
		} catch (err) {
			logger.error('Error in renewCompetentOfficersStatus service:', { err });
			throw err;
		}
	}
}

export default AllOfficersService;
