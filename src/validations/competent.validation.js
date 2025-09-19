import Joi from 'joi';
export const getScheduledInspectionList = {
	query: Joi.object().keys({
		competentUserId: Joi.string().max(30).required(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
	}),
};

export const scheduledMachineInspectionStatus = {
	body: Joi.object().keys({
		userId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
		status: Joi.string().valid('Approved', 'Rejected').required(),

		reason: Joi.when('status', {
			is: 'Rejected',
			then: Joi.string().max(255).required(),
			otherwise: Joi.allow(null).optional(),
		}),
	}),
};

export const inspectionFactory = {
	query: Joi.object().keys({
		competentUserId: Joi.string().max(30).required(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
	}),
};

export const getFactoryList = {
	query: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
	}),
};

// Validation for getting competent officer profile
export const getCompetentOfficerProfile = {
	query: Joi.object().keys({
		userId: Joi.string().required(),
	}),
};

export const addExperience = {
	body: Joi.object().keys({
		userId: Joi.string().required(),
		organization: Joi.string().required(),
		designation: Joi.string().required(),
		startDate: Joi.date().allow(null),
		endDate: Joi.date().allow(null),
		keyResponsibilites: Joi.string().allow(null, ''),
	}),
};

export const upsertPressureVesselInspection = {
	body: Joi.object().keys({
		factoryUserId: Joi.string().required(),
		competentUserId: Joi.string().required(),
		machineNo: Joi.string().required(),
		scheduleInspectionDate: Joi.date().required(),
		occupierName: Joi.string().allow(null, ''),
		occupierAddress: Joi.string().allow(null, ''),
		nameOfPressureVesselOrPlant: Joi.string().allow(null, ''),
		descriptionOfPressureVesselOrPlant: Joi.string().allow(null, ''),
		distinctiveNumberOfPressureVesselOrPlant: Joi.string().allow(null, ''),
		nameManufacturer: Joi.string().allow(null, ''),
		addressManufacturer: Joi.string().allow(null, ''),
		natureOfProcess: Joi.string().allow(null, ''),
		temperatureParameters: Joi.string().allow(null, ''),
		pressureParameters: Joi.string().allow(null, ''),
		dateOfConstruction: Joi.date().allow(null),
		thicknessOfWalls: Joi.string().allow(null, ''),
		dateFirstTakenIntoUse: Joi.date().allow(null),
		safeWorkingPressure: Joi.string().allow(null, ''),
		lastExternalExamination: Joi.date().allow(null),
		lastInternalExamination: Joi.date().allow(null),
		lastHydraulicExamination: Joi.date().allow(null),
		lastUltrasonicExamination: Joi.date().allow(null),
		externalExaminationFindings: Joi.string().allow(null, ''),
		internalExaminationFindings: Joi.string().allow(null, ''),
		hydraulicTestFindings: Joi.string().allow(null, ''),
		ultrasonicTestFindings: Joi.string().allow(null, ''),
		vesselCondition: Joi.string().allow(null, ''),
		pipingCondition: Joi.string().allow(null, ''),
		pressureGaugesCondition: Joi.string().allow(null, ''),
		safetyValveCondition: Joi.string().allow(null, ''),
		stopValveCondition: Joi.string().allow(null, ''),
		reducingValveCondition: Joi.string().allow(null, ''),
		additionalSafetyValveCondition: Joi.string().allow(null, ''),
		otherDevicesCondition: Joi.string().allow(null, ''),
		repairsRequired: Joi.string().allow(null, ''),
		repairPeriod: Joi.string().allow(null, ''),
		otherConditions: Joi.string().allow(null, ''),
		safeWorkingPressureAfterExamination: Joi.string().allow(null, ''),
		calculatedSafeWorkingPressure: Joi.string().allow(null, ''),
		reducedWorkingPressurePendingRepairs: Joi.string().allow(null, ''),
		otherPressureObservations: Joi.string().allow(null, ''),
		inspectedOn: Joi.date().required(),
		isDraft: Joi.number().valid(0, 1).required(),
	}),
};

export const upsertHoistLiftInspection = {
	body: Joi.object().keys({
		factoryUserId: Joi.string().required(),
		competentUserId: Joi.string().required(),
		machineNo: Joi.string().required(),
		scheduleInspectionDate: Joi.date().required(),
		registrationNumber: Joi.string().allow(null, ''),
		licenceNumber: Joi.string().allow(null, ''),
		nicCodeNumber: Joi.string().allow(null, ''),
		occupierName: Joi.string().allow(null, ''),
		occupierAddress: Joi.string().allow(null, ''),
		typeOfHoistOrLift: Joi.string().allow(null, ''),
		dateOfConstruction: Joi.date().allow(null),
		mechanicalConstructionAssessment: Joi.string().allow(null, ''),
		enclosureOfHoistway: Joi.string().allow(null, ''),
		landingGatesAndCageGates: Joi.string().allow(null, ''),
		interlockAndGates: Joi.string().allow(null, ''),
		otherGateFastenings: Joi.string().allow(null, ''),
		cageAndPlatformFittings: Joi.string().allow(null, ''),
		overRunningDevices: Joi.string().allow(null, ''),
		suspensionRopesOrChain: Joi.string().allow(null, ''),
		safetyGear: Joi.string().allow(null, ''),
		brakes: Joi.string().allow(null, ''),
		wormOrSpurGearing: Joi.string().allow(null, ''),
		otherElectricalEquipment: Joi.string().allow(null, ''),
		otherParts: Joi.string().allow(null, ''),
		inaccessibleParts: Joi.string().allow(null, ''),
		repairsRenewalsOrAlterations: Joi.string().allow(null, ''),
		maximumSafeWorkingLoad: Joi.string().allow(null, ''),
		otherParticulars: Joi.string().allow(null, ''),
		inspectedOn: Joi.date().required(),
		isDraft: Joi.number().valid(0, 1).required(),
	}),
};

export const upsertEquipmentInspection = {
	body: Joi.object().keys({
		factoryUserId: Joi.string().required(),
		competentUserId: Joi.string().required(),
		machineNo: Joi.string().required(),
		scheduleInspectionDate: Joi.date().required(),
		occupierName: Joi.string().allow(null, ''),
		factoryAddress: Joi.string().allow(null, ''),
		distinguishingNumberOrMark: Joi.string().allow(null, ''),
		equipmentDescription: Joi.string().allow(null, ''),
		dateFirstUsed: Joi.date().allow(null),
		examinationDate: Joi.date().allow(null),
		examinationBy: Joi.string().allow(null, ''),
		certificateDate: Joi.date().allow(null),
		certificateNumber: Joi.string().allow(null, ''),
		certificateIssuedBy: Joi.string().allow(null, ''),
		annealingDate: Joi.date().allow(null),
		heatTreatmentBy: Joi.string().allow(null, ''),
		defectsFound: Joi.string().allow(null, ''),
		remedialSteps: Joi.string().allow(null, ''),
		inspectedOn: Joi.date().required(),
		isDraft: Joi.number().valid(0, 1).required(),
	}),
};

export const upsertDustFumeExtractionSystem = {
	body: Joi.object().keys({
		factoryUserId: Joi.string().required(),
		competentUserId: Joi.string().required(),
		machineNo: Joi.string().required(),
		scheduleInspectionDate: Joi.date().required(),
		systemDescription: Joi.string().allow(null, ''),
		hoodSerialNumber: Joi.string().allow(null, ''),
		contaminantCaptured: Joi.string().allow(null, ''),
		captureVelocitiesDesignValue: Joi.string().allow(null, ''),
		captureVelocitiesActualValue: Joi.string().allow(null, ''),
		captureVelocitiesPoints: Joi.string().allow(null, ''),
		volumeExhaustedAtHood: Joi.string().allow(null, ''),
		hoodStaticPressure: Joi.string().allow(null, ''),
		pressureDropAtJoints: Joi.string().allow(null, ''),
		pressureDropAtOtherPoints: Joi.string().allow(null, ''),
		transportVelocityDustFume: Joi.string().allow(null, ''),
		transportVelocityPoints: Joi.string().allow(null, ''),
		airCleaningDeviceType: Joi.string().allow(null, ''),
		velocityAtInlet: Joi.string().allow(null, ''),
		staticPressureAtInlet: Joi.string().allow(null, ''),
		velocityAtOutlet: Joi.string().allow(null, ''),
		fanType: Joi.string().allow(null, ''),
		volumeHandled: Joi.string().allow(null, ''),
		staticPressures: Joi.string().allow(null, ''),
		pressureDropAtOutletOfFan: Joi.string().allow(null, ''),
		fanMotorType: Joi.string().allow(null, ''),
		speedAndHorsepower: Joi.string().allow(null, ''),
		defectsFound: Joi.string().allow(null, ''),
		inspectedOn: Joi.date().required(),
		isDraft: Joi.number().valid(0, 1).required(),
	}),
};

export const upsertOvenDriersInspection = {
	body: Joi.object().keys({
		factoryUserId: Joi.string().required(),
		competentUserId: Joi.string().required(),
		machineNo: Joi.string().required(),
		scheduleInspectionDate: Joi.date().required(),
		occupierName: Joi.string().allow(null, ''),
		address: Joi.string().allow(null, ''),
		ovenName: Joi.string().allow(null, ''),
		ovenDistinctiveNumber: Joi.string().allow(null, ''),
		manufacturerNameAndAddress: Joi.string().allow(null, ''),
		ovenSize: Joi.string().required(),
		workingTemperature: Joi.string().allow(null, ''),
		physicalCondition: Joi.string().allow(null, ''),
		separateCircuitWithIsolatingSwitch: Joi.string().allow(null, ''),
		safetyVentilationWithFan: Joi.string().allow(null, ''),
		temperatureController: Joi.string().allow(null, ''),
		explosionVentDoor: Joi.string().allow(null, ''),
		interlockWithFan: Joi.string().allow(null, ''),
		remarks: Joi.string().allow(null, ''),
		lastExaminationDate: Joi.date().allow(null),
		inspectedOn: Joi.date().required(),
		isDraft: Joi.number().valid(0, 1).required(),
	}),
};

export const upsertCentrifugeMachineInspection = {
	body: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		competentUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
		registrationNumber: Joi.string().max(50).allow(null, ''),
		licenseNumber: Joi.string().max(30).allow(null, ''),
		nicCodeNumber: Joi.string().max(30).allow(null, ''),
		occupierName: Joi.string().max(50).allow(null, ''),
		address: Joi.string().max(255).allow(null, ''),
		machineNameDescription: Joi.string().max(255).allow(null, ''),
		manufacturerNameAndAddress: Joi.string().max(255).allow(null, ''),
		dateOfManufacture: Joi.date().allow(null),
		sizeAndCapacity: Joi.string().max(50).allow(null, ''),
		conditionOfMachine: Joi.string().max(50).allow(null, ''),
		topCover: Joi.string().max(50).allow(null, ''),
		electricalInterlockSystem: Joi.string().max(50).allow(null, ''),
		mechanicalLockSystem: Joi.string().max(50).allow(null, ''),
		brakingManagement: Joi.string().max(50).allow(null, ''),
		mechanicalBrakeSystem: Joi.string().max(50).allow(null, ''),
		earthingArrangement: Joi.string().max(50).allow(null, ''),
		conditionOfGuardOverBeltDrive: Joi.string().max(50).allow(null, ''),
		basketSpeedOperatingSpeed: Joi.string().max(30).allow(null, ''),
		lastExaminationDate: Joi.date().allow(null),
		remarks: Joi.string().max(50).allow(null, ''),
		examinationDate: Joi.date().allow(null),
		inspectedOn: Joi.date().required(),
		isDraft: Joi.number().valid(0, 1).required(),
	}),
};

export const upsertPowerPressInspection = {
	body: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		competentUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
		registrationNumber: Joi.string().max(50).allow(null, ''),
		licenseNumber: Joi.string().max(20).allow(null, ''),
		nicCodeNumber: Joi.string().max(30).allow(null, ''),
		occupierName: Joi.string().max(50).allow(null, ''),
		address: Joi.string().max(255).allow(null, ''),
		powerPressIdentification: Joi.string().max(50).allow(null, ''),
		dateOfConstruction: Joi.date().allow(null),
		dateFirstTakenIntoUse: Joi.date().allow(null),
		guardsObservation: Joi.string().max(100).allow(null, ''),
		infraRedPhotoCellSafetyDevice: Joi.string().max(50).allow(null, ''),
		mainDriveSafetyDevice: Joi.string().max(50).allow(null, ''),
		electricalSafetyDevice: Joi.string().max(50).allow(null, ''),
		lastExaminationDate: Joi.date().allow(null),
		repairsRequired: Joi.string().max(50).allow(null, ''),
		repairPeriod: Joi.string().max(30).allow(null, ''),
		otherConditions: Joi.string().max(100).allow(null, ''),
		otherObservations: Joi.string().max(100).allow(null, ''),
		inspectedOn: Joi.date().required(),
		isDraft: Joi.number().valid(0, 1).required(),
	}),
};

export const upsertThermicFluidHeater = {
	body: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		competentUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
		registrationNumber: Joi.string().max(50).allow(null, ''),
		licenseNumber: Joi.string().max(50).allow(null, ''),
		nicCodeNumber: Joi.string().max(50).allow(null, ''),
		occupierName: Joi.string().max(100).allow(null, ''),
		address: Joi.string().max(255).allow(null, ''),
		heaterIdentification: Joi.string().max(50).allow(null, ''),
		manufacturerNameAddress: Joi.string().max(255).allow(null, ''),
		natureOfProcess: Joi.string().max(100).allow(null, ''),
		dateOfConstruction: Joi.date().allow(null),
		dateFirstTakenIntoUse: Joi.date().allow(null),
		coilSizeThickness: Joi.string().max(50).allow(null, ''),
		operatingPressure: Joi.string().max(50).allow(null, ''),
		lastPressureTestDate: Joi.date().allow(null),
		pressureTestDetails: Joi.string().max(255).allow(null, ''),
		coilCondition: Joi.string().max(50).allow(null, ''),
		oilCondition: Joi.string().max(50).allow(null, ''),
		pressureGaugesCondition: Joi.string().max(50).allow(null, ''),
		temperatureGaugesCondition: Joi.string().max(50).allow(null, ''),
		stopValvesCondition: Joi.string().max(50).allow(null, ''),
		temperatureControl: Joi.string().max(50).allow(null, ''),
		differentialPressureSwitchControl: Joi.string().max(50).allow(null, ''),
		thermicFluidLevelControl: Joi.string().max(50).allow(null, ''),
		audioVideoAlarm: Joi.string().max(50).allow(null, ''),
		otherDevices: Joi.string().max(50).allow(null, ''),
		inspectedOn: Joi.date().required(),
		isDraft: Joi.number().valid(0, 1).required(),
	}),
};

export const upsertStabilityForm1A = {
	body: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		competentUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
		factoryName: Joi.string().max(50).allow(null, ''),
		villageTownDistrict: Joi.string().max(20).allow(null, ''),
		fullPostalAddress: Joi.string().max(255).allow(null, ''),
		occupierName: Joi.string().max(50).allow(null, ''),
		natureOfManufacturingProcess: Joi.string().max(255).allow(null, ''),
		numberOfFloors: Joi.number().integer().allow(null),
		certificateNumber: Joi.string().max(30).allow(null, ''),
		jointDirectorLetterNumber: Joi.string().max(30).allow(null, ''),
		jointDirectorLetterDate: Joi.date().allow(null),
		inspectionDetails: Joi.string().max(255).allow(null, ''),
		structuralSoundness: Joi.string().max(50).allow(null, ''),
		stabilityAssessment: Joi.string().max(50).allow(null, ''),
		intendedUse: Joi.string().max(100).allow(null, ''),
		inspectedOn: Joi.date().allow(null),
		isDraft: Joi.number().valid(0, 1).required(),
	}),
};

export const upsertWaterSealedGasHolderForm11A = {
	body: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		competentUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
		occupierName: Joi.string().max(200).allow(null, ''),
		factoryAddress: Joi.string().max(255).allow(null, ''),
		equipmentDescription: Joi.string().max(255).allow(null, ''),
		distinguishingNumber: Joi.string().max(20).allow(null, ''),
		manufacturerDetails: Joi.string().max(255).allow(null, ''),
		yearOfManufacture: Joi.number().integer().allow(null),
		lastInspectionDate: Joi.date().allow(null),
		inspectionBy: Joi.string().max(50).allow(null, ''),
		nextInspectionDate: Joi.date().allow(null),
		hasPressureGauge: Joi.number().valid(0, 1).default(0),
		hasSafetyValve: Joi.number().valid(0, 1).default(0),
		hasThermometer: Joi.number().valid(0, 1).default(0),
		hasWaterGauge: Joi.number().valid(0, 1).default(0),
		equipmentCondition: Joi.string().max(100).allow(null, ''),
		remarks: Joi.string().max(255).allow(null, ''),
		inspectedOn: Joi.date().allow(null),
		isDraft: Joi.number().valid(0, 1).required(),
	}),
};

export const upsertConfinedSpace = {
	body: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		competentUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
		occupierName: Joi.string().max(50).allow(null, ''),
		factoryAddress: Joi.string().allow(null, ''),
		equipmentDescription: Joi.string().allow(null, ''),
		distinguishingNumber: Joi.string().max(50).allow(null, ''),
		manufacturerDetails: Joi.string().allow(null, ''),
		yearOfManufacture: Joi.number().integer().allow(null),
		workingPressure: Joi.number().precision(2).allow(null),
		safeWorkingPressure: Joi.number().precision(2).allow(null),
		testPressure: Joi.number().precision(2).allow(null),
		lastHydraulicTestDate: Joi.date().allow(null),
		nextHydraulicTestDate: Joi.date().allow(null),
		lastInternalInspectionDate: Joi.date().allow(null),
		nextInternalInspectionDate: Joi.date().allow(null),
		safetyValveDetails: Joi.string().allow(null, ''),
		safetyValveTestingDetails: Joi.string().allow(null, ''),
		pressureGaugeDetails: Joi.string().allow(null, ''),
		pressureGaugeTestingDetails: Joi.string().allow(null, ''),
		waterLevelIndicatorDetails: Joi.string().allow(null, ''),
		waterLevelIndicatorTestingDetails: Joi.string().allow(null, ''),
		fusiblePlugDetails: Joi.string().allow(null, ''),
		fusiblePlugTestingDetails: Joi.string().allow(null, ''),
		feedPumpDetails: Joi.string().allow(null, ''),
		feedPumpTestingDetails: Joi.string().allow(null, ''),
		blowDownCockDetails: Joi.string().allow(null, ''),
		blowDownCockTestingDetails: Joi.string().allow(null, ''),
		mountingsAndFittingsCondition: Joi.string().allow(null, ''),
		generalCondition: Joi.string().allow(null, ''),
		remarks: Joi.string().allow(null, ''),
		inspectedOn: Joi.date().allow(null),
		isDraft: Joi.number().valid(0, 1).required(),
	}),
};

export const getPressureVesselInspection = {
	query: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
	}),
};

export const getHoistLiftInspection = {
	query: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
	}),
};

export const getEquipmentInspection = {
	query: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
	}),
};

export const getDustFumeExtractionSystem = {
	query: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
	}),
};

export const getOvenDriersInspection = {
	query: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
	}),
};

export const getCentrifugeMachineInspection = {
	query: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
	}),
};

export const getPowerPressInspection = {
	query: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
	}),
};

export const getThermicFluidHeater = {
	query: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
	}),
};

export const getStabilityForm1A = {
	query: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
	}),
};

export const getWaterSealedGasHolderForm11A = {
	query: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
	}),
};

export const getConfinedSpace = {
	query: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),
	}),
};
