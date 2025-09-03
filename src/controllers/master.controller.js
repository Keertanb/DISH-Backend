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
			return res.handler.serverError({}, (err).message || 'Error in getDistricts');
		}
	}

     async getBlocksByDistrictId(req, res) {
		try {
            const { districtId } = req.query ;
			const blocks = await masterService.getBlocksByDistrictId(districtId);

			return res.handler.success(blocks);
		} catch (err) {
			logger.error('Error in getDistricts:', { err });
			return res.handler.serverError({}, (err).message || 'Error in getDistricts');
		}
	}

    async getBankDetailByIFSCCode(req, res) {
		try {
			const { IFSCCode } = req.query ;

			const bankDetail = await masterService.getBankDetailByIFSCCode(IFSCCode);

			if (!bankDetail) return res.handler.notFound(undefined, 'Bank detail not found');

			return res.handler.success(bankDetail, 'Bank detail fetched successfully');
		} catch (err) {
			logger.error('Error in getBankDetailByIFSCCode:', { err, IFSCCode: req.query.IFSCCode });
			return res.handler.serverError({}, (err).message || 'Error in getBankDetailByIFSCCode');
		}
	}
}

export default MasterController;