// SERVICES
import AllOfficersService from '../services/allOfficers.service.js';
// UTILS
import logger from '../utils/logger.js';

const allOfficersService = new AllOfficersService();

class AllOfficersController {
	async getCompetentOfficers(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;

			const officer = await allOfficersService.getCompetentOfficers(
				districtId,
				page,
				limit,
				search
			);

			return res.handler.success(officer);
		} catch (err) {
			logger.error('Error in getCompetentOfficers controller:', { err });
			return res.handler.serverError({}, err.message || 'Error in getCompetentOfficers controller');
		}
	}

	async getActiveCompetentOfficers(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;

			const officer = await allOfficersService.getActiveCompetentOfficers(
				districtId,
				page,
				limit,
				search
			);

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
			const { page, limit, search } = req.query;
			const officer = await allOfficersService.getInterviewCompetentOfficers(page, limit, search);

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
			const { userId } = req.query;
			const dashboard = await allOfficersService.getDashboard(userId);

			return res.handler.success(dashboard);
		} catch (err) {
			logger.error('Error in getDashboard controller:', { err });
			return res.handler.serverError({}, err.message || 'Error in getDashboard controller');
		}
	}

	async scheduleInterview(req, res) {
		try {
			const { interviewCandidates, scheduledInterviewDate } = req.body;

			const interview = await allOfficersService.scheduleInterview({
				interviewCandidates,
				scheduledInterviewDate,
			});

			return res.handler.success(interview);
		} catch (err) {
			logger.error('Error in scheduleInterview controller:', { err });
			return res.handler.serverError({}, err.message || 'Error in scheduleInterview controller');
		}
	}

	async rescheduleInterview(req, res) {
		try {
			const { interviewCandidates, oldScheduledDate, newScheduledDate } = req.body;

			const result = await allOfficersService.rescheduleInterview({
				interviewCandidates,
				oldScheduledDate,
				newScheduledDate,
			});

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in rescheduleInterview controller:', { err });
			return res.handler.serverError({ sqlError: err.message }, err.message);
		}
	}

	async pauseCompetentOfficer(req, res) {
		try {
			const { userId } = req.body;

			const pause = await allOfficersService.pauseCompetentOfficer({
				userId,
			});

			return res.handler.success(pause);
		} catch (err) {
			logger.error('Error in pauseCompetentOfficer controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in pauseCompetentOfficer controller'
			);
		}
	}

	async interviewCompetentOfficersStatus(req, res) {
		try {
			const { userId, applicationType, reason } = req.body;

			const status = await allOfficersService.interviewCompetentOfficersStatus({
				userId,
				applicationType,
				reason,
			});

			return res.handler.success(status);
		} catch (err) {
			logger.error('Error in interviewCompetentOfficersStatus controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in InterviewCompetentOfficersStatus controller'
			);
		}
	}

	async prioritiesCompetentOfficersStatus(req, res) {
		try {
			const { userId } = req.body;

			const status = await allOfficersService.prioritiesCompetentOfficersStatus({
				userId,
			});

			return res.handler.success(status);
		} catch (err) {
			logger.error('Error in prioritiesCompetentOfficersStatus controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in prioritiesCompetentOfficersStatus controller'
			);
		}
	}

	async getQueryToDistrictCompetentOfficers(req, res) {
		try {
			const { page, limit, search } = req.query;

			const officer = await allOfficersService.getQueryToDistrictCompetentOfficers(
				page,
				limit,
				search
			);

			return res.handler.success(officer);
		} catch (err) {
			logger.error('Error in getQueryToDistrictCompetentOfficers controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getQueryToDistrictCompetentOfficers controller'
			);
		}
	}

	async getFactoryOwners(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;

			const result = await allOfficersService.getFactoryOwners(districtId, page, limit, search);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getFactoryOwners controller:', { err });
			return res.handler.serverError({}, err.message || 'Error in getFactoryOwners controller');
		}
	}

	async getCompetentRenewOfficersList(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;

			const result = await allOfficersService.getCompetentRenewOfficersList(
				districtId,
				page,
				limit,
				search
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getCompetentRenewOfficersList controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getCompetentRenewOfficersList controller'
			);
		}
	}

	async renewCompetentOfficersStatus(req, res) {
		try {
			const { userId, applicationType, reason } = req.body;

			const status = await allOfficersService.renewCompetentOfficersStatus({
				userId,
				applicationType,
				reason,
			});

			return res.handler.success(status);
		} catch (err) {
			logger.error('Error in renewCompetentOfficersStatus controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in renewCompetentOfficersStatus controller'
			);
		}
	}
}

export default AllOfficersController;
