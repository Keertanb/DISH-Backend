// MODELS
import AllOfficersModel from '../models/allOfficers.model.js';

// UTILS
import logger from '../utils/logger.js';
import { AppError } from '../utils/errorHandler.js';

const allOfficersModel = new AllOfficersModel();

class AllOfficersService {
	async getCompetentOfficers(districtId) {
		try {
			if (districtId !== undefined && (isNaN(districtId) || districtId <= 0)) {
				throw new Error('Invalid districtId provided');
			}
			const officers = await allOfficersModel.getCompetentOfficers(districtId);
			return officers;
		} catch (err) {
			logger.error('Error in getCompetentOfficers service:', { err });
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

	async reviewCompetentOfficer(competentOfficerId, reviewerId, reviewStatus, reviewComments) {
		try {
			// Validate review status
			const validStatuses = ['Approved', 'Rejected'];
			if (!validStatuses.includes(reviewStatus)) {
				throw new AppError('Invalid review status. Must be either "Approved" or "Rejected"', 400);
			}

			// Validate competent officer ID
			if (!competentOfficerId || isNaN(competentOfficerId) || competentOfficerId <= 0) {
				throw new AppError('Valid competent officer ID is required', 400);
			}

			// Validate reviewer ID
			if (!reviewerId || isNaN(reviewerId) || reviewerId <= 0) {
				throw new AppError('Valid reviewer ID is required', 400);
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
				reviewStatus 
			});
			
			if (err instanceof AppError) {
				throw err;
			}
			throw new AppError(err.message || 'Failed to review competent officer', 500);
		}
	}
}

export default AllOfficersService;
