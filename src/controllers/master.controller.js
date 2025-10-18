// SERVICES
import MasterService from '../services/master.service.js';
// UTILS
import logger from '../utils/logger.js';

const masterService = new MasterService();

class MasterController {
	async getDistricts(req, res) {
		try {
			const districts = await masterService.getDistricts(req.body);

			return res.handler.success(districts);
		} catch (err) {
			logger.error('Error in getDistricts:', { err });
			return res.handler.serverError({}, err.message || 'Error in getDistricts');
		}
	}

	async getBlocksByDistrictId(req, res) {
		try {
			const { districtId } = req.query;
			const data = req?.data;
			console.log(data);
			const blocks = await masterService.getBlocksByDistrictId(districtId);

			return res.handler.success({ blocks });
		} catch (err) {
			logger.error('Error in getDistricts:', { err });
			return res.handler.serverError({}, err.message || 'Error in getDistricts');
		}
	}

	async getBankDetailByIFSCCode(req, res) {
		try {
			const { IFSCCode } = req.query;

			const bankDetail = await masterService.getBankDetailByIFSCCode(IFSCCode);

			if (!bankDetail) return res.handler.notFound(undefined, 'Bank detail not found');

			return res.handler.success(bankDetail, 'Bank detail fetched successfully');
		} catch (err) {
			logger.error('Error in getBankDetailByIFSCCode:', { err, IFSCCode: req.query.IFSCCode });
			return res.handler.serverError({}, err.message || 'Error in getBankDetailByIFSCCode');
		}
	}

	async getCompetentCountByDistrictId(req, res) {
		try {
			const competentCount = await masterService.getCompetentCountByDistrictId();

			return res.handler.success({ competentCount });
		} catch (err) {
			logger.error('Error in getCompetentCountByDistrictId:', { err });
			return res.handler.serverError({}, err.message || 'Error in getCompetentCountByDistrictId');
		}
	}

	async getPendingCompetentCountByDistrictId(req, res) {
		try {
			const pendingCompetentCount = await masterService.getPendingCompetentCountByDistrictId();
			return res.handler.success({ pendingCompetentCount });
		} catch (err) {
			logger.error('Error in getPendingCompetentCountByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getPendingCompetentCountByDistrictId'
			);
		}
	}

	async getPendingCompetentListByDistrictId(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;
			const pendingCompetentList = await masterService.getPendingCompetentListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return res.handler.success({ pendingCompetentList });
		} catch (err) {
			logger.error('Error in getPendingCompetentListByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getPendingCompetentListByDistrictId'
			);
		}
	}

	async getFactoryCountByDistrictId(req, res) {
		try {
			const factoryCount = await masterService.getFactoryCountByDistrictId();
			return res.handler.success({ factoryCount });
		} catch (err) {
			logger.error('Error in getFactoryCountByDistrictId:', { err });
			return res.handler.serverError({}, err.message || 'Error in getFactoryCountByDistrictId');
		}
	}

	async getFactoryListByDistrictId(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;
			const factoryList = await masterService.getFactoryListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return res.handler.success({ factoryList });
		} catch (err) {
			logger.error('Error in getFactoryListByDistrictId:', { err });
			return res.handler.serverError({}, err.message || 'Error in getFactoryListByDistrictId');
		}
	}

	async getInspectionCompletedCountByDistrictId(req, res) {
		try {
			const inspectionCompletedCount =
				await masterService.getInspectionCompletedCountByDistrictId();
			return res.handler.success({ inspectionCompletedCount });
		} catch (err) {
			logger.error('Error in getInspectionCompletedCountByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getInspectionCompletedCountByDistrictId'
			);
		}
	}

	async getInspectionCompletedListByDistrictId(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;
			const inspectionCompletedList = await masterService.getInspectionCompletedListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return res.handler.success({ inspectionCompletedList });
		} catch (err) {
			logger.error('Error in getInspectionCompletedListByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getInspectionCompletedListByDistrictId'
			);
		}
	}

	async getPendingInspectionCountByDistrictId(req, res) {
		try {
			const pendingInspectionCount = await masterService.getPendingInspectionCountByDistrictId();
			return res.handler.success({ pendingInspectionCount });
		} catch (err) {
			logger.error('Error in getPendingInspectionCountByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getPendingInspectionCountByDistrictId'
			);
		}
	}

	async getPendingInspectionListByDistrictId(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;
			const pendingInspectionList = await masterService.getPendingInspectionListByDistrictId(
				districtId,
				page,
				limit,
				search
			);
			return res.handler.success({ pendingInspectionList });
		} catch (err) {
			logger.error('Error in getPendingInspectionListByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getPendingInspectionListByDistrictId'
			);
		}
	}

	async getOverduePendingInspectionCountByDistrictId(req, res) {
		try {
			const overduePendingInspectionCount =
				await masterService.getOverduePendingInspectionCountByDistrictId();
			return res.handler.success({ overduePendingInspectionCount });
		} catch (err) {
			logger.error('Error in getOverduePendingInspectionCountByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getOverduePendingInspectionCountByDistrictId'
			);
		}
	}

	async getOverduePendingInspectionListByDistrictId(req, res) {
		try {
			const { districtId, page, limit, search } = req.query;
			const overduePendingInspectionList =
				await masterService.getOverduePendingInspectionListByDistrictId(
					districtId,
					page,
					limit,
					search
				);
			return res.handler.success({ overduePendingInspectionList });
		} catch (err) {
			logger.error('Error in getOverduePendingInspectionListByDistrictId:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getOverduePendingInspectionListByDistrictId'
			);
		}
	}
}

export default MasterController;
