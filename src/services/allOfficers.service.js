// MODELS
import AllOfficersModel from '../models/allOfficers.model.js';

// UTILS
import logger from '../utils/logger.js';

import { sendMail } from '../utils/mail.js';

const allOfficersModel = new AllOfficersModel();

class AllOfficersService {
	async getCompetentOfficers(districtId, page, limit) {
		try {
			if (districtId !== undefined && (isNaN(districtId) || districtId <= 0)) {
				throw new Error('Invalid districtId provided');
			}
			const officers = await allOfficersModel.getCompetentOfficers(districtId, page, limit);
			return officers;
		} catch (err) {
			logger.error('Error in getCompetentOfficers service:', { err });
			throw err;
		}
	}

	async getActiveCompetentOfficers(districtId, page, limit) {
		try {
			if (districtId !== undefined && (isNaN(districtId) || districtId <= 0)) {
				throw new Error('Invalid districtId provided');
			}
			const officers = await allOfficersModel.getActiveCompetentOfficers(districtId, page, limit);
			return officers;
		} catch (err) {
			logger.error('Error in getActiveCompetentOfficers service:', { err });
			throw err;
		}
	}

	async getInterviewCompetentOfficers(page, limit) {
		try {
			const officers = await allOfficersModel.getInterviewCompetentOfficers(page, limit);
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
				!['Approved', 'Reject', 'RecommendedByDistrict', 'QueryToDistrict'].includes(
					applicationType
				)
			) {
				throw new Error('Invalid applicationType provided');
			}

			if (applicationType === 'Reject' && (!reason || reason.trim() === '')) {
				throw new Error('Reason is required when applicationType is Reject');
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

	async getDashboard() {
		try {
			const dashboard = await allOfficersModel.getDashboard();
			return dashboard;
		} catch (err) {
			logger.error('Error in getDashboard service:', { err });
			throw err;
		}
	}

	async getCompetentOfficerProfile(userId) {
		try {
			const profile = await allOfficersModel.getCompetentOfficerProfile(userId);
			return profile;
		} catch (err) {
			logger.error('Error in getCompetentOfficerProfile service:', { err });
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

			for (const candidate of candidates) {
				const { userId, email } = candidate;

				if (!email) {
					console.error(` Missing email for userId ${userId}`);
					continue;
				}

				await sendMail({
					to: email,
					subject: 'Interview Scheduled - Factory Portal',
					html: `
					<p>Dear Competent Officer,</p>
					<p>Your interview has been <b>successfully scheduled</b>.</p>
					<p>Below are your details:</p>
					<ul>
						<li>User ID: <b>${userId}</b></li>
						<li>Interview Date: <b>${scheduledInterviewDate}</b></li>
					</ul>
					<p>Please be on time and prepared.</p>
					<p>Regards,<br/>Support Team</p>
				`,
				});
			}

			return { message: 'Interview scheduled successfully', candidates };
		} catch (err) {
			logger.error('Error in scheduleInterview service:', { err });
			throw err;
		}
	}

	async reviewCompetentOfficer(competentOfficerId, reviewerId, reviewStatus, reviewComments) {
		try {
			// Validate review status
			const validStatuses = ['Approved', 'Rejected'];
			if (!validStatuses.includes(reviewStatus)) {
				throw new logger.error(
					'Invalid review status. Must be either "Approved" or "Rejected"',
					400
				);
			}

			// Validate competent officer ID
			if (!competentOfficerId || isNaN(competentOfficerId) || competentOfficerId <= 0) {
				throw new logger.error('Valid competent officer ID is required', 400);
			}

			// Validate reviewer ID
			if (!reviewerId || isNaN(reviewerId) || reviewerId <= 0) {
				throw new logger.error('Valid reviewer ID is required', 400);
			}

			// Call the model to process the review
			const result = await allOfficersModel.reviewCompetentOfficer(
				competentOfficerId,
				reviewerId,
				reviewStatus,
				reviewComments
			);

			return result;
		} catch (err) {
			logger.error('Error in reviewCompetentOfficer service:', {
				error: err.message,
				competentOfficerId,
				reviewerId,
				reviewStatus,
			});

			throw new logger.error(err.message || 'Failed to review competent officer', 500);
		}
	}
}

export default AllOfficersService;
