import sql from 'mssql';
// DATABASE
import { executeStoredProcedure } from '../database/index.js';
// UTILS
import logger from '../utils/logger.js';

class CompetentModel {
	async updateProfile(userId, data) {
		try {
			const {
				experienceYear,
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
				isStability,
				pressureVesselOrPlantDocument,
				hoistAndLiftsDocument,
				dustFumeExtractionSystemDocument,
				powerPressSafetyDevicesDocument,
				waterSealedGasHolderDocument,
				liftingMachinesChainsRopesDocument,
				ovenAndDriersDocument,
				centrifugeMachineDocument,
				thermicFluidHeaterDocument,
				confinedSpaceDocument,
				stabilityDocument,
				cv,
				educationalQualification,
				descriptionOfExamination,
				arrangementsForCalibrationAndMaintenance,
				competencyCertificateIsSought,
				otherStatute,
				statuteCompetency,
				otherRelevantInformation,
			} = data;
			const result = await executeStoredProcedure(
				'SP_UpdateCompetentOfficerProfile',
				[
					{ name: 'userId', type: sql.VarChar(30), value: userId },
					{ name: 'experienceYear', type: sql.Int, value: experienceYear },
					{ name: 'isPressureVesselOrPlant', type: sql.Bit, value: isPressureVesselOrPlant },
					{ name: 'isHoistAndLifts', type: sql.Bit, value: isHoistAndLifts },
					{ name: 'isDustFumeExtractionSystem', type: sql.Bit, value: isDustFumeExtractionSystem },
					{ name: 'isPowerPressSafetyDevices', type: sql.Bit, value: isPowerPressSafetyDevices },
					{ name: 'isWaterSealedGasHolder', type: sql.Bit, value: isWaterSealedGasHolder },
					{
						name: 'isLiftingMachinesChainsRopes',
						type: sql.Bit,
						value: isLiftingMachinesChainsRopes,
					},
					{ name: 'isOvenAndDriers', type: sql.Bit, value: isOvenAndDriers },
					{
						name: 'pressureVesselOrPlantDocument',
						type: sql.VarChar(255),
						value: pressureVesselOrPlantDocument,
					},
					{ name: 'isCentrifugeMachine', type: sql.Bit, value: isCentrifugeMachine },
					{ name: 'isThermicFluidHeater', type: sql.Bit, value: isThermicFluidHeater },
					{ name: 'isConfinedSpace', type: sql.Bit, value: isConfinedSpace },
					{ name: 'isStability', type: sql.Bit, value: isStability },
					{ name: 'hoistAndLiftsDocument', type: sql.VarChar(255), value: hoistAndLiftsDocument },
					{
						name: 'dustFumeExtractionSystemDocument',
						type: sql.VarChar(255),
						value: dustFumeExtractionSystemDocument,
					},
					{
						name: 'powerPressSafetyDevicesDocument',
						type: sql.VarChar(255),
						value: powerPressSafetyDevicesDocument,
					},
					{
						name: 'waterSealedGasHolderDocument',
						type: sql.VarChar(255),
						value: waterSealedGasHolderDocument,
					},
					{
						name: 'liftingMachinesChainsRopesDocument',
						type: sql.VarChar(255),
						value: liftingMachinesChainsRopesDocument,
					},
					{ name: 'ovenAndDriersDocument', type: sql.VarChar(255), value: ovenAndDriersDocument },
					{
						name: 'centrifugeMachineDocument',
						type: sql.VarChar(255),
						value: centrifugeMachineDocument,
					},
					{
						name: 'thermicFluidHeaterDocument',
						type: sql.VarChar(255),
						value: thermicFluidHeaterDocument,
					},
					{ name: 'confinedSpaceDocument', type: sql.VarChar(255), value: confinedSpaceDocument },
					{ name: 'stabilityDocument', type: sql.VarChar(255), value: stabilityDocument },
					{ name: 'cv', type: sql.VarChar(255), value: cv },
					{ name: 'educationalQualification', type: sql.Text, value: educationalQualification },
					{ name: 'descriptionOfExamination', type: sql.Text, value: descriptionOfExamination },
					{
						name: 'arrangementsForCalibrationAndMaintenance',
						type: sql.Text,
						value: arrangementsForCalibrationAndMaintenance,
					},
					{
						name: 'competencyCertificateIsSought',
						type: sql.Text,
						value: competencyCertificateIsSought,
					},
					{ name: 'otherStatute', type: sql.Bit, value: otherStatute },
					{ name: 'statuteCompetency', type: sql.Text, value: statuteCompetency },
					{ name: 'otherRelevantInformation', type: sql.Text, value: otherRelevantInformation },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in updateProfile model:', { err });
			throw err;
		}
	}

	async applyCompetentOfficer(userId) {
		try {
			const result = await executeStoredProcedure(
				'SP_ApplyForm',
				[{ name: 'userId', type: sql.VarChar(30), value: userId }],
				true
			);
			if (Array.isArray(result)) {
				return result;
			}
			if (result && result.recordset) {
				return result.recordset;
			}
			return [];
		} catch (err) {
			logger.error('Error in applyCompetentOfficer model:', { err });
			throw err;
		}
	}

	async getScheduledInspectionList(competentUserId, page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetScheduledMachineInspection',
				[
					{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getScheduledInspectionList model:', { err });
			throw err;
		}
	}

	async scheduledMachineInspectionStatus(
		factoryUserId,
		machineName,
		inspectionDate,
		status,
		competentReason = null,
		competentUserId
	) {
		try {
			const result = await executeStoredProcedure(
				'SP_ScheduledMachineInspectionStatus',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineName', type: sql.VarChar(70), value: machineName },
					{ name: 'inspectionDate', type: sql.Date, value: inspectionDate },
					{ name: 'status', type: sql.VarChar(20), value: status },
					{ name: 'competentReason', type: sql.VarChar(255), value: competentReason },
					{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				],
				true
			);

			return result[0];
		} catch (err) {
			logger.error('Error in scheduledMachineInspectionStatus model:', { err });
			throw err;
		}
	}

	async inspectionFactory(competentUserId, page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetPendingFactoriesByCompetent',
				[
					{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],
				true
			);

			if (Array.isArray(result)) {
				result.forEach((i) => {
					if (typeof i.machineType === 'string') {
						try {
							i.machineType = JSON.parse(i.machineType);
						} catch {
							i.machineType = [];
						}
					}
				});
			}

			return result;
		} catch (err) {
			logger.error('Error in inspectionFactory model:', { err });
			throw err;
		}
	}

	async addNewMachine(data) {
		try {
			const {
				competentUserId,
				factoryUserId,
				machineName,
				quantity,
				machineDescription,
				serialNumbers,
				dateOfFirstUse,
				dateOfInstallation,
				nameOfManufacture,
				addressOfManufacture,
				dateOfConstruction,
				thicknessOfWall,
				identityFicationOfMachine,
				safeWorkingPressure,
			} = data;
			const result = await executeStoredProcedure(
				'SP_RegisterMachineryFactoryAllocation',
				[
					{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineName', type: sql.VarChar(40), value: machineName },
					{ name: 'quantity', type: sql.Int(), value: quantity },
					{ name: 'machineDescription', type: sql.VarChar(), value: machineDescription },
					{ name: 'serialNumbers', type: sql.VarChar(50), value: serialNumbers },
					{ name: 'dateOfFirstUse', type: sql.Date(), value: dateOfFirstUse },
					{ name: 'dateOfInstallation', type: sql.Date(), value: dateOfInstallation },
					{ name: 'nameOfManufacture', type: sql.VarChar(50), value: nameOfManufacture },
					{ name: 'addressOfManufacture', type: sql.VarChar(200), value: addressOfManufacture },
					{ name: 'dateOfConstruction', type: sql.Date(), value: dateOfConstruction },
					{ name: 'thicknessOfWall', type: sql.VarChar(30), value: thicknessOfWall },
					{
						name: 'identityFicationOfMachine',
						type: sql.VarChar(50),
						value: identityFicationOfMachine,
					},
					{ name: 'safeWorkingPressure', type: sql.VarChar(50), value: safeWorkingPressure },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in addNewMachine model:', { err });
			throw err;
		}
	}

	async getFactoryList(factoryUserId, page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetMachineInspectionsList',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getFactoryList model:', { err });
			throw err;
		}
	}

	async getCompetentOfficerProfile(userId) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetCompetentOfficerProfile',
				[{ name: 'userId', type: sql.VarChar(30), value: userId ?? null }],
				true
			);
			if (result && result[0]?.experiences) {
				result[0].experiences = JSON.parse(result[0].experiences);
			}

			return result;
		} catch (err) {
			logger.error('Error in getCompetentOfficerProfile model:', { err });
			throw err;
		}
	}

	async getCompetentApprovedMachineList(competentUserId, districtId, page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetCompetentApprovedMachineList',
				[
					{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId ?? null },
					{ name: 'districtId', type: sql.Int, value: districtId ?? null },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in inspectionFactory model:', { err });
			throw err;
		}
	}

	async addExperience(data) {
		try {
			const { userId, organization, designation, startDate, endDate, keyResponsibilites } = data;

			const result = await executeStoredProcedure('SP_InsertCompetentExperience', [
				{ name: 'userId', type: sql.VarChar(30), value: userId },
				{ name: 'organization', type: sql.VarChar(70), value: organization },
				{ name: 'designation', type: sql.VarChar(40), value: designation },
				{ name: 'startDate', type: sql.Date(), value: startDate },
				{ name: 'endDate', type: sql.Date(), value: endDate },
				{ name: 'keyResponsibilites', type: sql.NVarChar(255), value: keyResponsibilites },
			]);

			return result;
		} catch (error) {
			logger.error('Error in addExperience model:', { error });
			throw error;
		}
	}

	async getIdentityByMachines(userId, machineName, page, limit, search) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetIdentitynoByFactoryMachinery',
				[
					{ name: 'userId', type: sql.VarChar(30), value: userId },
					{ name: 'machineName', type: sql.VarChar(70), value: machineName },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
					{ name: 'search', type: sql.VarChar(100), value: search ?? null },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getIdentityByMachines model:', { err });
			throw err;
		}
	}

	async upsertPressureVesselInspection(data) {
		try {
			const {
				factoryUserId,
				competentUserId,
				machineNo,
				scheduleInspectionDate,
				occupierName,
				occupierAddress,
				nameOfPressureVesselOrPlant,
				descriptionOfPressureVesselOrPlant,
				distinctiveNumberOfPressureVesselOrPlant,
				nameManufacturer,
				addressManufacturer,
				natureOfProcess,
				temperatureParameters,
				pressureParameters,
				dateOfConstruction,
				thicknessOfWalls,
				dateFirstTakenIntoUse,
				safeWorkingPressure,
				lastExternalExamination,
				lastInternalExamination,
				lastHydraulicExamination,
				lastUltrasonicExamination,
				externalExaminationFindings,
				internalExaminationFindings,
				hydraulicTestFindings,
				ultrasonicTestFindings,
				vesselCondition,
				pipingCondition,
				pressureGaugesCondition,
				safetyValveCondition,
				stopValveCondition,
				reducingValveCondition,
				additionalSafetyValveCondition,
				otherDevicesCondition,
				repairsRequired,
				repairPeriod,
				otherConditions,
				safeWorkingPressureAfterExamination,
				calculatedSafeWorkingPressure,
				reducedWorkingPressurePendingRepairs,
				otherPressureObservations,
				inspectedOn,
				isDraft,
			} = data;

			const result = await executeStoredProcedure('SP_UpsertPressureVesselInspectionForm11', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				{ name: 'occupierName', type: sql.NVarChar(50), value: occupierName },
				{ name: 'occupierAddress', type: sql.NVarChar(255), value: occupierAddress },
				{
					name: 'nameOfPressureVesselOrPlant',
					type: sql.NVarChar(50),
					value: nameOfPressureVesselOrPlant,
				},
				{
					name: 'descriptionOfPressureVesselOrPlant',
					type: sql.NVarChar(500),
					value: descriptionOfPressureVesselOrPlant,
				},
				{
					name: 'distinctiveNumberOfPressureVesselOrPlant',
					type: sql.VarChar(100),
					value: distinctiveNumberOfPressureVesselOrPlant,
				},
				{ name: 'nameManufacturer', type: sql.VarChar(70), value: nameManufacturer },
				{ name: 'addressManufacturer', type: sql.VarChar(255), value: addressManufacturer },
				{ name: 'natureOfProcess', type: sql.VarChar(60), value: natureOfProcess },
				{
					name: 'temperatureParameters',
					type: sql.VarChar(20),
					value: temperatureParameters,
				},
				{ name: 'pressureParameters', type: sql.VarChar(20), value: pressureParameters },
				{ name: 'dateOfConstruction', type: sql.Date, value: dateOfConstruction },
				{ name: 'thicknessOfWalls', type: sql.VarChar(20), value: thicknessOfWalls },
				{ name: 'dateFirstTakenIntoUse', type: sql.Date, value: dateFirstTakenIntoUse },
				{ name: 'safeWorkingPressure', type: sql.VarChar(20), value: safeWorkingPressure },
				{ name: 'lastExternalExamination', type: sql.Date, value: lastExternalExamination },
				{ name: 'lastInternalExamination', type: sql.Date, value: lastInternalExamination },
				{ name: 'lastHydraulicExamination', type: sql.Date, value: lastHydraulicExamination },
				{
					name: 'lastUltrasonicExamination',
					type: sql.Date,
					value: lastUltrasonicExamination,
				},
				{
					name: 'externalExaminationFindings',
					type: sql.VarChar(50),
					value: externalExaminationFindings,
				},
				{
					name: 'internalExaminationFindings',
					type: sql.VarChar(50),
					value: internalExaminationFindings,
				},
				{
					name: 'hydraulicTestFindings',
					type: sql.VarChar(50),
					value: hydraulicTestFindings,
				},
				{
					name: 'ultrasonicTestFindings',
					type: sql.VarChar(50),
					value: ultrasonicTestFindings,
				},
				{ name: 'vesselCondition', type: sql.VarChar(40), value: vesselCondition },
				{ name: 'pipingCondition', type: sql.VarChar(40), value: pipingCondition },
				{
					name: 'pressureGaugesCondition',
					type: sql.VarChar(255),
					value: pressureGaugesCondition,
				},
				{ name: 'safetyValveCondition', type: sql.VarChar(255), value: safetyValveCondition },
				{ name: 'stopValveCondition', type: sql.VarChar(255), value: stopValveCondition },
				{
					name: 'reducingValveCondition',
					type: sql.VarChar(255),
					value: reducingValveCondition,
				},
				{
					name: 'additionalSafetyValveCondition',
					type: sql.VarChar(255),
					value: additionalSafetyValveCondition,
				},
				{
					name: 'otherDevicesCondition',
					type: sql.VarChar(255),
					value: otherDevicesCondition,
				},
				{ name: 'repairsRequired', type: sql.VarChar(50), value: repairsRequired },
				{ name: 'repairPeriod', type: sql.VarChar(50), value: repairPeriod },
				{ name: 'otherConditions', type: sql.VarChar(255), value: otherConditions },
				{
					name: 'safeWorkingPressureAfterExamination',
					type: sql.VarChar(30),
					value: safeWorkingPressureAfterExamination,
				},
				{
					name: 'calculatedSafeWorkingPressure',
					type: sql.VarChar(30),
					value: calculatedSafeWorkingPressure,
				},
				{
					name: 'reducedWorkingPressurePendingRepairs',
					type: sql.VarChar(30),
					value: reducedWorkingPressurePendingRepairs,
				},
				{
					name: 'otherPressureObservations',
					type: sql.VarChar(255),
					value: otherPressureObservations,
				},
				{ name: 'inspectedOn', type: sql.Date, value: inspectedOn },
				{ name: 'isDraft', type: sql.Int(), value: isDraft },
			]);

			return result;
		} catch (error) {
			logger.error('Error in upsertPressureVesselInspection model:', { error });
			throw error;
		}
	}

	async upsertHoistLiftInspection(data) {
		try {
			const {
				factoryUserId,
				competentUserId,
				machineNo,
				scheduleInspectionDate,
				registrationNumber,
				licenceNumber,
				nicCodeNumber,
				occupierName,
				occupierAddress,
				typeOfHoistOrLift,
				dateOfConstruction,
				mechanicalConstructionAssessment,
				enclosureOfHoistway,
				landingGatesAndCageGates,
				interlockAndGates,
				otherGateFastenings,
				cageAndPlatformFittings,
				overRunningDevices,
				suspensionRopesOrChain,
				safetyGear,
				brakes,
				wormOrSpurGearing,
				otherElectricalEquipment,
				otherParts,
				inaccessibleParts,
				repairsRenewalsOrAlterations,
				maximumSafeWorkingLoad,
				otherParticulars,
				inspectedOn,
				isDraft,
			} = data;

			const result = await executeStoredProcedure('SP_UpsertHoistLiftInspectionForm9', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				{ name: 'registrationNumber', type: sql.VarChar(30), value: registrationNumber },
				{ name: 'licenceNumber', type: sql.VarChar(20), value: licenceNumber },
				{ name: 'nicCodeNumber', type: sql.VarChar(20), value: nicCodeNumber },
				{ name: 'occupierName', type: sql.VarChar(50), value: occupierName },
				{ name: 'occupierAddress', type: sql.VarChar(255), value: occupierAddress },
				{ name: 'typeOfHoistOrLift', type: sql.VarChar(40), value: typeOfHoistOrLift },
				{ name: 'dateOfConstruction', type: sql.Date, value: dateOfConstruction },
				{
					name: 'mechanicalConstructionAssessment',
					type: sql.VarChar(40),
					value: mechanicalConstructionAssessment,
				},
				{ name: 'enclosureOfHoistway', type: sql.VarChar(40), value: enclosureOfHoistway },
				{
					name: 'landingGatesAndCageGates',
					type: sql.VarChar(50),
					value: landingGatesAndCageGates,
				},
				{ name: 'interlockAndGates', type: sql.VarChar(50), value: interlockAndGates },
				{ name: 'otherGateFastenings', type: sql.VarChar(50), value: otherGateFastenings },
				{ name: 'cageAndPlatformFittings', type: sql.VarChar(50), value: cageAndPlatformFittings },
				{ name: 'overRunningDevices', type: sql.VarChar(30), value: overRunningDevices },
				{ name: 'suspensionRopesOrChain', type: sql.VarChar(40), value: suspensionRopesOrChain },
				{ name: 'safetyGear', type: sql.VarChar(20), value: safetyGear },
				{ name: 'brakes', type: sql.VarChar(30), value: brakes },
				{ name: 'wormOrSpurGearing', type: sql.VarChar(50), value: wormOrSpurGearing },
				{
					name: 'otherElectricalEquipment',
					type: sql.VarChar(50),
					value: otherElectricalEquipment,
				},
				{ name: 'otherParts', type: sql.VarChar(20), value: otherParts },
				{ name: 'inaccessibleParts', type: sql.VarChar(20), value: inaccessibleParts },
				{
					name: 'repairsRenewalsOrAlterations',
					type: sql.VarChar(50),
					value: repairsRenewalsOrAlterations,
				},
				{ name: 'maximumSafeWorkingLoad', type: sql.VarChar(50), value: maximumSafeWorkingLoad },
				{ name: 'otherParticulars', type: sql.VarChar(50), value: otherParticulars },
				{ name: 'inspectedOn', type: sql.Date, value: inspectedOn },
				{ name: 'isDraft', type: sql.Int(), value: isDraft },
			]);

			return result;
		} catch (err) {
			logger.error('Error in upsertHoistLiftInspection model:', { err });
			throw err;
		}
	}

	async upsertEquipmentInspection(data) {
		try {
			const {
				factoryUserId,
				competentUserId,
				machineNo,
				scheduleInspectionDate,
				occupierName,
				factoryAddress,
				distinguishingNumberOrMark,
				equipmentDescription,
				dateFirstUsed,
				examinationDate,
				examinationBy,
				certificateDate,
				certificateNumber,
				certificateIssuedBy,
				annealingDate,
				heatTreatmentBy,
				defectsFound,
				remedialSteps,
				inspectedOn,
				isDraft,
			} = data;

			const result = await executeStoredProcedure('SP_UpsertEquipmentInspectionForm10', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				{ name: 'occupierName', type: sql.VarChar(50), value: occupierName },
				{ name: 'factoryAddress', type: sql.VarChar(255), value: factoryAddress },
				{
					name: 'distinguishingNumberOrMark',
					type: sql.VarChar(20),
					value: distinguishingNumberOrMark,
				},
				{ name: 'equipmentDescription', type: sql.VarChar(255), value: equipmentDescription },
				{ name: 'dateFirstUsed', type: sql.Date, value: dateFirstUsed },
				{ name: 'examinationDate', type: sql.Date, value: examinationDate },
				{ name: 'examinationBy', type: sql.VarChar(255), value: examinationBy },
				{ name: 'certificateDate', type: sql.Date, value: certificateDate },
				{ name: 'certificateNumber', type: sql.VarChar(30), value: certificateNumber },
				{ name: 'certificateIssuedBy', type: sql.VarChar(50), value: certificateIssuedBy },
				{ name: 'annealingDate', type: sql.Date, value: annealingDate },
				{ name: 'heatTreatmentBy', type: sql.VarChar(50), value: heatTreatmentBy },
				{ name: 'defectsFound', type: sql.VarChar(50), value: defectsFound },
				{ name: 'remedialSteps', type: sql.VarChar(30), value: remedialSteps },
				{ name: 'inspectedOn', type: sql.Date, value: inspectedOn },
				{ name: 'isDraft', type: sql.Int(), value: isDraft },
			]);

			return result;
		} catch (err) {
			logger.error('Error in upsertEquipmentInspection model:', { err });
			throw err;
		}
	}

	async upsertDustFumeExtractionSystem(data) {
		try {
			const {
				factoryUserId,
				competentUserId,
				machineNo,
				scheduleInspectionDate,
				systemDescription,
				hoodSerialNumber,
				contaminantCaptured,
				captureVelocitiesDesignValue,
				captureVelocitiesActualValue,
				captureVelocitiesPoints,
				volumeExhaustedAtHood,
				hoodStaticPressure,
				pressureDropAtJoints,
				pressureDropAtOtherPoints,
				transportVelocityDustFume,
				transportVelocityPoints,
				airCleaningDeviceType,
				velocityAtInlet,
				staticPressureAtInlet,
				velocityAtOutlet,
				fanType,
				volumeHandled,
				staticPressures,
				pressureDropAtOutletOfFan,
				fanMotorType,
				speedAndHorsepower,
				defectsFound,
				inspectedOn,
				isDraft,
			} = data;

			const result = await executeStoredProcedure('SP_UpsertDustFumeExtractionSystemFrom26', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				{ name: 'systemDescription', type: sql.VarChar(255), value: systemDescription },
				{ name: 'hoodSerialNumber', type: sql.VarChar(30), value: hoodSerialNumber },
				{ name: 'contaminantCaptured', type: sql.VarChar(50), value: contaminantCaptured },
				{
					name: 'captureVelocitiesDesignValue',
					type: sql.VarChar(20),
					value: captureVelocitiesDesignValue,
				},
				{
					name: 'captureVelocitiesActualValue',
					type: sql.VarChar(20),
					value: captureVelocitiesActualValue,
				},
				{ name: 'captureVelocitiesPoints', type: sql.VarChar(15), value: captureVelocitiesPoints },
				{ name: 'volumeExhaustedAtHood', type: sql.VarChar(30), value: volumeExhaustedAtHood },
				{ name: 'hoodStaticPressure', type: sql.VarChar(50), value: hoodStaticPressure },
				{ name: 'pressureDropAtJoints', type: sql.VarChar(50), value: pressureDropAtJoints },
				{
					name: 'pressureDropAtOtherPoints',
					type: sql.VarChar(50),
					value: pressureDropAtOtherPoints,
				},
				{
					name: 'transportVelocityDustFume',
					type: sql.VarChar(50),
					value: transportVelocityDustFume,
				},
				{ name: 'transportVelocityPoints', type: sql.VarChar(50), value: transportVelocityPoints },
				{ name: 'airCleaningDeviceType', type: sql.VarChar(50), value: airCleaningDeviceType },
				{ name: 'velocityAtInlet', type: sql.VarChar(50), value: velocityAtInlet },
				{ name: 'staticPressureAtInlet', type: sql.VarChar(50), value: staticPressureAtInlet },
				{ name: 'velocityAtOutlet', type: sql.VarChar(50), value: velocityAtOutlet },
				{ name: 'fanType', type: sql.VarChar(20), value: fanType },
				{ name: 'volumeHandled', type: sql.VarChar(40), value: volumeHandled },
				{ name: 'staticPressures', type: sql.VarChar(50), value: staticPressures },
				{
					name: 'pressureDropAtOutletOfFan',
					type: sql.VarChar(50),
					value: pressureDropAtOutletOfFan,
				},
				{ name: 'fanMotorType', type: sql.VarChar(20), value: fanMotorType },
				{ name: 'speedAndHorsepower', type: sql.VarChar(50), value: speedAndHorsepower },
				{ name: 'defectsFound', type: sql.VarChar(20), value: defectsFound },
				{ name: 'inspectedOn', type: sql.Date, value: inspectedOn },
				{ name: 'isDraft', type: sql.Int(), value: isDraft },
			]);

			return result;
		} catch (error) {
			logger.error('Error in upsertDustFumeExtractionSystem model:', { error });
			throw error;
		}
	}

	async upsertOvenDriersInspection(data) {
		try {
			const {
				factoryUserId,
				competentUserId,
				machineNo,
				scheduleInspectionDate,
				occupierName,
				address,
				ovenName,
				ovenDistinctiveNumber,
				manufacturerNameAndAddress,
				ovenSize,
				workingTemperature,
				physicalCondition,
				separateCircuitWithIsolatingSwitch,
				safetyVentilationWithFan,
				temperatureController,
				explosionVentDoor,
				interlockWithFan,
				remarks,
				lastExaminationDate,
				inspectedOn,
				isDraft,
			} = data;

			const result = await executeStoredProcedure('SP_UpsertOvenDriersInspection', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				{ name: 'occupierName', type: sql.VarChar(50), value: occupierName },
				{ name: 'address', type: sql.VarChar(255), value: address },
				{ name: 'ovenName', type: sql.VarChar(50), value: ovenName },
				{ name: 'ovenDistinctiveNumber', type: sql.VarChar(20), value: ovenDistinctiveNumber },
				{
					name: 'manufacturerNameAndAddress',
					type: sql.VarChar(255),
					value: manufacturerNameAndAddress,
				},
				{ name: 'ovenSize', type: sql.VarChar(20), value: ovenSize },
				{ name: 'workingTemperature', type: sql.VarChar(20), value: workingTemperature },
				{ name: 'physicalCondition', type: sql.VarChar(30), value: physicalCondition },
				{
					name: 'separateCircuitWithIsolatingSwitch',
					type: sql.VarChar(50),
					value: separateCircuitWithIsolatingSwitch,
				},
				{
					name: 'safetyVentilationWithFan',
					type: sql.VarChar(50),
					value: safetyVentilationWithFan,
				},
				{ name: 'temperatureController', type: sql.VarChar(30), value: temperatureController },
				{ name: 'explosionVentDoor', type: sql.VarChar(50), value: explosionVentDoor },
				{ name: 'interlockWithFan', type: sql.VarChar(50), value: interlockWithFan },
				{ name: 'remarks', type: sql.VarChar(50), value: remarks },
				{ name: 'lastExaminationDate', type: sql.Date, value: lastExaminationDate },
				{ name: 'inspectedOn', type: sql.Date, value: inspectedOn },
				{ name: 'isDraft', type: sql.Int(), value: isDraft },
			]);

			return result;
		} catch (error) {
			logger.error('Error in upsertOvenDriersInspection model:', { error });
			throw error;
		}
	}

	async upsertCentrifugeMachineInspection(data) {
		try {
			const {
				factoryUserId,
				competentUserId,
				machineNo,
				scheduleInspectionDate,
				registrationNumber,
				licenseNumber,
				nicCodeNumber,
				occupierName,
				address,
				machineNameDescription,
				manufacturerNameAndAddress,
				dateOfManufacture,
				sizeAndCapacity,
				conditionOfMachine,
				topCover,
				electricalInterlockSystem,
				mechanicalLockSystem,
				brakingManagement,
				mechanicalBrakeSystem,
				earthingArrangement,
				conditionOfGuardOverBeltDrive,
				basketSpeedOperatingSpeed,
				lastExaminationDate,
				remarks,
				examinationDate,
				inspectedOn,
				isDraft,
			} = data;

			const result = await executeStoredProcedure('SP_UpsertCentrifugeMachineInspection', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				{ name: 'registrationNumber', type: sql.VarChar(50), value: registrationNumber },
				{ name: 'licenseNumber', type: sql.VarChar(30), value: licenseNumber },
				{ name: 'nicCodeNumber', type: sql.VarChar(30), value: nicCodeNumber },
				{ name: 'occupierName', type: sql.VarChar(50), value: occupierName },
				{ name: 'address', type: sql.VarChar(255), value: address },
				{ name: 'machineNameDescription', type: sql.VarChar(255), value: machineNameDescription },
				{
					name: 'manufacturerNameAndAddress',
					type: sql.VarChar(255),
					value: manufacturerNameAndAddress,
				},
				{ name: 'dateOfManufacture', type: sql.Date, value: dateOfManufacture },
				{ name: 'sizeAndCapacity', type: sql.VarChar(50), value: sizeAndCapacity },
				{ name: 'conditionOfMachine', type: sql.VarChar(50), value: conditionOfMachine },
				{ name: 'topCover', type: sql.VarChar(50), value: topCover },
				{
					name: 'electricalInterlockSystem',
					type: sql.VarChar(50),
					value: electricalInterlockSystem,
				},
				{ name: 'mechanicalLockSystem', type: sql.VarChar(50), value: mechanicalLockSystem },
				{ name: 'brakingManagement', type: sql.VarChar(50), value: brakingManagement },
				{ name: 'mechanicalBrakeSystem', type: sql.VarChar(50), value: mechanicalBrakeSystem },
				{ name: 'earthingArrangement', type: sql.VarChar(50), value: earthingArrangement },
				{
					name: 'conditionOfGuardOverBeltDrive',
					type: sql.VarChar(50),
					value: conditionOfGuardOverBeltDrive,
				},
				{
					name: 'basketSpeedOperatingSpeed',
					type: sql.VarChar(30),
					value: basketSpeedOperatingSpeed,
				},
				{ name: 'lastExaminationDate', type: sql.Date, value: lastExaminationDate },
				{ name: 'remarks', type: sql.VarChar(50), value: remarks },
				{ name: 'examinationDate', type: sql.Date, value: examinationDate },
				{ name: 'inspectedOn', type: sql.Date, value: inspectedOn },
				{ name: 'isDraft', type: sql.Int(), value: isDraft },
			]);

			return result;
		} catch (error) {
			logger.error('Error in upsertCentrifugeMachineInspection model:', { error });
			throw error;
		}
	}

	async upsertPowerPressInspection(data) {
		try {
			const {
				factoryUserId,
				competentUserId,
				machineNo,
				scheduleInspectionDate,
				registrationNumber,
				licenseNumber,
				nicCodeNumber,
				occupierName,
				address,
				powerPressIdentification,
				dateOfConstruction,
				dateFirstTakenIntoUse,
				guardsObservation,
				infraRedPhotoCellSafetyDevice,
				mainDriveSafetyDevice,
				electricalSafetyDevice,
				lastExaminationDate,
				repairsRequired,
				repairPeriod,
				otherConditions,
				otherObservations,
				inspectedOn,
				isDraft,
			} = data;

			const result = await executeStoredProcedure('SP_UpsertPowerPressInspection', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				{ name: 'registrationNumber', type: sql.VarChar(50), value: registrationNumber },
				{ name: 'licenseNumber', type: sql.VarChar(20), value: licenseNumber },
				{ name: 'nicCodeNumber', type: sql.VarChar(30), value: nicCodeNumber },
				{ name: 'occupierName', type: sql.VarChar(50), value: occupierName },
				{ name: 'address', type: sql.VarChar(255), value: address },
				{
					name: 'powerPressIdentification',
					type: sql.VarChar(50),
					value: powerPressIdentification,
				},
				{ name: 'dateOfConstruction', type: sql.Date, value: dateOfConstruction },
				{ name: 'dateFirstTakenIntoUse', type: sql.Date, value: dateFirstTakenIntoUse },
				{ name: 'guardsObservation', type: sql.VarChar(100), value: guardsObservation },
				{
					name: 'infraRedPhotoCellSafetyDevice',
					type: sql.VarChar(50),
					value: infraRedPhotoCellSafetyDevice,
				},
				{ name: 'mainDriveSafetyDevice', type: sql.VarChar(50), value: mainDriveSafetyDevice },
				{ name: 'electricalSafetyDevice', type: sql.VarChar(50), value: electricalSafetyDevice },
				{ name: 'lastExaminationDate', type: sql.Date, value: lastExaminationDate },
				{ name: 'repairsRequired', type: sql.VarChar(50), value: repairsRequired },
				{ name: 'repairPeriod', type: sql.VarChar(30), value: repairPeriod },
				{ name: 'otherConditions', type: sql.VarChar(100), value: otherConditions },
				{ name: 'otherObservations', type: sql.VarChar(100), value: otherObservations },
				{ name: 'inspectedOn', type: sql.Date, value: inspectedOn },
				{ name: 'isDraft', type: sql.Int(), value: isDraft },
			]);

			return result;
		} catch (error) {
			logger.error('Error in upsertPowerPressInspection model:', { error });
			throw error;
		}
	}

	async upsertThermicFluidHeater(data) {
		try {
			const {
				factoryUserId,
				competentUserId,
				machineNo,
				scheduleInspectionDate,
				registrationNumber,
				licenseNumber,
				nicCodeNumber,
				occupierName,
				address,
				heaterIdentification,
				manufacturerNameAddress,
				natureOfProcess,
				dateOfConstruction,
				dateFirstTakenIntoUse,
				coilSizeThickness,
				operatingPressure,
				lastPressureTestDate,
				pressureTestDetails,
				coilCondition,
				oilCondition,
				pressureGaugesCondition,
				temperatureGaugesCondition,
				stopValvesCondition,
				temperatureControl,
				differentialPressureSwitchControl,
				thermicFluidLevelControl,
				audioVideoAlarm,
				otherDevices,
				inspectedOn,
				isDraft,
			} = data;

			const result = await executeStoredProcedure('SP_UpsertThermicFluidHeater', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				{ name: 'registrationNumber', type: sql.VarChar(50), value: registrationNumber },
				{ name: 'licenseNumber', type: sql.VarChar(50), value: licenseNumber },
				{ name: 'nicCodeNumber', type: sql.VarChar(50), value: nicCodeNumber },
				{ name: 'occupierName', type: sql.VarChar(100), value: occupierName },
				{ name: 'address', type: sql.VarChar(255), value: address },
				{ name: 'heaterIdentification', type: sql.VarChar(50), value: heaterIdentification },
				{ name: 'manufacturerNameAddress', type: sql.VarChar(255), value: manufacturerNameAddress },
				{ name: 'natureOfProcess', type: sql.VarChar(100), value: natureOfProcess },
				{ name: 'dateOfConstruction', type: sql.Date, value: dateOfConstruction },
				{ name: 'dateFirstTakenIntoUse', type: sql.Date, value: dateFirstTakenIntoUse },
				{ name: 'coilSizeThickness', type: sql.VarChar(50), value: coilSizeThickness },
				{ name: 'operatingPressure', type: sql.VarChar(50), value: operatingPressure },
				{ name: 'lastPressureTestDate', type: sql.Date, value: lastPressureTestDate },
				{ name: 'pressureTestDetails', type: sql.VarChar(255), value: pressureTestDetails },
				{ name: 'coilCondition', type: sql.VarChar(50), value: coilCondition },
				{ name: 'oilCondition', type: sql.VarChar(50), value: oilCondition },
				{ name: 'pressureGaugesCondition', type: sql.VarChar(50), value: pressureGaugesCondition },
				{
					name: 'temperatureGaugesCondition',
					type: sql.VarChar(50),
					value: temperatureGaugesCondition,
				},
				{ name: 'stopValvesCondition', type: sql.VarChar(50), value: stopValvesCondition },
				{ name: 'temperatureControl', type: sql.VarChar(50), value: temperatureControl },
				{
					name: 'differentialPressureSwitchControl',
					type: sql.VarChar(50),
					value: differentialPressureSwitchControl,
				},
				{
					name: 'thermicFluidLevelControl',
					type: sql.VarChar(50),
					value: thermicFluidLevelControl,
				},
				{ name: 'audioVideoAlarm', type: sql.VarChar(50), value: audioVideoAlarm },
				{ name: 'otherDevices', type: sql.VarChar(50), value: otherDevices },
				{ name: 'inspectedOn', type: sql.Date, value: inspectedOn },
				{ name: 'isDraft', type: sql.Int(), value: isDraft },
			]);

			return result;
		} catch (error) {
			logger.error('Error in upsertThermicFluidHeater model:', { error });
			throw error;
		}
	}

	async upsertStabilityForm1A(data) {
		try {
			const {
				factoryUserId,
				competentUserId,
				machineNo,
				scheduleInspectionDate,
				factoryName,
				villageTownDistrict,
				fullPostalAddress,
				occupierName,
				natureOfManufacturingProcess,
				numberOfFloors,
				certificateNumber,
				jointDirectorLetterNumber,
				jointDirectorLetterDate,
				inspectionDetails,
				structuralSoundness,
				stabilityAssessment,
				intendedUse,
				inspectedOn,
				isDraft,
			} = data;

			const result = await executeStoredProcedure('SP_UpsertStabilityForm1A', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				{ name: 'scheduleInspectionDate', type: sql.Date, value: scheduleInspectionDate },
				{ name: 'factoryName', type: sql.NVarChar(50), value: factoryName },
				{ name: 'villageTownDistrict', type: sql.NVarChar(20), value: villageTownDistrict },
				{ name: 'fullPostalAddress', type: sql.NVarChar(255), value: fullPostalAddress },
				{ name: 'occupierName', type: sql.NVarChar(50), value: occupierName },
				{
					name: 'natureOfManufacturingProcess',
					type: sql.NVarChar(255),
					value: natureOfManufacturingProcess,
				},
				{ name: 'numberOfFloors', type: sql.Int, value: numberOfFloors },
				{ name: 'certificateNumber', type: sql.NVarChar(30), value: certificateNumber },
				{
					name: 'jointDirectorLetterNumber',
					type: sql.NVarChar(30),
					value: jointDirectorLetterNumber,
				},
				{ name: 'jointDirectorLetterDate', type: sql.Date, value: jointDirectorLetterDate },
				{ name: 'inspectionDetails', type: sql.NVarChar(255), value: inspectionDetails },
				{ name: 'structuralSoundness', type: sql.NVarChar(50), value: structuralSoundness },
				{ name: 'stabilityAssessment', type: sql.NVarChar(50), value: stabilityAssessment },
				{ name: 'intendedUse', type: sql.NVarChar(100), value: intendedUse },
				{ name: 'inspectedOn', type: sql.Date, value: inspectedOn },
				{ name: 'isDraft', type: sql.Int, value: isDraft },
			]);

			return result;
		} catch (error) {
			logger.error('Error in upsertStabilityForm1A model:', { error });
			throw error;
		}
	}

	async upsertWaterSealedGasHolderForm11A(data) {
		try {
			const {
				factoryUserId,
				competentUserId,
				machineNo,
				scheduleInspectionDate,
				occupierName,
				factoryAddress,
				equipmentDescription,
				distinguishingNumber,
				manufacturerDetails,
				yearOfManufacture,
				lastInspectionDate,
				inspectionBy,
				nextInspectionDate,
				hasPressureGauge,
				hasSafetyValve,
				hasThermometer,
				hasWaterGauge,
				equipmentCondition,
				remarks,
				inspectedOn,
				isDraft,
			} = data;

			const result = await executeStoredProcedure('SP_UpsertWaterSealedGasHolderForm11A', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				{ name: 'scheduleInspectionDate', type: sql.Date, value: scheduleInspectionDate },
				{ name: 'occupierName', type: sql.VarChar(200), value: occupierName },
				{ name: 'factoryAddress', type: sql.VarChar(255), value: factoryAddress },
				{ name: 'equipmentDescription', type: sql.VarChar(255), value: equipmentDescription },
				{ name: 'distinguishingNumber', type: sql.VarChar(20), value: distinguishingNumber },
				{ name: 'manufacturerDetails', type: sql.VarChar(255), value: manufacturerDetails },
				{ name: 'yearOfManufacture', type: sql.Int, value: yearOfManufacture },
				{ name: 'lastInspectionDate', type: sql.Date, value: lastInspectionDate },
				{ name: 'inspectionBy', type: sql.VarChar(50), value: inspectionBy },
				{ name: 'nextInspectionDate', type: sql.Date, value: nextInspectionDate },
				{ name: 'hasPressureGauge', type: sql.Bit, value: hasPressureGauge },
				{ name: 'hasSafetyValve', type: sql.Bit, value: hasSafetyValve },
				{ name: 'hasThermometer', type: sql.Bit, value: hasThermometer },
				{ name: 'hasWaterGauge', type: sql.Bit, value: hasWaterGauge },
				{ name: 'equipmentCondition', type: sql.VarChar(100), value: equipmentCondition },
				{ name: 'remarks', type: sql.VarChar(255), value: remarks },
				{ name: 'inspectedOn', type: sql.Date, value: inspectedOn },
				{ name: 'isDraft', type: sql.Int, value: isDraft },
			]);

			return result;
		} catch (error) {
			logger.error('Error in upsertWaterSealedGasHolderForm11A model:', { error });
			throw error;
		}
	}

	async upsertConfinedSpace(data) {
		try {
			const result = await executeStoredProcedure('SP_UpsertConfinedSpace', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: data.factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: data.competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: data.machineNo },
				{ name: 'scheduleInspectionDate', type: sql.Date, value: data.scheduleInspectionDate },
				{ name: 'occupierName', type: sql.NVarChar(50), value: data.occupierName },
				{ name: 'factoryAddress', type: sql.NVarChar(sql.MAX), value: data.factoryAddress },
				{
					name: 'equipmentDescription',
					type: sql.NVarChar(sql.MAX),
					value: data.equipmentDescription,
				},
				{ name: 'distinguishingNumber', type: sql.NVarChar(50), value: data.distinguishingNumber },
				{
					name: 'manufacturerDetails',
					type: sql.NVarChar(sql.MAX),
					value: data.manufacturerDetails,
				},
				{ name: 'yearOfManufacture', type: sql.Int, value: data.yearOfManufacture },
				{ name: 'workingPressure', type: sql.Decimal(10, 2), value: data.workingPressure },
				{ name: 'safeWorkingPressure', type: sql.Decimal(10, 2), value: data.safeWorkingPressure },
				{ name: 'testPressure', type: sql.Decimal(10, 2), value: data.testPressure },
				{ name: 'lastHydraulicTestDate', type: sql.Date, value: data.lastHydraulicTestDate },
				{ name: 'nextHydraulicTestDate', type: sql.Date, value: data.nextHydraulicTestDate },
				{
					name: 'lastInternalInspectionDate',
					type: sql.Date,
					value: data.lastInternalInspectionDate,
				},
				{
					name: 'nextInternalInspectionDate',
					type: sql.Date,
					value: data.nextInternalInspectionDate,
				},
				{ name: 'safetyValveDetails', type: sql.NVarChar(sql.MAX), value: data.safetyValveDetails },
				{
					name: 'safetyValveTestingDetails',
					type: sql.NVarChar(sql.MAX),
					value: data.safetyValveTestingDetails,
				},
				{
					name: 'pressureGaugeDetails',
					type: sql.NVarChar(sql.MAX),
					value: data.pressureGaugeDetails,
				},
				{
					name: 'pressureGaugeTestingDetails',
					type: sql.NVarChar(sql.MAX),
					value: data.pressureGaugeTestingDetails,
				},
				{
					name: 'waterLevelIndicatorDetails',
					type: sql.NVarChar(sql.MAX),
					value: data.waterLevelIndicatorDetails,
				},
				{
					name: 'waterLevelIndicatorTestingDetails',
					type: sql.NVarChar(sql.MAX),
					value: data.waterLevelIndicatorTestingDetails,
				},
				{ name: 'fusiblePlugDetails', type: sql.NVarChar(sql.MAX), value: data.fusiblePlugDetails },
				{
					name: 'fusiblePlugTestingDetails',
					type: sql.NVarChar(sql.MAX),
					value: data.fusiblePlugTestingDetails,
				},
				{ name: 'feedPumpDetails', type: sql.NVarChar(sql.MAX), value: data.feedPumpDetails },
				{
					name: 'feedPumpTestingDetails',
					type: sql.NVarChar(sql.MAX),
					value: data.feedPumpTestingDetails,
				},
				{
					name: 'blowDownCockDetails',
					type: sql.NVarChar(sql.MAX),
					value: data.blowDownCockDetails,
				},
				{
					name: 'blowDownCockTestingDetails',
					type: sql.NVarChar(sql.MAX),
					value: data.blowDownCockTestingDetails,
				},
				{
					name: 'mountingsAndFittingsCondition',
					type: sql.NVarChar(sql.MAX),
					value: data.mountingsAndFittingsCondition,
				},
				{ name: 'generalCondition', type: sql.NVarChar(sql.MAX), value: data.generalCondition },
				{ name: 'remarks', type: sql.NVarChar(sql.MAX), value: data.remarks },
				{ name: 'inspectedOn', type: sql.Date, value: data.inspectedOn },
				{ name: 'isDraft', type: sql.Int, value: data.isDraft },
			]);

			return result;
		} catch (error) {
			logger.error('Error in upsertConfinedSpace model:', { error });
			throw error;
		}
	}

	async getPressureVesselInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetPressureVesselInspectionForm11',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
					{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getPressureVesselInspection model:', { err });
			throw err;
		}
	}

	async getHoistLiftInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetHoistLiftInspectionForm9',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
					{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getHoistLiftInspection model:', { err });
			throw err;
		}
	}

	async getEquipmentInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetEquipmentInspectionForm10',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
					{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getEquipmentInspection model:', { err });
			throw err;
		}
	}

	async getDustFumeExtractionSystem(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetDustFumeExtractionSystemFrom26',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
					{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getDustFumeExtractionSystem model:', { err });
			throw err;
		}
	}

	async getOvenDriersInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetOvenDriersInspection',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
					{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getOvenDriersInspection model:', { err });
			throw err;
		}
	}

	async getCentrifugeMachineInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetCentrifugeMachineInspection',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
					{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getCentrifugeMachineInspection model:', { err });
			throw err;
		}
	}

	async getPowerPressInspection(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetPowerPressInspection',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
					{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getPowerPressInspection model:', { err });
			throw err;
		}
	}

	async getThermicFluidHeater(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetThermicFluidHeater',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
					{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getThermicFluidHeater model:', { err });
			throw err;
		}
	}

	async getStabilityForm1A(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetStabilityForm1A',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
					{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getStabilityForm1A model:', { err });
			throw err;
		}
	}

	async getWaterSealedGasHolderForm11A(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetWaterSealedGasHolderForm11A',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
					{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getWaterSealedGasHolderForm11A model:', { err });
			throw err;
		}
	}

	async getConfinedSpace(factoryUserId, machineNo, scheduleInspectionDate) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetConfinedSpace',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
					{ name: 'scheduleInspectionDate', type: sql.Date(), value: scheduleInspectionDate },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getConfinedSpace model:', { err });
			throw err;
		}
	}

	async getCompetentExpiryEnd() {
		try {
			const result = await executeStoredProcedure('SP_CompetentExpiryEnd', [], true);
			if (Array.isArray(result)) {
				return result;
			}
			if (result && result.recordset) {
				return result.recordset;
			}
			return [];
		} catch (err) {
			logger.error('Error in nextInspectionOnMachine model:', { err });
			throw err;
		}
	}

	async getCompetentExpiryPauseEnd() {
		try {
			const result = await executeStoredProcedure('SP_CompetentExpiryPauseEnd', [], true);
			if (Array.isArray(result)) {
				return result;
			}
			if (result && result.recordset) {
				return result.recordset;
			}
			return [];
		} catch (err) {
			logger.error('Error in getCompetentExpiryPauseEnd model:', { err });
			throw err;
		}
	}

	async getCompetentBeforeExpiry() {
		try {
			const result = await executeStoredProcedure('SP_GetCompetentOfficersBeforeExpiry', [], true);
			if (Array.isArray(result)) {
				return result;
			}
			if (result && result.recordset) {
				return result.recordset;
			}
			return [];
		} catch (err) {
			logger.error('Error in getCompetentBeforeExpiry model:', { err });
			throw err;
		}
	}

	async renewCompetentOfficer(userId) {
		try {
			const result = await executeStoredProcedure('SP_UpdateRenewCompetentOfficer', [
				{ name: 'userId', type: sql.VarChar(30), value: userId },
			]);
			return result;
		} catch (err) {
			logger.error('Error in renewCompetentOfficer model:', { err });
			throw err;
		}
	}
}

export default CompetentModel;
