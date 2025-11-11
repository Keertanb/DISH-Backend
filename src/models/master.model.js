import sql from 'mssql';
// DATABASE
import { executeStoredProcedure } from '../database/index.js';
// UTILS
import logger from '../utils/logger.js';

class MasterModel {
	async getDistricts() {
		try {
			const result = await executeStoredProcedure('SP_GetAllDistricts', [], true);
			return result;
		} catch (err) {
			logger.error('Error in getDistricts model:', { err });
			throw err;
		}
	}

	async getBlocksByDistrictId(districtId) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetBlocksByDistrictId',
				[{ name: 'districtId', type: sql.Int(), value: districtId }],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getBlocksByDistrictId model:', { err });
			throw err;
		}
	}

	async getBankDetailByIFSCCode(IFSCCode) {
		try {
			const result = await executeStoredProcedure('SP_GetBankDetailByIFSCCode', [
				{ name: 'IFSCCode', type: sql.VarChar(11), value: IFSCCode },
			]);
			return result;
		} catch (err) {
			logger.error('Error in getBankDetailByIFSCCode model:', { err });
			throw err;
		}
	}

	async getCompetentRegisterCountByDistrictId() {
		try {
			const result = await executeStoredProcedure('SP_GetDistrictCompetentRegisterCount', [], true);
			return result;
		} catch (err) {
			logger.error('Error in getCompetentRegisterCountByDistrictId model:', { err });
			throw err;
		}
	}

	async getCompetentRegisterListByDistrictId(districtId, page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetDistrictCompetentRegisterList',
				[
					{ name: 'districtId', type: sql.Int, value: districtId ?? null },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],
				true
			);

			if (result && result[0]?.experiences) {
				result[0].experiences = JSON.parse(result[0].experiences);
			}
			return result;
		} catch (err) {
			logger.error('Error in getCompetentRegisterListByDistrictId model:', { err });
			throw err;
		}
	}

	async getCompetentCountByDistrictId(
		isPressureVesselOrPlant,
		isHoistAndLifts,
		isDustFumeExtractionSystem,
		isPowerPressSafetyDevices,
		isWaterSealedGasHolder,
		isLiftingMachinesChainsRopes,
		isOvenAndDriers,
		isCentrifugeMachine,
		isThermicFluidHeater,
		isConfinedSpace,
		isStability
	) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetDistrictCompetentCount',
				[
					{
						name: 'isPressureVesselOrPlant',
						type: sql.Bit,
						value: isPressureVesselOrPlant ?? null,
					},
					{ name: 'isHoistAndLifts', type: sql.Bit, value: isHoistAndLifts ?? null },
					{
						name: 'isDustFumeExtractionSystem',
						type: sql.Bit,
						value: isDustFumeExtractionSystem ?? null,
					},
					{
						name: 'isPowerPressSafetyDevices',
						type: sql.Bit,
						value: isPowerPressSafetyDevices ?? null,
					},
					{ name: 'isWaterSealedGasHolder', type: sql.Bit, value: isWaterSealedGasHolder ?? null },
					{
						name: 'isLiftingMachinesChainsRopes',
						type: sql.Bit,
						value: isLiftingMachinesChainsRopes ?? null,
					},
					{ name: 'isOvenAndDriers', type: sql.Bit, value: isOvenAndDriers ?? null },
					{ name: 'isCentrifugeMachine', type: sql.Bit, value: isCentrifugeMachine ?? null },
					{ name: 'isThermicFluidHeater', type: sql.Bit, value: isThermicFluidHeater ?? null },
					{ name: 'isConfinedSpace', type: sql.Bit, value: isConfinedSpace ?? null },
					{ name: 'isStability', type: sql.Bit, value: isStability ?? null },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getCompetentCountByDistrictId model:', { err });
			throw err;
		}
	}

	async getMachineTypeCompetentListByDistrictId(
		districtId,
		page,
		limit,
		search,
		isPressureVesselOrPlant,
		isHoistAndLifts,
		isDustFumeExtractionSystem,
		isPowerPressSafetyDevices,
		isWaterSealedGasHolder,
		isLiftingMachinesChainsRopes,
		isOvenAndDriers,
		isCentrifugeMachine,
		isThermicFluidHeater,
		isConfinedSpace,
		isStability
	) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetMachineWiseCompetentPersonsList',
				[
					{ name: 'districtId', type: sql.Int(), value: districtId },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
					{
						name: 'isPressureVesselOrPlant',
						type: sql.Bit,
						value: isPressureVesselOrPlant ?? null,
					},
					{ name: 'isHoistAndLifts', type: sql.Bit, value: isHoistAndLifts ?? null },
					{
						name: 'isDustFumeExtractionSystem',
						type: sql.Bit,
						value: isDustFumeExtractionSystem ?? null,
					},
					{
						name: 'isPowerPressSafetyDevices',
						type: sql.Bit,
						value: isPowerPressSafetyDevices ?? null,
					},
					{ name: 'isWaterSealedGasHolder', type: sql.Bit, value: isWaterSealedGasHolder ?? null },
					{
						name: 'isLiftingMachinesChainsRopes',
						type: sql.Bit,
						value: isLiftingMachinesChainsRopes ?? null,
					},
					{ name: 'isOvenAndDriers', type: sql.Bit, value: isOvenAndDriers ?? null },
					{ name: 'isCentrifugeMachine', type: sql.Bit, value: isCentrifugeMachine ?? null },
					{ name: 'isThermicFluidHeater', type: sql.Bit, value: isThermicFluidHeater ?? null },
					{ name: 'isConfinedSpace', type: sql.Bit, value: isConfinedSpace ?? null },
					{ name: 'isStability', type: sql.Bit, value: isStability ?? null },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getMachineTypeCompetentListByDistrictId model:', { err });
			throw err;
		}
	}

	async getPendingCompetentCountByDistrictId() {
		try {
			const result = await executeStoredProcedure('SP_GetDistrictCompetentPendingCount', [], true);

			return result;
		} catch (err) {
			logger.error('Error in getPendingCompetentCountByDistrictId model:', { err });
			throw err;
		}
	}

	async getPendingCompetentListByDistrictId(districtId, page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetDistrictCompetentPendingList',
				[
					{ name: 'districtId', type: sql.Int, value: districtId ?? null },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],
				true
			);

			if (result && result[0]?.experiences) {
				result[0].experiences = JSON.parse(result[0].experiences);
			}
			return result;
		} catch (err) {
			logger.error('Error in getPendingCompetentListByDistrictId model:', { err });
			throw err;
		}
	}

	async getSuspensionCountByDistrictId() {
		try {
			const result = await executeStoredProcedure(
				'SP_GetDistrictSuspensionCompetentCount',
				[],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getSuspensionCountByDistrictId model:', { err });
			throw err;
		}
	}

	async getFactoryCountByDistrictId() {
		try {
			const result = await executeStoredProcedure('SP_GetDistrictFactoryCount', [], true);
			return result;
		} catch (err) {
			logger.error('Error in getFactoryCountByDistrictId model:', { err });
			throw err;
		}
	}

	async getFactoryListByDistrictId(districtId, page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetDistrictFactoryList',
				[
					{ name: 'districtId', type: sql.Int, value: districtId ?? null },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getFactoryListByDistrictId model:', { err });
			throw err;
		}
	}

	async getInspectionCompletedCountByDistrictId() {
		try {
			const result = await executeStoredProcedure(
				'SP_GetDistrictInspectionThisMonthCount',
				[],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getInspectionCompletedCountByDistrictId model:', { err });
			throw err;
		}
	}

	async getInspectionCompletedListByDistrictId(districtId, page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetDistrictInspectionThisMonthList',
				[
					{ name: 'districtId', type: sql.Int, value: districtId ?? null },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getInspectionCompletedListByDistrictId model:', { err });
			throw err;
		}
	}

	async getPendingInspectionCountByDistrictId() {
		try {
			const result = await executeStoredProcedure(
				'SP_GetDistrictMachineInspectionPendingCount',
				[],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getPendingInspectionCountByDistrictId model:', { err });
			throw err;
		}
	}

	async getPendingInspectionListByDistrictId(districtId, page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetDistrictMachineInspectionPendingList',
				[
					{ name: 'districtId', type: sql.Int, value: districtId ?? null },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getPendingInspectionListByDistrictId model:', { err });
			throw err;
		}
	}

	async getOverduePendingInspectionCountByDistrictId() {
		try {
			const result = await executeStoredProcedure(
				'SP_GetDistrictMachineOverduePendingCount',
				[],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getOverduePendingInspectionCountByDistrictId model:', { err });
			throw err;
		}
	}

	async getOverduePendingInspectionListByDistrictId(districtId, page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetDistrictMachineOverduePendingList',
				[
					{ name: 'districtId', type: sql.Int, value: districtId ?? null },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],

				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getOverduePendingInspectionListByDistrictId model:', { err });
			throw err;
		}
	}
}

export default MasterModel;
