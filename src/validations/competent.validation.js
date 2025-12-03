import Joi from 'joi';

export const updateProfile = {
	body: Joi.object().keys({
		userId: Joi.string().max(30).required(),

		mobileNo: Joi.string().max(15).empty('').default(null).optional(),

		email: Joi.string().email().max(100).empty('').default(null).optional(),

		addressLine1: Joi.string().max(50).empty('').default(null).optional(),

		addressLine2: Joi.string().max(50).empty('').default(null).optional(),

		addressLine3: Joi.string().max(50).empty('').default(null).optional(),

		experienceYear: Joi.number().integer().greater(3).empty('').default(null).optional().messages({
			'number.greater': 'Experience must be more than 3 years',
		}),

		isPressureVesselOrPlant: Joi.number().valid(0, 1).empty('').default(null).optional(),

		isHoistAndLifts: Joi.number().valid(0, 1).empty('').default(null).optional(),

		isDustFumeExtractionSystem: Joi.number().valid(0, 1).empty('').default(null).optional(),

		isPowerPressSafetyDevices: Joi.number().valid(0, 1).empty('').default(null).optional(),

		isWaterSealedGasHolder: Joi.number().valid(0, 1).empty('').default(null).optional(),

		isLiftingMachinesChainsRopes: Joi.number().valid(0, 1).empty('').default(null).optional(),

		isOvenAndDriers: Joi.number().valid(0, 1).empty('').default(null).optional(),

		isCentrifugeMachine: Joi.number().valid(0, 1).empty('').default(null).optional(),

		isThermicFluidHeater: Joi.number().valid(0, 1).empty('').default(null).optional(),

		isConfinedSpace: Joi.number().valid(0, 1).empty('').default(null).optional(),

		isStability: Joi.number().valid(0, 1).empty('').default(null).optional(),

		hoistAndLiftsDocument: Joi.when('isHoistAndLifts', {
			is: 1,
			then: Joi.string().required().messages({
				'any.required': 'Hoist & Lifts document is required when isHoistAndLifts is select',
				'string.base': 'Hoist & Lifts document is required when isHoistAndLifts is select',
			}),
			otherwise: Joi.string().allow(null).empty('').default(null).optional(),
		}),

		pressureVesselOrPlantDocument: Joi.when('isPressureVesselOrPlant', {
			is: 1,
			then: Joi.string().required().messages({
				'any.required':
					'Pressure Vessel document is required when isPressureVesselOrPlant is select',
				'string.base':
					'Pressure Vessel document is required when isPressureVesselOrPlant is select',
			}),
			otherwise: Joi.string().allow(null).empty('').default(null).optional(),
		}),

		dustFumeExtractionSystemDocument: Joi.when('isDustFumeExtractionSystem', {
			is: 1,
			then: Joi.string().required().messages({
				'any.required':
					'Dust Fume Extraction document is required when isDustFumeExtractionSystem is select',
				'string.base':
					'Dust Fume Extraction document is required when isDustFumeExtractionSystem is select',
			}),
			otherwise: Joi.string().allow(null).empty('').default(null).optional(),
		}),

		powerPressSafetyDevicesDocument: Joi.when('isPowerPressSafetyDevices', {
			is: 1,
			then: Joi.string().required().messages({
				'any.required':
					'Power Press Safety document is required when isPowerPressSafetyDevices is select',
				'string.base':
					'Power Press Safety document is required when isPowerPressSafetyDevices is select',
			}),
			otherwise: Joi.string().allow(null).empty('').default(null).optional(),
		}),

		waterSealedGasHolderDocument: Joi.when('isWaterSealedGasHolder', {
			is: 1,
			then: Joi.string().required().messages({
				'any.required':
					'Water Sealed Gas Holder document is required when isWaterSealedGasHolder is select',
				'string.base':
					'Water Sealed Gas Holder document is required when isWaterSealedGasHolder is select',
			}),
			otherwise: Joi.string().allow(null).empty('').default(null).optional(),
		}),

		liftingMachinesChainsRopesDocument: Joi.when('isLiftingMachinesChainsRopes', {
			is: 1,
			then: Joi.string().required().messages({
				'any.required':
					'Lifting Machine document is required when isLiftingMachinesChainsRopes is select',
				'string.base':
					'Lifting Machine document is required when isLiftingMachinesChainsRopes is select',
			}),
			otherwise: Joi.string().allow(null).empty('').default(null).optional(),
		}),

		ovenAndDriersDocument: Joi.when('isOvenAndDriers', {
			is: 1,
			then: Joi.string().required().messages({
				'any.required': 'Oven & Driers document is required when isOvenAndDriers is select',
				'string.base': 'Oven & Driers document is required when isOvenAndDriers is select',
			}),
			otherwise: Joi.string().allow(null).empty('').default(null).optional(),
		}),

		centrifugeMachineDocument: Joi.when('isCentrifugeMachine', {
			is: 1,
			then: Joi.string().required().messages({
				'any.required':
					'Centrifuge Machine document is required when isCentrifugeMachine is select',
				'string.base': 'Centrifuge Machine document is required when isCentrifugeMachine is select',
			}),
			otherwise: Joi.string().allow(null).empty('').default(null).optional(),
		}),

		thermicFluidHeaterDocument: Joi.when('isThermicFluidHeater', {
			is: 1,
			then: Joi.string().required().messages({
				'any.required':
					'Thermic Fluid Heater document is required when isThermicFluidHeater is select',
				'string.base':
					'Thermic Fluid Heater document is required when isThermicFluidHeater is select',
			}),
			otherwise: Joi.string().allow(null).empty('').default(null).optional(),
		}),

		confinedSpaceDocument: Joi.when('isConfinedSpace', {
			is: 1,
			then: Joi.string().required().messages({
				'any.required': 'Confined Space document is required when isConfinedSpace is select',
				'string.base': 'Confined Space document is required when isConfinedSpace is select',
			}),
			otherwise: Joi.string().allow(null).empty('').default(null).optional(),
		}),

		stabilityDocument: Joi.when('isStability', {
			is: 1,
			then: Joi.string().required().messages({
				'any.required': 'Stability document is required when isStability is select',
				'string.base': 'Stability document is required when isStability is select',
			}),
			otherwise: Joi.string().allow(null).empty('').default(null).optional(),
		}),

		educationalQualification: Joi.string().max(200).empty('').default(null).optional(),

		descriptionOfExamination: Joi.string().max(500).empty('').default(null).optional(),

		arrangementsForCalibrationAndMaintenance: Joi.string()
			.max(500)
			.empty('')
			.default(null)
			.optional(),

		competencyCertificateIsSought: Joi.string().max(200).empty('').default(null).optional(),

		otherStatute: Joi.number().valid(0, 1).empty('').default(null).optional(),

		otherRelevantInformation: Joi.when('otherStatute', {
			is: 1,
			then: Joi.string().max(500).required().messages({
				'any.required': 'Other Relevant Information is required when Other Statute is 1',
			}),
			otherwise: Joi.string().empty('').default(null).optional(),
		}),
	}),
};

export const applyCompetentOfficer = {
	body: Joi.object().keys({
		userId: Joi.string().max(30).required(),
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

export const searchFactory = {
	query: Joi.object().keys({
		userId: Joi.string().max(30).required(),
	}),
};

export const factoryMachineInspection = {
	body: Joi.object().keys({
		factoryUserId: Joi.string().max(30).required(),
		machineName: Joi.string().max(70).required(),
		inspectionCount: Joi.number().integer().min(1).required(),
		inspectionDate: Joi.date().required(),
		competentUserId: Joi.string().max(30).required(),
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
		machineNoPattern: Joi.string().max(50).optional(),
		page: Joi.number().required(),
		limit: Joi.number().required(),
		search: Joi.string().max(100).optional(),
	}),
};

export const upsertPressureVesselInspection = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().max(30).required(),

		competentUserId: Joi.string().max(30).required(),

		machineNo: Joi.string().max(30).required(),

		scheduleInspectionDate: Joi.date().required(),

		occupierName: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Occupier Name must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		occupierAddress: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		nameOfPressureVesselOrPlant: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		descriptionOfPressureVesselOrPlant: Joi.string()
			.max(500)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		distinctiveNumberOfPressureVesselOrPlant: Joi.string()
			.max(100)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		nameManufacturer: Joi.string()
			.max(70)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		addressManufacturer: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		natureOfProcess: Joi.string()
			.max(60)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		temperatureParameters: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		pressureParameters: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		dateOfConstruction: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		thicknessOfWalls: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		dateFirstTakenIntoUse: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		safeWorkingPressure: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		lastExternalExamination: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		lastInternalExamination: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		lastHydraulicExamination: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		lastUltrasonicExamination: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		externalExaminationFindings: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		internalExaminationFindings: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		hydraulicTestFindings: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		ultrasonicTestFindings: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		vesselCondition: Joi.string()
			.max(40)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		pipingCondition: Joi.string()
			.max(40)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		pressureGaugesCondition: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		safetyValveCondition: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		stopValveCondition: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		reducingValveCondition: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		additionalSafetyValveCondition: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherDevicesCondition: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		repairsRequired: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		repairPeriod: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherConditions: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		safeWorkingPressureAfterExamination: Joi.string()
			.max(30)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		calculatedSafeWorkingPressure: Joi.string()
			.max(30)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		reducedWorkingPressurePendingRepairs: Joi.string()
			.max(30)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherPressureObservations: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		inspectedOn: Joi.date().required(),
	}),
};

export const upsertHoistLiftInspection = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().max(30).required(),
		competentUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),

		registrationNumber: Joi.string()
			.max(30)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		licenceNumber: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		nicCodeNumber: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		occupierName: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		occupierAddress: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		typeOfHoistOrLift: Joi.string()
			.max(40)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		dateOfConstruction: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		mechanicalConstructionAssessment: Joi.string()
			.max(40)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		enclosureOfHoistway: Joi.string()
			.max(40)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		landingGatesAndCageGates: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		interlockAndGates: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherGateFastenings: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		cageAndPlatformFittings: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		overRunningDevices: Joi.string()
			.max(30)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		suspensionRopesOrChain: Joi.string()
			.max(40)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		safetyGear: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		brakes: Joi.string()
			.max(30)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		wormOrSpurGearing: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherElectricalEquipment: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherParts: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		inaccessibleParts: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		repairsRenewalsOrAlterations: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		maximumSafeWorkingLoad: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherParticulars: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		inspectedOn: Joi.date().required(),
	}),
};

export const upsertEquipmentInspection = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().max(30).required(),
		competentUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),

		occupierName: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		factoryAddress: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		distinguishingNumberOrMark: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		equipmentDescription: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		dateFirstUsed: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		examinationDate: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		examinationBy: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		certificateDate: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		certificateNumber: Joi.string()
			.max(30)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		certificateIssuedBy: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		annealingDate: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		heatTreatmentBy: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		defectsFound: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		remedialSteps: Joi.string()
			.max(30)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		inspectedOn: Joi.date().required(),
	}),
};

export const upsertDustFumeExtractionSystem = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().max(30).required(),
		competentUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),

		systemDescription: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		hoodSerialNumber: Joi.string()
			.max(30)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		contaminantCaptured: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		captureVelocitiesDesignValue: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		captureVelocitiesActualValue: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		captureVelocitiesPoints: Joi.string()
			.max(15)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		volumeExhaustedAtHood: Joi.string()
			.max(30)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		hoodStaticPressure: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		pressureDropAtJoints: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		pressureDropAtOtherPoints: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		transportVelocityDustFume: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		transportVelocityPoints: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		airCleaningDeviceType: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		velocityAtInlet: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		staticPressureAtInlet: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		velocityAtOutlet: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		fanType: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		volumeHandled: Joi.string()
			.max(40)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		staticPressures: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		pressureDropAtOutletOfFan: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		fanMotorType: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		speedAndHorsepower: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		defectsFound: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		inspectedOn: Joi.date().required(),
	}),
};

export const upsertOvenDriersInspection = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().max(30).required(),
		competentUserId: Joi.string().max(30).required(),
		machineNo: Joi.string().max(30).required(),
		scheduleInspectionDate: Joi.date().required(),

		occupierName: Joi.string().max(50).empty('').default(null).when('isDraft', {
			is: 1,
			then: Joi.required(),
		}),

		address: Joi.string().max(255).empty('').default(null).when('isDraft', {
			is: 1,
			then: Joi.required(),
		}),

		ovenName: Joi.string().max(50).empty('').default(null).when('isDraft', {
			is: 1,
			then: Joi.required(),
		}),

		ovenDistinctiveNumber: Joi.string().max(20).empty('').default(null).when('isDraft', {
			is: 1,
			then: Joi.required(),
		}),

		manufacturerNameAndAddress: Joi.string().max(255).empty('').default(null).when('isDraft', {
			is: 1,
			then: Joi.required(),
		}),

		ovenSize: Joi.string().max(20).empty('').default(null).when('isDraft', {
			is: 1,
			then: Joi.required(),
		}),

		workingTemperature: Joi.string().max(20).empty('').default(null).when('isDraft', {
			is: 1,
			then: Joi.required(),
		}),

		physicalCondition: Joi.string().max(30).empty('').default(null).when('isDraft', {
			is: 1,
			then: Joi.required(),
		}),

		separateCircuitWithIsolatingSwitch: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
			}),

		safetyVentilationWithFan: Joi.string().max(50).empty('').default(null).when('isDraft', {
			is: 1,
			then: Joi.required(),
		}),

		temperatureController: Joi.string().max(30).empty('').default(null).when('isDraft', {
			is: 1,
			then: Joi.required(),
		}),

		explosionVentDoor: Joi.string().max(50).empty('').default(null).when('isDraft', {
			is: 1,
			then: Joi.required(),
		}),

		interlockWithFan: Joi.string().max(50).empty('').default(null).when('isDraft', {
			is: 1,
			then: Joi.required(),
		}),

		remarks: Joi.string().max(50).empty('').default(null),

		lastExaminationDate: Joi.date().empty('').default(null).when('isDraft', {
			is: 1,
			then: Joi.required(),
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
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		licenseNumber: Joi.string()
			.max(30)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		nicCodeNumber: Joi.string()
			.max(30)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		occupierName: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		address: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		machineNameDescription: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		manufacturerNameAndAddress: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		dateOfManufacture: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		sizeAndCapacity: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		conditionOfMachine: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		topCover: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		electricalInterlockSystem: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		mechanicalLockSystem: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		brakingManagement: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		mechanicalBrakeSystem: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		earthingArrangement: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		conditionOfGuardOverBeltDrive: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		basketSpeedOperatingSpeed: Joi.string()
			.max(30)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		lastExaminationDate: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		remarks: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		examinationDate: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

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
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		licenseNumber: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		nicCodeNumber: Joi.string()
			.max(30)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		occupierName: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		address: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		powerPressIdentification: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		dateOfConstruction: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		dateFirstTakenIntoUse: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		guardsObservation: Joi.string()
			.max(100)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		infraRedPhotoCellSafetyDevice: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		mainDriveSafetyDevice: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		electricalSafetyDevice: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		lastExaminationDate: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		repairsRequired: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		repairPeriod: Joi.string()
			.max(30)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherConditions: Joi.string()
			.max(100)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherObservations: Joi.string()
			.max(100)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

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
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		licenseNumber: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		nicCodeNumber: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		occupierName: Joi.string()
			.max(100)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		address: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		heaterIdentification: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		manufacturerNameAddress: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		natureOfProcess: Joi.string()
			.max(100)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		dateOfConstruction: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		dateFirstTakenIntoUse: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		coilSizeThickness: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		operatingPressure: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		lastPressureTestDate: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		pressureTestDetails: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		coilCondition: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		oilCondition: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		pressureGaugesCondition: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		temperatureGaugesCondition: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		stopValvesCondition: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		temperatureControl: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		differentialPressureSwitchControl: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		thermicFluidLevelControl: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		audioVideoAlarm: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherDevices: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

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
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		villageTownDistrict: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		fullPostalAddress: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		occupierName: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		natureOfManufacturingProcess: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		numberOfFloors: Joi.number()
			.integer()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		certificateNumber: Joi.string()
			.max(30)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		jointDirectorLetterNumber: Joi.string()
			.max(30)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		jointDirectorLetterDate: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		inspectionDetails: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		structuralSoundness: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		stabilityAssessment: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		intendedUse: Joi.string()
			.max(100)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		inspectedOn: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),
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
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		factoryAddress: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		equipmentDescription: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		distinguishingNumber: Joi.string()
			.max(20)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		manufacturerDetails: Joi.string()
			.max(255)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		yearOfManufacture: Joi.number()
			.integer()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		lastInspectionDate: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		inspectionBy: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		nextInspectionDate: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		hasPressureGauge: Joi.number()
			.valid(0, 1)
			.default(0)
			.when('isDraft', { is: 1, then: Joi.required() }),

		hasSafetyValve: Joi.number()
			.valid(0, 1)
			.default(0)
			.when('isDraft', { is: 1, then: Joi.required() }),

		hasThermometer: Joi.number()
			.valid(0, 1)
			.default(0)
			.when('isDraft', { is: 1, then: Joi.required() }),

		hasWaterGauge: Joi.number()
			.valid(0, 1)
			.default(0)
			.when('isDraft', { is: 1, then: Joi.required() }),

		equipmentCondition: Joi.string()
			.max(100)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		remarks: Joi.string().max(255).empty('').default(null),

		inspectedOn: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),
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
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		factoryAddress: Joi.string()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		equipmentDescription: Joi.string()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		distinguishingNumber: Joi.string()
			.max(50)
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		manufacturerDetails: Joi.string()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		yearOfManufacture: Joi.number()
			.integer()
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		workingPressure: Joi.number()
			.precision(2)
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		safeWorkingPressure: Joi.number()
			.precision(2)
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		testPressure: Joi.number()
			.precision(2)
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		lastHydraulicTestDate: Joi.date()
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		nextHydraulicTestDate: Joi.date()
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		lastInternalInspectionDate: Joi.date()
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		nextInternalInspectionDate: Joi.date()
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		safetyValveDetails: Joi.string()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),
		safetyValveTestingDetails: Joi.string()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),
		pressureGaugeDetails: Joi.string()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),
		pressureGaugeTestingDetails: Joi.string()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),
		waterLevelIndicatorDetails: Joi.string()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),
		waterLevelIndicatorTestingDetails: Joi.string()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),
		fusiblePlugDetails: Joi.string()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),
		fusiblePlugTestingDetails: Joi.string()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),
		feedPumpDetails: Joi.string()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),
		feedPumpTestingDetails: Joi.string()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),
		blowDownCockDetails: Joi.string()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),
		blowDownCockTestingDetails: Joi.string()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		mountingsAndFittingsCondition: Joi.string()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),
		generalCondition: Joi.string()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		remarks: Joi.string().empty('').default(null),

		inspectedOn: Joi.date().default(null).when('isDraft', { is: 1, then: Joi.required() }),
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
