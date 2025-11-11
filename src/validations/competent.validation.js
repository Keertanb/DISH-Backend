import Joi from 'joi';

export const updateProfile = {
	body: Joi.object().keys({
		userId: Joi.string().max(30).required(),
		mobileNo: Joi.string().max(15).required(),
		email: Joi.string().email().max(100).required(),
		addressLine1: Joi.string().max(50).required(),
		addressLine2: Joi.string().max(50).allow(null),
		addressLine3: Joi.string().max(50).allow(null),
		experienceYear: Joi.number().integer().min(1).optional(),
		isPressureVesselOrPlant: Joi.number().valid(0, 1).allow(null),
		isHoistAndLifts: Joi.number().valid(0, 1).allow(null),
		isDustFumeExtractionSystem: Joi.number().valid(0, 1).allow(null),
		isPowerPressSafetyDevices: Joi.number().valid(0, 1).allow(null),
		isWaterSealedGasHolder: Joi.number().valid(0, 1).allow(null),
		isLiftingMachinesChainsRopes: Joi.number().valid(0, 1).allow(null),
		isOvenAndDriers: Joi.number().valid(0, 1).allow(null),
		isCentrifugeMachine: Joi.number().valid(0, 1).allow(null),
		isThermicFluidHeater: Joi.number().valid(0, 1).allow(null),
		isConfinedSpace: Joi.number().valid(0, 1).allow(null),
		isStability: Joi.number().valid(0, 1).allow(null),

		// pressureVesselOrPlantDocument: Joi.string()
		// 	.max(255)
		// 	.allow(null, '')
		// 	.when('isPressureVesselOrPlant', {
		// 		is: 1,
		// 		then: Joi.string()
		// 			.max(255)
		// 			.message('Pressure Vessel or Plant document is required when selected')
		// 			.required(),
		// 		otherwise: Joi.string().max(255).allow(null, ''),
		// 	}),

		// hoistAndLiftsDocument: Joi.string()
		// 	.max(255)
		// 	.allow(null, '')
		// 	.when('isHoistAndLifts', {
		// 		is: 1,
		// 		then: Joi.string()
		// 			.max(255)
		// 			.message('Hoist and Lifts document is required when selected')
		// 			.required(),
		// 		otherwise: Joi.string().max(255).allow(null, ''),
		// 	}),
		// dustFumeExtractionSystemDocument: Joi.string()
		// 	.max(255)
		// 	.allow(null, '')
		// 	.when('isDustFumeExtractionSystem', {
		// 		is: 1,
		// 		then: Joi.string()
		// 			.max(255)
		// 			.message('Dust & Fume Extraction System document is required when selected')
		// 			.required(),
		// 		otherwise: Joi.string().max(255).allow(null, ''),
		// 	}),

		// powerPressSafetyDevicesDocument: Joi.string()
		// 	.max(255)
		// 	.allow(null, '')
		// 	.when('isPowerPressSafetyDevices', {
		// 		is: 1,
		// 		then: Joi.string()
		// 			.max(255)
		// 			.message('Power Press Safety Devices document is required when selected')
		// 			.required(),
		// 		otherwise: Joi.string().max(255).allow(null, ''),
		// 	}),
		// waterSealedGasHolderDocument: Joi.string()
		// 	.max(255)
		// 	.allow(null, '')
		// 	.when('isWaterSealedGasHolder', {
		// 		is: 1,
		// 		then: Joi.string()
		// 			.max(255)
		// 			.message('Water Sealed Gas Holder document is required when selected')
		// 			.required(),
		// 		otherwise: Joi.string().max(255).allow(null, ''),
		// 	}),
		// liftingMachinesChainsRopesDocument: Joi.string()
		// 	.max(255)
		// 	.allow(null, '')
		// 	.when('isLiftingMachinesChainsRopes', {
		// 		is: 1,
		// 		then: Joi.string()
		// 			.max(255)
		// 			.message('Lifting Machines, Chains & Ropes document is required when selected')
		// 			.required(),
		// 		otherwise: Joi.string().max(255).allow(null, ''),
		// 	}),
		// ovenAndDriersDocument: Joi.string()
		// 	.max(255)
		// 	.allow(null, '')
		// 	.when('isOvenAndDriers', {
		// 		is: 1,
		// 		then: Joi.string()
		// 			.max(255)
		// 			.message('Oven and Driers document is required when selected')
		// 			.required(),
		// 		otherwise: Joi.string().max(255).allow(null, ''),
		// 	}),
		// centrifugeMachineDocument: Joi.string()
		// 	.max(255)
		// 	.allow(null, '')
		// 	.when('isCentrifugeMachine', {
		// 		is: 1,
		// 		then: Joi.string()
		// 			.max(255)
		// 			.message('Centrifuge Machine document is required when selected')
		// 			.required(),
		// 		otherwise: Joi.string().max(255).allow(null, ''),
		// 	}),
		// thermicFluidHeaterDocument: Joi.string()
		// 	.max(255)
		// 	.allow(null, '')
		// 	.when('isThermicFluidHeater', {
		// 		is: 1,
		// 		then: Joi.string()
		// 			.max(255)
		// 			.message('Thermic Fluid Heater document is required when selected')
		// 			.required(),
		// 		otherwise: Joi.string().max(255).allow(null, ''),
		// 	}),
		// confinedSpaceDocument: Joi.string()
		// 	.max(255)
		// 	.allow(null, '')
		// 	.when('isConfinedSpace', {
		// 		is: 1,
		// 		then: Joi.string()
		// 			.max(255)
		// 			.message('Pressure Vessel or Plant document is required when selected')
		// 			.required(),
		// 		otherwise: Joi.string().max(255).allow(null, ''),
		// 	}),
		// stabilityDocument: Joi.string()
		// 	.max(255)
		// 	.allow(null, '')
		// 	.when('isStability', {
		// 		is: 1,
		// 		then: Joi.string()
		// 			.max(255)
		// 			.message('Pressure Vessel or Plant document is required when selected')
		// 			.required(),
		// 		otherwise: Joi.string().max(255).allow(null, ''),
		// 	}),

		// cv: Joi.string().max(255).message('CV cannot exceed 255 characters').optional(),
		educationalQualification: Joi.string().allow(null, ''),
		descriptionOfExamination: Joi.string().allow(null, ''),
		arrangementsForCalibrationAndMaintenance: Joi.string().allow(null, ''),
		competencyCertificateIsSought: Joi.string().allow(null, ''),

		otherStatute: Joi.number().valid(0, 1).allow(null),
		otherRelevantInformation: Joi.when('otherStatute', {
			is: 1,
			then: Joi.string().required(),
			otherwise: Joi.allow(null, ''),
		}),
	}),
};

export const applyCompetentOfficer = {
	body: Joi.object().keys({
		userId: Joi.string().max(30).required(),
	}),
};

export const getScheduledInspectionList = {
	query: Joi.object().keys({
		competentUserId: Joi.string().max(30).required(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().max(100).optional(),
	}),
};

export const scheduledMachineInspectionStatus = {
	body: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		machineName: Joi.string().max(70).required(),
		inspectionDate: Joi.date().required(),
		status: Joi.string().valid('Approved', 'Rejected').required(),

		competentReason: Joi.when('status', {
			is: 'Rejected',
			then: Joi.string().max(255).required(),
			otherwise: Joi.allow(null, '').optional(),
		}),
		competentUserId: Joi.string().max(30).required(),
	}),
};

export const inspectionFactory = {
	query: Joi.object().keys({
		competentUserId: Joi.string().max(30).required(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().max(100).optional(),
	}),
};

export const addNewMachine = {
	body: Joi.object().keys({
		competentUserId: Joi.string().max(30).required(),
		factoryUserId: Joi.string().max(30).required(),
		machineName: Joi.string().max(40).required(),
		quantity: Joi.number().required(),
		machineDescription: Joi.string().max(300).required(),
		serialNumbers: Joi.string().max(50).required(),
		dateOfFirstUse: Joi.date().required(),
		dateOfInstallation: Joi.date().optional(),
		nameOfManufacture: Joi.string().max(200).required(),
		addressOfManufacture: Joi.string().max(200).required(),
		dateOfConstruction: Joi.date().optional(),
		thicknessOfWall: Joi.string().max(30).optional(),
		identityFicationOfMachine: Joi.string().max(50).optional(),
		safeWorkingPressure: Joi.when('machineName', {
			is: 'Pressure Vessel or Plant',
			then: Joi.string().max(50).required(),
			otherwise: Joi.string().optional(),
		}),
	}),
};

export const getFactoryList = {
	query: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().max(100).optional(),
	}),
};

export const getApprovedMachineInspectionList = {
	query: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		machineNoPattern: Joi.string().max(50).required(),
		inspectionDate: Joi.date().required(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().max(100).optional(),
	}),
};

// Validation for getting competent officer profile
export const getCompetentOfficerProfile = {
	query: Joi.object().keys({
		userId: Joi.string().required(),
	}),
};

export const getCompetentApprovedMachineList = {
	query: Joi.object().keys({
		competentUserId: Joi.string().max(30).optional(),
		districtId: Joi.number().optional(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().max(100).optional(),
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

export const getIdentityByMachines = {
	query: Joi.object().keys({
		userId: Joi.string().required(),
		machineNoPattern: Joi.string().max(50).required(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().max(100).optional(),
	}),
};

export const upsertPressureVesselInspection = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().required(),
		competentUserId: Joi.string().required(),
		machineNo: Joi.string().required(),
		scheduleInspectionDate: Joi.date().required(),

		occupierName: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		occupierAddress: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		nameOfPressureVesselOrPlant: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		descriptionOfPressureVesselOrPlant: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		distinctiveNumberOfPressureVesselOrPlant: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		nameManufacturer: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		addressManufacturer: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		natureOfProcess: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		temperatureParameters: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		pressureParameters: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		dateOfConstruction: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		thicknessOfWalls: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		dateFirstTakenIntoUse: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		safeWorkingPressure: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),

		lastExternalExamination: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		lastInternalExamination: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		lastHydraulicExamination: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		lastUltrasonicExamination: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),

		externalExaminationFindings: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		internalExaminationFindings: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		hydraulicTestFindings: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		ultrasonicTestFindings: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),

		vesselCondition: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		pipingCondition: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		pressureGaugesCondition: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		safetyValveCondition: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		stopValveCondition: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		reducingValveCondition: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		additionalSafetyValveCondition: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		otherDevicesCondition: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),

		repairsRequired: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		repairPeriod: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		otherConditions: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		safeWorkingPressureAfterExamination: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		calculatedSafeWorkingPressure: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		reducedWorkingPressurePendingRepairs: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		otherPressureObservations: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),

		inspectedOn: Joi.date().required(),
	}),
};

export const upsertHoistLiftInspection = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().required(),
		competentUserId: Joi.string().required(),
		machineNo: Joi.string().required(),
		scheduleInspectionDate: Joi.date().required(),

		registrationNumber: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		licenceNumber: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		nicCodeNumber: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		occupierName: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		occupierAddress: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		typeOfHoistOrLift: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		dateOfConstruction: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		mechanicalConstructionAssessment: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		enclosureOfHoistway: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		landingGatesAndCageGates: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		interlockAndGates: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		otherGateFastenings: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		cageAndPlatformFittings: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		overRunningDevices: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		suspensionRopesOrChain: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		safetyGear: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		brakes: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		wormOrSpurGearing: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		otherElectricalEquipment: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		otherParts: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		inaccessibleParts: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		repairsRenewalsOrAlterations: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		maximumSafeWorkingLoad: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		otherParticulars: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),

		inspectedOn: Joi.date().required(),
	}),
};

export const upsertEquipmentInspection = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().required(),
		competentUserId: Joi.string().required(),
		machineNo: Joi.string().required(),
		scheduleInspectionDate: Joi.date().required(),

		occupierName: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		factoryAddress: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		distinguishingNumberOrMark: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		equipmentDescription: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		dateFirstUsed: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		examinationDate: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		examinationBy: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		certificateDate: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		certificateNumber: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		certificateIssuedBy: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		annealingDate: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		heatTreatmentBy: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		defectsFound: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		remedialSteps: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),

		inspectedOn: Joi.date().required(),
	}),
};
export const upsertDustFumeExtractionSystem = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().required(),
		competentUserId: Joi.string().required(),
		machineNo: Joi.string().required(),
		scheduleInspectionDate: Joi.date().required(),

		systemDescription: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		hoodSerialNumber: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		contaminantCaptured: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		captureVelocitiesDesignValue: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		captureVelocitiesActualValue: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		captureVelocitiesPoints: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		volumeExhaustedAtHood: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		hoodStaticPressure: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		pressureDropAtJoints: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		pressureDropAtOtherPoints: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		transportVelocityDustFume: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		transportVelocityPoints: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		airCleaningDeviceType: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		velocityAtInlet: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		staticPressureAtInlet: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		velocityAtOutlet: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		fanType: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		volumeHandled: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		staticPressures: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		pressureDropAtOutletOfFan: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		fanMotorType: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		speedAndHorsepower: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		defectsFound: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),

		inspectedOn: Joi.date().required(),
	}),
};

export const upsertOvenDriersInspection = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().required(),
		competentUserId: Joi.string().required(),
		machineNo: Joi.string().required(),
		scheduleInspectionDate: Joi.date().required(),

		occupierName: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		address: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		ovenName: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		ovenDistinctiveNumber: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		manufacturerNameAndAddress: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		ovenSize: Joi.string().when('isDraft', {
			is: 1,
			then: Joi.required(),
			otherwise: Joi.allow(null, ''),
		}),
		workingTemperature: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		physicalCondition: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		separateCircuitWithIsolatingSwitch: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		safetyVentilationWithFan: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		temperatureController: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		explosionVentDoor: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		interlockWithFan: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		remarks: Joi.string().allow(null, ''),
		lastExaminationDate: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),

		inspectedOn: Joi.date().required(),
	}),
};

export const upsertCentrifugeMachineInspection = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().max(30).required(),
		competentUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),

		registrationNumber: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		licenseNumber: Joi.string()
			.max(30)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		nicCodeNumber: Joi.string()
			.max(30)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		occupierName: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		address: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		machineNameDescription: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		manufacturerNameAndAddress: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		dateOfManufacture: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		sizeAndCapacity: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		conditionOfMachine: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		topCover: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		electricalInterlockSystem: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		mechanicalLockSystem: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		brakingManagement: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		mechanicalBrakeSystem: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		earthingArrangement: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		conditionOfGuardOverBeltDrive: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		basketSpeedOperatingSpeed: Joi.string()
			.max(30)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		lastExaminationDate: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		remarks: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		examinationDate: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),

		inspectedOn: Joi.date().required(),
	}),
};

export const upsertPowerPressInspection = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().max(30).required(),
		competentUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),

		registrationNumber: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		licenseNumber: Joi.string()
			.max(20)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		nicCodeNumber: Joi.string()
			.max(30)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		occupierName: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		address: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		powerPressIdentification: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		dateOfConstruction: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		dateFirstTakenIntoUse: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		guardsObservation: Joi.string()
			.max(100)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		infraRedPhotoCellSafetyDevice: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		mainDriveSafetyDevice: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		electricalSafetyDevice: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		lastExaminationDate: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		repairsRequired: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		repairPeriod: Joi.string()
			.max(30)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		otherConditions: Joi.string()
			.max(100)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		otherObservations: Joi.string()
			.max(100)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),

		inspectedOn: Joi.date().required(),
	}),
};

export const upsertThermicFluidHeater = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().max(30).required(),
		competentUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),

		registrationNumber: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		licenseNumber: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		nicCodeNumber: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		occupierName: Joi.string()
			.max(100)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		address: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		heaterIdentification: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		manufacturerNameAddress: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		natureOfProcess: Joi.string()
			.max(100)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		dateOfConstruction: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		dateFirstTakenIntoUse: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		coilSizeThickness: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		operatingPressure: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		lastPressureTestDate: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		pressureTestDetails: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		coilCondition: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		oilCondition: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		pressureGaugesCondition: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		temperatureGaugesCondition: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		stopValvesCondition: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		temperatureControl: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		differentialPressureSwitchControl: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		thermicFluidLevelControl: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		audioVideoAlarm: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		otherDevices: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),

		inspectedOn: Joi.date().required(),
	}),
};

export const upsertStabilityForm1A = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().max(30).required(),
		competentUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),

		factoryName: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		villageTownDistrict: Joi.string()
			.max(20)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		fullPostalAddress: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		occupierName: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		natureOfManufacturingProcess: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		numberOfFloors: Joi.number()
			.integer()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		certificateNumber: Joi.string()
			.max(30)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		jointDirectorLetterNumber: Joi.string()
			.max(30)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		jointDirectorLetterDate: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		inspectionDetails: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		structuralSoundness: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		stabilityAssessment: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		intendedUse: Joi.string()
			.max(100)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		inspectedOn: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
	}),
};

export const upsertWaterSealedGasHolderForm11A = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().max(30).required(),
		competentUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),

		occupierName: Joi.string()
			.max(200)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		factoryAddress: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		equipmentDescription: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		distinguishingNumber: Joi.string()
			.max(20)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		manufacturerDetails: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		yearOfManufacture: Joi.number()
			.integer()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		lastInspectionDate: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		inspectionBy: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		nextInspectionDate: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),

		hasPressureGauge: Joi.number()
			.valid(0, 1)
			.default(0)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(0, 1),
			}),
		hasSafetyValve: Joi.number()
			.valid(0, 1)
			.default(0)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(0, 1),
			}),
		hasThermometer: Joi.number()
			.valid(0, 1)
			.default(0)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(0, 1),
			}),
		hasWaterGauge: Joi.number()
			.valid(0, 1)
			.default(0)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(0, 1),
			}),

		equipmentCondition: Joi.string()
			.max(100)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		remarks: Joi.string().max(255).allow(null, ''),
		inspectedOn: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
	}),
};

export const upsertConfinedSpace = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().max(30).required(),
		competentUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),

		occupierName: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		factoryAddress: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		equipmentDescription: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		distinguishingNumber: Joi.string()
			.max(50)
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		manufacturerDetails: Joi.string()
			.allow(null, '')
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		yearOfManufacture: Joi.number()
			.integer()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		workingPressure: Joi.number()
			.precision(2)
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		safeWorkingPressure: Joi.number()
			.precision(2)
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		testPressure: Joi.number()
			.precision(2)
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		lastHydraulicTestDate: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		nextHydraulicTestDate: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		lastInternalInspectionDate: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
		nextInternalInspectionDate: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),

		remarks: Joi.string().allow(null, ''),
		inspectedOn: Joi.date()
			.allow(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),
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

export const renewCompetentOfficer = {
	body: Joi.object().keys({
		userId: Joi.string().max(30).required(),
	}),
};
