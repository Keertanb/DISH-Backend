// SERVICES
import CompetentService from '../services/competent.service.js';
// UTILS
import logger from '../utils/logger.js';

const competentService = new CompetentService();

class CompetentController {
	async updateProfile(req, res) {
		try {
			console.log(req.body, 'req.body in updateProfile');
			const { userId, ...data } = req.body;
			console.log('Update Profile Request Body:', req.body);
			console.log('Uploaded Files:', req.files);
			if (req.files) {
				const fileFields = [
					'pressureVesselOrPlantDocument',
					'hoistAndLiftsDocument',
					'dustFumeExtractionSystemDocument',
					'powerPressSafetyDevicesDocument',
					'waterSealedGasHolderDocument',
					'liftingMachinesChainsRopesDocument',
					'ovenAndDriersDocument',
					'centrifugeMachineDocument',
					'thermicFluidHeaterDocument',
					'confinedSpaceDocument',
					'stabilityDocument',
					'cv',
				];

				fileFields.forEach((field) => {
					if (req.files[field] && req.files[field][0]) {
						data[field] = `competent-documents/${req.files[field][0].filename}`;
					}
				});
			}
			const result = await competentService.updateProfile(userId, data);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in updateProfile controller:', { err });
			return res.handler.serverError({}, err.message || 'Error updating profile');
		}
	}

	async applyCompetentOfficer(req, res) {
		try {
			const { userId } = req.body;
			const result = await competentService.applyCompetentOfficer(userId);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in applyCompetentOfficer controller:', { err });
			return res.handler.serverError({}, err.message || 'Error applying for Competent Officer');
		}
	}

	async getScheduledInspectionList(req, res) {
		try {
			const { competentUserId, page, limit, search } = req.query;
			const result = await competentService.getScheduledInspectionList(
				competentUserId,
				page,
				limit,
				search
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getScheduledInspectionList:', { err });
			return res.handler.serverError({}, err.message || 'Error in getScheduledInspectionList');
		}
	}

	async scheduledMachineInspectionStatus(req, res) {
		try {
			const {
				factoryUserId,
				machineName,
				inspectionDate,
				status,
				competentReason,
				competentUserId,
			} = req.body;

			const result = await competentService.scheduledMachineInspectionStatus({
				factoryUserId,
				machineName,
				inspectionDate,
				status,
				competentReason,
				competentUserId,
			});

			return res.handler.success(result);
			console.log(res.handler);
		} catch (err) {
			logger.error('Error in scheduledMachineInspectionStatus controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in scheduledMachineInspectionStatus controller'
			);
		}
	}

	async inspectionFactory(req, res) {
		try {
			const { competentUserId, page, limit, search } = req.query;
			const result = await competentService.inspectionFactory(competentUserId, page, limit, search);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in inspectionFactory:', { err });
			return res.handler.serverError({}, err.message || 'Error in inspectionFactory');
		}
	}

	async addNewMachine(req, res) {
		try {
			const machine = await competentService.addNewMachine(req.body);

			return res.handler.success(machine);
		} catch (err) {
			logger.error('Error in addNewMachine:', { err });
			return res.handler.serverError({}, err.message || 'Error in addNewMachine');
		}
	}

	async getFactoryList(req, res) {
		try {
			const { factoryUserId, page, limit, search } = req.query;
			const result = await competentService.getFactoryList(factoryUserId, page, limit, search);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getFactoryList:', { err });
			return res.handler.serverError({}, err.message || 'Error in getFactoryList');
		}
	}

	async getApprovedMachineInspectionList(req, res) {
		try {
			const { factoryUserId, machineNoPattern, inspectionDate, page, limit, search } = req.query;
			const result = await competentService.getApprovedMachineInspectionList(
				factoryUserId,
				machineNoPattern,
				inspectionDate,
				page,
				limit,
				search
			);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getApprovedMachineInspectionList:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getApprovedMachineInspectionList'
			);
		}
	}

	async getCompetentOfficerProfile(req, res) {
		try {
			const { userId } = req.query;

			const profile = await competentService.getCompetentOfficerProfile(userId);

			return res.handler.success(profile);
		} catch (err) {
			logger.error('Error in getCompetentOfficerProfile controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error in getCompetentOfficerProfile controller'
			);
		}
	}

	async getCompetentApprovedMachineList(req, res) {
		try {
			const { competentUserId, districtId, page, limit, search } = req.query;
			const result = await competentService.getCompetentApprovedMachineList(
				competentUserId,
				districtId,
				page,
				limit,
				search
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getCompetentApprovedMachineList:', { err });
			return res.handler.serverError({}, err.message || 'Error in getCompetentApprovedMachineList');
		}
	}

	async addExperience(req, res) {
		try {
			const result = await competentService.addExperience(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in addExperience controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Add Experience data');
		}
	}

	async getIdentityByMachines(req, res) {
		try {
			const { userId, machineNoPattern, page, limit, search } = req.query;
			const result = await competentService.getIdentityByMachines(
				userId,
				machineNoPattern,
				page,
				limit,
				search
			);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getIdentityByMachines controller:', { err });
			return res.handler.serverError({}, err.message || 'Error fetching Identity By Machines data');
		}
	}

	async upsertPressureVesselInspection(req, res) {
		try {
			const result = await competentService.upsertPressureVesselInspection(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertPressureVesselInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error inserting inspection data');
		}
	}

	async upsertHoistLiftInspection(req, res) {
		try {
			const result = await competentService.upsertHoistLiftInspection(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertHoistLiftInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Hoist Lift Inspection data');
		}
	}

	async upsertEquipmentInspection(req, res) {
		try {
			const result = await competentService.upsertEquipmentInspection(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertEquipmentInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error inserting Equipment Inspection');
		}
	}

	async upsertDustFumeExtractionSystem(req, res) {
		try {
			const result = await competentService.upsertDustFumeExtractionSystem(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertDustFumeExtractionSystem controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error Dust Fume Extraction System Inspection'
			);
		}
	}

	async upsertOvenDriersInspection(req, res) {
		try {
			const result = await competentService.upsertOvenDriersInspection(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertOvenDriersInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Oven Driers Inspection');
		}
	}

	async upsertCentrifugeMachineInspection(req, res) {
		try {
			const result = await competentService.upsertCentrifugeMachineInspection(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertCentrifugeMachineInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Centrifuge Machine Inspection');
		}
	}

	async upsertPowerPressInspection(req, res) {
		try {
			const result = await competentService.upsertPowerPressInspection(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertPowerPressInspection controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Power Press Inspection');
		}
	}

	async upsertStabilityForm1A(req, res) {
		try {
			const result = await competentService.upsertStabilityForm1A(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertStabilityForm1A controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Stability Form1A');
		}
	}

	async upsertThermicFluidHeater(req, res) {
		try {
			const result = await competentService.upsertThermicFluidHeater(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertThermicFluidHeater controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Thermic Fluid Heater Inspection');
		}
	}

	async upsertWaterSealedGasHolderForm11A(req, res) {
		try {
			const result = await competentService.upsertWaterSealedGasHolderForm11A(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertWaterSealedGasHolderForm11A controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Water Sealed Gas Holder Form11A');
		}
	}

	async upsertConfinedSpace(req, res) {
		try {
			const result = await competentService.upsertConfinedSpace(req.body);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in upsertConfinedSpace controller:', { err });
			return res.handler.serverError({}, err.message || 'Error Confined Space Form');
		}
	}

	async getPressureVesselInspection(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getPressureVesselInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getPressureVesselInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getPressureVesselInspection');
		}
	}

	async getHoistLiftInspection(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getHoistLiftInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getHoistLiftInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getHoistLiftInspection');
		}
	}

	async getEquipmentInspection(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getEquipmentInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getEquipmentInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getEquipmentInspection');
		}
	}

	async getDustFumeExtractionSystem(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getDustFumeExtractionSystem(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getDustFumeExtractionSystem:', { err });
			return res.handler.serverError({}, err.message || 'Error in getDustFumeExtractionSystem');
		}
	}

	async getOvenDriersInspection(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getOvenDriersInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getOvenDriersInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getOvenDriersInspection');
		}
	}

	async getCentrifugeMachineInspection(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getCentrifugeMachineInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getCentrifugeMachineInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getCentrifugeMachineInspection');
		}
	}

	async getPowerPressInspection(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getPowerPressInspection(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getPowerPressInspection:', { err });
			return res.handler.serverError({}, err.message || 'Error in getPowerPressInspection');
		}
	}

	async getThermicFluidHeater(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getThermicFluidHeater(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getThermicFluidHeater:', { err });
			return res.handler.serverError({}, err.message || 'Error in getThermicFluidHeater');
		}
	}

	async getStabilityForm1A(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getStabilityForm1A(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getStabilityForm1A:', { err });
			return res.handler.serverError({}, err.message || 'Error in getStabilityForm1A');
		}
	}

	async getWaterSealedGasHolderForm11A(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getWaterSealedGasHolderForm11A(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getWaterSealedGasHolderForm11A:', { err });
			return res.handler.serverError({}, err.message || 'Error in getWaterSealedGasHolderForm11A');
		}
	}

	async getConfinedSpace(req, res) {
		try {
			const { factoryUserId, machineNo, scheduleInspectionDate } = req.query;
			const result = await competentService.getConfinedSpace(
				factoryUserId,
				machineNo,
				scheduleInspectionDate
			);

			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in getConfinedSpace:', { err });
			return res.handler.serverError({}, err.message || 'Error in getConfinedSpace');
		}
	}

	async renewCompetentOfficer(req, res) {
		try {
			const { userId } = req.body;
			const result = await competentService.renewCompetentOfficer(userId);
			return res.handler.success(result);
		} catch (err) {
			logger.error('Error in renewCompetentOfficer controller:', { err });
			return res.handler.serverError(
				{},
				err.message || 'Error fetching renew Competent Officer data'
			);
		}
	}
}

export default CompetentController;
