// MODELS
import AllOfficersModel from '../models/allOfficers.model.js';
import { generateInterviewPDF } from '../pdf/generateInterviewPDF.js';
import { generateSuspensionPDF } from '../pdf/generateSuspensionPDF.js';
// UTILS
import logger from '../utils/logger.js';
import { sendMail } from '../utils/mail.js';
import fs from 'fs';
import path from 'path';

const allOfficersModel = new AllOfficersModel();

class AllOfficersService {
	async getCompetentPendingOfficers(districtId, page, limit, search) {
		try {
			const officers = await allOfficersModel.getCompetentPendingOfficers(
				districtId,
				page,
				limit,
				search
			);
			return officers;
		} catch (err) {
			logger.error('Error in getCompetentPendingOfficers service:', { err });
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

	async getActiveCompetentOfficers(districtId, page, limit, search) {
		try {
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

	async updateCompetentOfficersStatus({ userId, applicationType, reason }) {
		try {
			if (
				!applicationType ||
				![
					'Approved',
					'Rejected',
					'RecommendedByDistrict',
					'QueryToDistrict',
					'NonRecommendedByDistrict',
				].includes(applicationType)
			) {
				throw new Error('Invalid applicationType provided');
			}

			if (
				(applicationType === 'Rejected' || applicationType === 'NonRecommendedByDistrict') &&
				(!reason || reason.trim() === '')
			) {
				throw new Error(
					'Reason is required when applicationType is Rejected OR NonRecommendedByDistrict'
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

	async getInterviewCompetentOfficers(page, limit, search) {
		try {
			const officers = await allOfficersModel.getInterviewCompetentOfficers(page, limit, search);
			return officers;
		} catch (err) {
			logger.error('Error in getInterviewCompetentOfficers service:', { err });
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

	async rescheduleInterview({
		interviewCandidates,
		rescheduleCount,
		oldScheduledDate,
		newScheduledDate,
	}) {
		try {
			const userId = interviewCandidates.map((c) => c.userId).join(',');

			const candidates = await allOfficersModel.rescheduleInterview(
				userId,
				rescheduleCount,
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

	async interviewCompetentOfficersStatus({ userId, applicationType, reason }) {
		try {
			if (!applicationType || !['Approved', 'Rejected'].includes(applicationType)) {
				throw new Error('Invalid applicationType provided');
			}

			if (applicationType === 'Rejected' && (!reason || reason.trim() === '')) {
				throw new Error('Reason is required when applicationType is Rejected');
			}
			const status = await allOfficersModel.interviewCompetentOfficersStatus(
				userId,
				applicationType,
				reason
			);
			if (status?.email) {
				let subject = '';
				let html = '';

				if (applicationType === 'Rejected') {
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

	async getTransferToSuperAdminCompetentOfficers(districtId, page, limit, search) {
		try {
			const officers = await allOfficersModel.getTransferToSuperAdminCompetentOfficers(
				districtId,
				page,
				limit,
				search
			);
			return officers;
		} catch (err) {
			logger.error('Error in getTransferToSuperAdminCompetentOfficers service:', { err });
			throw err;
		}
	}

	async transferToSuperAdminCompetentOfficersStatus({ userId, applicationType, reason }) {
		try {
			if (!applicationType || !['Approved', 'Rejected'].includes(applicationType)) {
				throw new Error('Invalid applicationType provided');
			}

			if (applicationType === 'Rejected' && (!reason || reason.trim() === '')) {
				throw new Error('Reason is required when applicationType is Rejected');
			}
			const status = await allOfficersModel.transferToSuperAdminCompetentOfficersStatus(
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
				} else if (applicationType === 'Rejected') {
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
			logger.error('Error in transferToSuperAdminCompetentOfficersStatus service:', { err });
			throw err;
		}
	}

	async pauseCompetentOfficer({ userId }) {
		try {
			const pause = await allOfficersModel.pauseCompetentOfficer(userId);

			if (!pause || pause.length === 0) {
				throw new Error('No record found for this userId');
			}

			const data = pause[0];

			const {
				userId: cUserId,
				name,
				email,
				CompetentSuspensionStatus,
				suspensionCount,
				firstWarningDate,
				temporarySuspendDate,
				finalSuspendDate,
			} = data;

			let subject = '';
			let html = '';
			let attachments = [];

			if (CompetentSuspensionStatus === 1 && (!suspensionCount || suspensionCount === 0)) {
				subject = 'Warning Notice - First Time';
				html = `
				<p>Dear ${name || 'Competent Officer'},</p>
				<p>This is to inform you that you have received a <b>warning from the state authorities</b>.</p>
				<p>If any mistake occurs again in the future, you will be suspended for a period of <b>6 months</b>.</p>
				<p>Please take this warning seriously and ensure compliance with all regulations.</p>
				<p>Best Regards,<br/>DISH Portal Support Team</p>
			`;
			} else if (CompetentSuspensionStatus === 2 && suspensionCount === 1) {
				subject = 'Temporary Suspension Notice - 6 Months';
				html = `
				<p>Dear ${name || 'Competent Officer'},</p>
				<p>You have been <b>suspended for a period of 6 months</b> due to repeated violations.</p>
				<p>This is your final opportunity. Any further violations will result in permanent suspension.</p>
				<p>Please contact the concerned department for further clarification.</p>
				<p>Best Regards,<br/>DISH Portal Support Team</p>
			`;
			} else if (CompetentSuspensionStatus === 2 && suspensionCount === 2) {
				subject = 'Permanent Suspension Notice';

				html = `
				<p>Dear ${name || 'Competent Officer'},</p>
				<p>You have been <b>permanently suspended</b>.</p>
				<p>Please find the attached <b>official suspension PDF</b>.</p>
				<p>Best Regards,<br/>DISH Portal</p>
			`;

				try {
					const pdfBuffer = await generateSuspensionPDF({
						name: name || 'Competent Officer',
						firstWarningDate: firstWarningDate || 'N/A',
						temporarySuspendDate: temporarySuspendDate || 'N/A',
						finalSuspendDate: finalSuspendDate || new Date().toISOString().split('T')[0],
					});

					if (!pdfBuffer || !Buffer.isBuffer(pdfBuffer)) {
						throw new Error('PDF Buffer not generated');
					}

					attachments = [
						{
							filename: `permanent_suspension_${cUserId}.pdf`,
							content: pdfBuffer,
							encoding: 'base64',
							contentType: 'application/pdf',
						},
					];
				} catch (pdfError) {
					throw pdfError;
				}
			}

			// ✅ Send email
			if (email && subject && html) {
				await sendMail({
					to: email,
					subject,
					html,
					attachments,
				});
			}

			return data;
		} catch (err) {
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
			if (!applicationType || !['Approved', 'Rejected'].includes(applicationType)) {
				throw new Error('Invalid applicationType provided');
			}

			if (applicationType === 'Rejected' && (!reason || reason.trim() === '')) {
				throw new Error('Reason is required when applicationType is Rejected');
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
				} else if (applicationType === 'Rejected') {
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

	async getCompetentTimeEndOfficersList(districtId, page, limit, search) {
		try {
			const officers = await allOfficersModel.getCompetentTimeEndOfficersList(
				districtId,
				page,
				limit,
				search
			);
			return officers;
		} catch (err) {
			logger.error('Error in getCompetentTimeEndOfficersList service:', { err });
			throw err;
		}
	}

	async timeEndCompetentOfficersRenewal(userId, status) {
		try {
			if (!status || status !== 'Approved') {
				throw new Error('Invalid status provided');
			}

			const result = await allOfficersModel.timeEndCompetentOfficersRenewal(userId, status);

			const istTime = result.expirationDateLimit;

			await sendMail({
				to: result.email,
				subject: 'Your Renewal is Activated for 24 Hours',
				html: `
				<p>Dear Officer,</p>
				<p>Your final renewal window has been activated.</p>
				<p><b>Expiration Time:</b> ${istTime}</p>
				<p>Please complete your renewal before the expiration time.</p>
			`,
			});

			return {
				message: '24 hours renewal activated and mail sent successfully.',
				data: result,
			};
		} catch (err) {
			logger.error('Error in timeEndCompetentOfficersRenewal service:', { err });
			throw err;
		}
	}
}

export default AllOfficersService;
