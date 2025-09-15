import sql from 'mssql';
// DATABASE
import { executeStoredProcedure } from '../database/index.js';
// UTILS
import logger from '../utils/logger.js';

class CompetentModel {
	async inspectionFactory(competentUserId, page, limit) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetPendingFactoriesByCompetent',
				[
					{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in inspectionFactory model:', { err });
			throw err;
		}
	}

	async getFactoryList(factoryUserId, page, limit) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetMachineInspectionsList',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'page', type: sql.Int(), value: page },
					{ name: 'limit', type: sql.Int(), value: limit },
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
			return result;
		} catch (err) {
			logger.error('Error in getCompetentOfficerProfile model:', { err });
			throw err;
		}
	}

	async upsertPressureVesselInspection(data) {
		try {
			const {
				factoryUserId,
				competentUserId,
				machineNo,
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
			} = data;

			const result = await executeStoredProcedure('SP_UpsertPressureVesselInspectionForm11', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
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
			} = data;

			const result = await executeStoredProcedure('SP_UpsertHoistLiftInspectionForm9', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
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
			} = data;

			const result = await executeStoredProcedure('SP_UpsertEquipmentInspectionForm10', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
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
			} = data;

			const result = await executeStoredProcedure('SP_UpsertDustFumeExtractionSystemFrom26', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
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
			} = data;

			const result = await executeStoredProcedure('SP_UpsertOvenDriersInspection', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
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
			} = data;

			const result = await executeStoredProcedure('SP_UpsertCentrifugeMachineInspection', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
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
			} = data;

			const result = await executeStoredProcedure('SP_UpsertPowerPressInspection', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
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
			} = data;

			const result = await executeStoredProcedure('SP_UpsertThermicFluidHeater', [
				{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
				{ name: 'competentUserId', type: sql.VarChar(30), value: competentUserId },
				{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
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
			]);

			return result;
		} catch (error) {
			logger.error('Error in upsertThermicFluidHeater model:', { error });
			throw error;
		}
	}

	async getPressureVesselInspection(factoryUserId, machineNo) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetPressureVesselInspectionForm11',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getPressureVesselInspection model:', { err });
			throw err;
		}
	}

	async getHoistLiftInspection(factoryUserId, machineNo) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetHoistLiftInspectionForm9',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getHoistLiftInspection model:', { err });
			throw err;
		}
	}

	async getEquipmentInspection(factoryUserId, machineNo) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetEquipmentInspectionForm10',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getEquipmentInspection model:', { err });
			throw err;
		}
	}

	async getDustFumeExtractionSystem(factoryUserId, machineNo) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetDustFumeExtractionSystemFrom26',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getDustFumeExtractionSystem model:', { err });
			throw err;
		}
	}

	async getOvenDriersInspection(factoryUserId, machineNo) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetOvenDriersInspection',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getOvenDriersInspection model:', { err });
			throw err;
		}
	}

	async getCentrifugeMachineInspection(factoryUserId, machineNo) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetCentrifugeMachineInspection',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getCentrifugeMachineInspection model:', { err });
			throw err;
		}
	}

	async getPowerPressInspection(factoryUserId, machineNo) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetPowerPressInspection',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getPowerPressInspection model:', { err });
			throw err;
		}
	}

	async getThermicFluidHeater(factoryUserId, machineNo) {
		try {
			const result = await executeStoredProcedure(
				'SP_GetThermicFluidHeater',
				[
					{ name: 'factoryUserId', type: sql.VarChar(30), value: factoryUserId },
					{ name: 'machineNo', type: sql.VarChar(30), value: machineNo },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in getThermicFluidHeater model:', { err });
			throw err;
		}
	}
}

export default CompetentModel;
