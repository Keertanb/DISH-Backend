import AllOfficersService from '../services/allOfficers.service.js';
// UTILS
import logger from '../utils/logger.js';

const allOfficersService = new AllOfficersService();

class AllOfficersController {
	async getCompetentOfficers(req, res) {
		try {
			const { districtId, page, limit } = req.query;

			const officer = await allOfficersService.getCompetentOfficers(districtId, page, limit);

			return res.handler.success(officer);
		} catch (err) {
			logger.error('Error in getCompetentOfficers controller:', { err });
			return res.handler.serverError({}, err.message || 'Error in getCompetentOfficers controller');
		}
	}

	async getActiveCompetentOfficers(req, res) {
		try {
			const { districtId, page, limit } = req.query;

			const officer = await allOfficersService.getActiveCompetentOfficers(districtId, page, limit);

			return res.handler.success(officer);
		} catch (err) {
			logger.error('Error in getActiveCompetentOfficers controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getActiveCompetentOfficers controller'
			);
		}
	}

	async getInterviewCompetentOfficers(req, res) {
		try {
			const { page, limit } = req.query;
			const officer = await allOfficersService.getInterviewCompetentOfficers(page, limit);

			return res.handler.success(officer);
		} catch (err) {
			logger.error('Error in getInterviewCompetentOfficers controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getInterviewCompetentOfficers controller'
			);
		}
	}

	async updateCompetentOfficersStatus(req, res) {
		try {
			const { userId, applicationType, reason } = req.body;

			const status = await allOfficersService.updateCompetentOfficersStatus({
				userId,
				applicationType,
				reason,
			});

			return res.handler.success(status);
		} catch (err) {
			logger.error('Error in updateCompetentOfficersStatus controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in updateCompetentOfficersStatus controller'
			);
		}
	}
	async getDashboard(req, res) {
		try {
			const dashboard = await allOfficersService.getDashboard(req.body);

			return res.handler.success(dashboard);
		} catch (err) {
			logger.error('Error in getDashboard controller:', { err });
			return res.handler.serverError({}, err.message || 'Error in getDashboard controller');
		}
	}

	async getCompetentOfficerProfile(req, res) {
		try {
			const { userId } = req.query;

			const profile = await allOfficersService.getCompetentOfficerProfile(userId);

			return res.handler.success(profile);
		} catch (err) {
			logger.error('Error in getCompetentOfficerProfile controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getCompetentOfficerProfile controller'
			);
		}
	}

	/**
	 * @description Review a competent officer (Approve/Reject)
	 * @route PUT /api/officers/review
	 * @access Private (DISH_OFFICER role required)
	 */
	async reviewCompetentOfficer(req, res) {
		try {
			const { competentOfficerId, status, comments } = req.body;
			const reviewerId = req.user.id; // Assuming user ID is available in req.user

			if (!competentOfficerId || !status) {
				return res.handler.validationError({}, 'Competent officer ID and status are required');
			}

			const result = await allOfficersService.reviewCompetentOfficer(
				competentOfficerId,
				reviewerId,
				status,
				comments
			);

			return res.handler.success(result, 'Review submitted successfully');
		} catch (err) {
			logger.error('Error in reviewCompetentOfficer controller:', {
				error: err.message,
				body: req.body,
				user: req.user?.id,
			});

			if (err.statusCode) {
				return res.handler.clientError({}, err.message, err.statusCode);
			}
			return res.handler.serverError({}, err.message || 'Failed to review competent officer');
		}
	}
}

export default AllOfficersController;
