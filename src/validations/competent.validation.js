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

		factoryUserId: Joi.string().max(30).required().messages({
			'any.required': 'Factory User Id is required',
		}),

		machineName: Joi.string().max(40).required().messages({
			'any.required': 'Machine Name is required',
		}),

		quantity: Joi.number().required().messages({
			'any.required': 'Quantity is required',
			'number.base': 'Quantity must be a number',
		}),

		machineDescription: Joi.string().max(300).required().messages({
			'string.max': 'Machine Description must be at most 300 characters',
			'any.required': 'Machine Description is required',
		}),

		serialNumbers: Joi.string().max(50).required().messages({
			'string.max': 'Serial Numbers must be at most 50 characters',
			'any.required': 'Serial Numbers is required',
		}),

		dateOfFirstUse: Joi.date().required().messages({
			'any.required': 'Date of First Use is required',
			'date.base': 'Date of First Use must be a valid date',
		}),

		dateOfInstallation: Joi.date().optional().messages({
			'date.base': 'Date of Installation must be a valid date',
		}),

		nameOfManufacture: Joi.string().max(200).required().messages({
			'string.max': 'Name of Manufacture must be at most 200 characters',
			'any.required': 'Name of Manufacture is required',
		}),

		addressOfManufacture: Joi.string().max(200).required().messages({
			'string.max': 'Address of Manufacture must be at most 200 characters',
			'any.required': 'Address of Manufacture is required',
		}),

		dateOfConstruction: Joi.date().optional().messages({
			'date.base': 'Date of Construction must be a valid date',
		}),

		thicknessOfWall: Joi.string().max(30).optional().messages({
			'string.max': 'Thickness of Wall must be at most 30 characters',
		}),

		identityFicationOfMachine: Joi.string().max(50).optional().messages({
			'string.max': 'Identification of Machine must be at most 50 characters',
		}),

		safeWorkingPressure: Joi.when('machineName', {
			is: 'Pressure Vessel or Plant',
			then: Joi.string().max(50).required().messages({
				'string.max': 'Safe Working Pressure must be at most 50 characters',
				'any.required': 'Safe Working Pressure is required for Pressure Vessel',
			}),
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
		userId: Joi.string().required().messages({
			'any.required': 'User Id is required',
		}),

		organization: Joi.string().max(70).required().messages({
			'string.max': 'Organization must be at most 70 characters',
			'any.required': 'Organization is required',
		}),

		designation: Joi.string().max(40).required().messages({
			'string.max': 'Designation must be at most 40 characters',
			'any.required': 'Designation is required',
		}),

		startDate: Joi.date().messages({
			'date.base': 'Start Date must be a valid date',
		}),

		endDate: Joi.date().min(Joi.ref('startDate')).messages({
			'date.base': 'End Date must be a valid date',
			'date.min': 'You cannot enter an End Date earlier than the Start Date',
		}),

		keyResponsibilites: Joi.string().max(255).messages({
			'string.max': 'Key Responsibilities must be at most 255 characters',
		}),
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

		factoryUserId: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Factory User ID must be at most 30 characters.' }),

		competentUserId: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Competent User ID must be at most 30 characters.' }),

		machineNo: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Machine No must be at most 30 characters.' }),

		scheduleInspectionDate: Joi.date().required(),

		occupierName: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Occupier Name must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		occupierAddress: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Occupier Address must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		nameOfPressureVesselOrPlant: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Pressure Vessel Name must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		descriptionOfPressureVesselOrPlant: Joi.string()
			.max(500)
			.messages({ 'string.max': 'Description must be at most 500 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		distinctiveNumberOfPressureVesselOrPlant: Joi.string()
			.max(100)
			.messages({ 'string.max': 'Distinctive Number must be at most 100 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		nameManufacturer: Joi.string()
			.max(70)
			.messages({ 'string.max': 'Manufacturer Name must be at most 70 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		addressManufacturer: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Manufacturer Address must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		natureOfProcess: Joi.string()
			.max(60)
			.messages({ 'string.max': 'Nature of Process must be at most 60 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		temperatureParameters: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Temperature Parameters must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		pressureParameters: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Pressure Parameters must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		thicknessOfWalls: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Thickness must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		safeWorkingPressure: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Safe Working Pressure must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		externalExaminationFindings: Joi.string()
			.max(50)
			.messages({ 'string.max': 'External Findings must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		internalExaminationFindings: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Internal Findings must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		hydraulicTestFindings: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Hydraulic Findings must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		ultrasonicTestFindings: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Ultrasonic Findings must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		vesselCondition: Joi.string()
			.max(40)
			.messages({ 'string.max': 'Vessel Condition must be at most 40 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		pipingCondition: Joi.string()
			.max(40)
			.messages({ 'string.max': 'Piping Condition must be at most 40 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		pressureGaugesCondition: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Pressure Gauge Condition must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		safetyValveCondition: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Safety Valve Condition must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		stopValveCondition: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Stop Valve Condition must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		reducingValveCondition: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Reducing Valve Condition must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		additionalSafetyValveCondition: Joi.string()
			.max(255)
			.messages({
				'string.max': 'Additional Safety Valve Condition must be at most 255 characters.',
			})
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherDevicesCondition: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Other Devices Condition must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		repairsRequired: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Repairs Required must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		repairPeriod: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Repair Period must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherConditions: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Other Conditions must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		safeWorkingPressureAfterExamination: Joi.string()
			.max(30)
			.messages({
				'string.max': 'Safe Working Pressure After Examination must be at most 30 characters.',
			})
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		calculatedSafeWorkingPressure: Joi.string()
			.max(30)
			.messages({ 'string.max': 'Calculated Safe Working Pressure must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		reducedWorkingPressurePendingRepairs: Joi.string()
			.max(30)
			.messages({ 'string.max': 'Reduced Working Pressure must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherPressureObservations: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Other Pressure Observations must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		inspectedOn: Joi.date().required(),
	}),
};

export const upsertHoistLiftInspection = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().max(30).required().messages({
			'string.max': 'Factory User ID must be at most 30 characters.',
		}),
		competentUserId: Joi.string().max(30).required().messages({
			'string.max': 'Competent User ID must be at most 30 characters.',
		}),
		machineNo: Joi.string().max(30).required().messages({
			'string.max': 'Machine No must be at most 30 characters.',
		}),
		scheduleInspectionDate: Joi.date().required(),

		registrationNumber: Joi.string()
			.max(30)
			.messages({ 'string.max': 'Registration Number must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		licenceNumber: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Licence Number must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		nicCodeNumber: Joi.string()
			.max(20)
			.messages({ 'string.max': 'NIC Code Number must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		occupierName: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Occupier Name must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		occupierAddress: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Occupier Address must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		typeOfHoistOrLift: Joi.string()
			.max(40)
			.messages({ 'string.max': 'Type of Hoist or Lift must be at most 40 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		dateOfConstruction: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		mechanicalConstructionAssessment: Joi.string()
			.max(40)
			.messages({
				'string.max': 'Mechanical Construction Assessment must be at most 40 characters.',
			})
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		enclosureOfHoistway: Joi.string()
			.max(40)
			.messages({ 'string.max': 'Enclosure of Hoistway must be at most 40 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		landingGatesAndCageGates: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Landing Gates and Cage Gates must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		interlockAndGates: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Interlock and Gates must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherGateFastenings: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Other Gate Fastenings must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		cageAndPlatformFittings: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Cage and Platform Fittings must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		overRunningDevices: Joi.string()
			.max(30)
			.messages({ 'string.max': 'Over Running Devices must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		suspensionRopesOrChain: Joi.string()
			.max(40)
			.messages({ 'string.max': 'Suspension Ropes or Chain must be at most 40 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		safetyGear: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Safety Gear must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		brakes: Joi.string()
			.max(30)
			.messages({ 'string.max': 'Brakes must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		wormOrSpurGearing: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Worm or Spur Gearing must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherElectricalEquipment: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Other Electrical Equipment must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherParts: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Other Parts must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		inaccessibleParts: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Inaccessible Parts must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		repairsRenewalsOrAlterations: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Repairs Renewals or Alterations must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		maximumSafeWorkingLoad: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Maximum Safe Working Load must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherParticulars: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Other Particulars must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		inspectedOn: Joi.date().required(),
	}),
};

export const upsertEquipmentInspection = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Factory User ID must be at most 30 characters.' }),

		competentUserId: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Competent User ID must be at most 30 characters.' }),

		machineNo: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Machine No must be at most 30 characters.' }),

		scheduleInspectionDate: Joi.date().required(),

		occupierName: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Occupier Name must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		factoryAddress: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Factory Address must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		distinguishingNumberOrMark: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Distinguishing Number must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		equipmentDescription: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Equipment Description must be at most 255 characters.' })
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
			.messages({ 'string.max': 'Examination By must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		certificateDate: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		certificateNumber: Joi.string()
			.max(30)
			.messages({ 'string.max': 'Certificate Number must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		certificateIssuedBy: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Certificate Issued By must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		annealingDate: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		heatTreatmentBy: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Heat Treatment By must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		defectsFound: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Defects Found must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		remedialSteps: Joi.string()
			.max(30)
			.messages({ 'string.max': 'Remedial Steps must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		inspectedOn: Joi.date().required(),
	}),
};

export const upsertDustFumeExtractionSystem = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().max(30).required().messages({
			'string.max': 'Factory User ID must be at most 30 characters.',
		}),
		competentUserId: Joi.string().max(30).required().messages({
			'string.max': 'Competent User ID must be at most 30 characters.',
		}),
		machineNo: Joi.string().max(30).required().messages({
			'string.max': 'Machine No must be at most 30 characters.',
		}),
		scheduleInspectionDate: Joi.date().required(),

		systemDescription: Joi.string()
			.max(255)
			.messages({ 'string.max': 'System Description must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		hoodSerialNumber: Joi.string()
			.max(30)
			.messages({ 'string.max': 'Hood Serial Number must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		contaminantCaptured: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Contaminant Captured must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		captureVelocitiesDesignValue: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Capture Velocities Design Value must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		captureVelocitiesActualValue: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Capture Velocities Actual Value must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		captureVelocitiesPoints: Joi.string()
			.max(15)
			.messages({ 'string.max': 'Capture Velocities Points must be at most 15 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		volumeExhaustedAtHood: Joi.string()
			.max(30)
			.messages({ 'string.max': 'Volume Exhausted At Hood must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		hoodStaticPressure: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Hood Static Pressure must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		pressureDropAtJoints: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Pressure Drop At Joints must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		pressureDropAtOtherPoints: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Pressure Drop At Other Points must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		transportVelocityDustFume: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Transport Velocity Dust/Fume must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		transportVelocityPoints: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Transport Velocity Points must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		airCleaningDeviceType: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Air Cleaning Device Type must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		velocityAtInlet: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Velocity At Inlet must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		staticPressureAtInlet: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Static Pressure At Inlet must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		velocityAtOutlet: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Velocity At Outlet must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		fanType: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Fan Type must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		volumeHandled: Joi.string()
			.max(40)
			.messages({ 'string.max': 'Volume Handled must be at most 40 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		staticPressures: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Static Pressures must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		pressureDropAtOutletOfFan: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Pressure Drop At Outlet Of Fan must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		fanMotorType: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Fan Motor Type must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		speedAndHorsepower: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Speed and Horsepower must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		defectsFound: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Defects Found must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		inspectedOn: Joi.date().required(),
	}),
};

export const upsertOvenDriersInspection = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Factory User ID must be at most 30 characters.' }),

		competentUserId: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Competent User ID must be at most 30 characters.' }),

		machineNo: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Machine No must be at most 30 characters.' }),

		scheduleInspectionDate: Joi.date().required(),

		occupierName: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Occupier Name must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
			}),

		address: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Address must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
			}),

		ovenName: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Oven Name must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
			}),

		ovenDistinctiveNumber: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Oven Distinctive Number must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
			}),

		manufacturerNameAndAddress: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Manufacturer Name and Address must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
			}),

		ovenSize: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Oven Size must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
			}),

		workingTemperature: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Working Temperature must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
			}),

		physicalCondition: Joi.string()
			.max(30)
			.messages({ 'string.max': 'Physical Condition must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
			}),

		separateCircuitWithIsolatingSwitch: Joi.string()
			.max(50)
			.messages({
				'string.max': 'Separate Circuit with Isolating Switch must be at most 50 characters.',
			})
			.empty('')
			.default(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
			}),

		safetyVentilationWithFan: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Safety Ventilation With Fan must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
			}),

		temperatureController: Joi.string()
			.max(30)
			.messages({ 'string.max': 'Temperature Controller must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
			}),

		explosionVentDoor: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Explosion Vent Door must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
			}),

		interlockWithFan: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Interlock With Fan must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', {
				is: 1,
				then: Joi.required(),
			}),

		remarks: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Remarks must be at most 50 characters.' })
			.empty('')
			.default(null),

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

		factoryUserId: Joi.string().max(30).required().messages({
			'string.max': 'Factory User ID must be at most 30 characters.',
		}),
		competentUserId: Joi.string().max(30).required().messages({
			'string.max': 'Competent User ID must be at most 30 characters.',
		}),
		machineNo: Joi.string().max(30).required().messages({
			'string.max': 'Machine No must be at most 30 characters.',
		}),
		scheduleInspectionDate: Joi.date().required(),

		registrationNumber: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Registration Number must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		licenseNumber: Joi.string()
			.max(30)
			.messages({ 'string.max': 'License Number must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		nicCodeNumber: Joi.string()
			.max(30)
			.messages({ 'string.max': 'NIC Code Number must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		occupierName: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Occupier Name must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		address: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Address must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		machineNameDescription: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Machine Name Description must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		manufacturerNameAndAddress: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Manufacturer Name and Address must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		dateOfManufacture: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		sizeAndCapacity: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Size and Capacity must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		conditionOfMachine: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Condition of Machine must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		topCover: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Top Cover must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		electricalInterlockSystem: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Electrical Interlock System must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		mechanicalLockSystem: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Mechanical Lock System must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		brakingManagement: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Braking Management must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		mechanicalBrakeSystem: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Mechanical Brake System must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		earthingArrangement: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Earthing Arrangement must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		conditionOfGuardOverBeltDrive: Joi.string()
			.max(50)
			.messages({
				'string.max': 'Condition of Guard Over Belt Drive must be at most 50 characters.',
			})
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		basketSpeedOperatingSpeed: Joi.string()
			.max(30)
			.messages({ 'string.max': 'Basket Speed Operating Speed must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		lastExaminationDate: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		remarks: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Remarks must be at most 50 characters.' })
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

		factoryUserId: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Factory User ID must be at most 30 characters.' }),

		competentUserId: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Competent User ID must be at most 30 characters.' }),

		machineNo: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Machine No must be at most 30 characters.' }),

		scheduleInspectionDate: Joi.date().required(),

		registrationNumber: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Registration Number must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		licenseNumber: Joi.string()
			.max(20)
			.messages({ 'string.max': 'License Number must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		nicCodeNumber: Joi.string()
			.max(30)
			.messages({ 'string.max': 'NIC Code Number must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		occupierName: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Occupier Name must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		address: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Address must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		powerPressIdentification: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Power Press Identification must be at most 50 characters.' })
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
			.messages({ 'string.max': 'Guards Observation must be at most 100 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		infraRedPhotoCellSafetyDevice: Joi.string()
			.max(50)
			.messages({
				'string.max': 'Infra Red Photo Cell Safety Device must be at most 50 characters.',
			})
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		mainDriveSafetyDevice: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Main Drive Safety Device must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		electricalSafetyDevice: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Electrical Safety Device must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		lastExaminationDate: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		repairsRequired: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Repairs Required must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		repairPeriod: Joi.string()
			.max(30)
			.messages({ 'string.max': 'Repair Period must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherConditions: Joi.string()
			.max(100)
			.messages({ 'string.max': 'Other Conditions must be at most 100 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherObservations: Joi.string()
			.max(100)
			.messages({ 'string.max': 'Other Observations must be at most 100 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		inspectedOn: Joi.date().required(),
	}),
};

export const upsertThermicFluidHeater = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string().max(30).required().messages({
			'string.max': 'Factory User ID must be at most 30 characters.',
		}),
		competentUserId: Joi.string().max(30).required().messages({
			'string.max': 'Competent User ID must be at most 30 characters.',
		}),
		machineNo: Joi.string().max(30).required().messages({
			'string.max': 'Machine No must be at most 30 characters.',
		}),
		scheduleInspectionDate: Joi.date().required(),

		registrationNumber: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Registration Number must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		licenseNumber: Joi.string()
			.max(50)
			.messages({ 'string.max': 'License Number must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		nicCodeNumber: Joi.string()
			.max(50)
			.messages({ 'string.max': 'NIC Code Number must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		occupierName: Joi.string()
			.max(100)
			.messages({ 'string.max': 'Occupier Name must be at most 100 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		address: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Address must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		heaterIdentification: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Heater Identification must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		manufacturerNameAddress: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Manufacturer Name Address must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		natureOfProcess: Joi.string()
			.max(100)
			.messages({ 'string.max': 'Nature of Process must be at most 100 characters.' })
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
			.messages({ 'string.max': 'Coil Size & Thickness must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		operatingPressure: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Operating Pressure must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		lastPressureTestDate: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		pressureTestDetails: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Pressure Test Details must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		coilCondition: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Coil Condition must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		oilCondition: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Oil Condition must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		pressureGaugesCondition: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Pressure Gauges Condition must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		temperatureGaugesCondition: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Temperature Gauges Condition must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		stopValvesCondition: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Stop Valves Condition must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		temperatureControl: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Temperature Control must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		differentialPressureSwitchControl: Joi.string()
			.max(50)
			.messages({
				'string.max': 'Differential Pressure Switch Control must be at most 50 characters.',
			})
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		thermicFluidLevelControl: Joi.string()
			.max(50)
			.messages({
				'string.max': 'Thermic Fluid Level Control must be at most 50 characters.',
			})
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		audioVideoAlarm: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Audio Video Alarm must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		otherDevices: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Other Devices must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		inspectedOn: Joi.date().required(),
	}),
};

export const upsertStabilityForm1A = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Factory User ID must be at most 30 characters.' }),

		competentUserId: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Competent User ID must be at most 30 characters.' }),

		machineNo: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Machine No must be at most 30 characters.' }),

		scheduleInspectionDate: Joi.date().required(),

		factoryName: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Factory Name must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		villageTownDistrict: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Village/Town/District must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		fullPostalAddress: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Full Postal Address must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		occupierName: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Occupier Name must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		natureOfManufacturingProcess: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Nature of Manufacturing Process must be at most 255 characters.' })
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
			.messages({ 'string.max': 'Certificate Number must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		jointDirectorLetterNumber: Joi.string()
			.max(30)
			.messages({ 'string.max': 'Joint Director Letter Number must be at most 30 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		jointDirectorLetterDate: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		inspectionDetails: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Inspection Details must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		structuralSoundness: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Structural Soundness must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		stabilityAssessment: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Stability Assessment must be at most 50 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		intendedUse: Joi.string()
			.max(100)
			.messages({ 'string.max': 'Intended Use must be at most 100 characters.' })
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

		factoryUserId: Joi.string().max(30).required().messages({
			'string.max': 'Factory User ID must be at most 30 characters.',
		}),
		competentUserId: Joi.string().max(30).required().messages({
			'string.max': 'Competent User ID must be at most 30 characters.',
		}),
		machineNo: Joi.string().max(30).required().messages({
			'string.max': 'Machine No must be at most 30 characters.',
		}),
		scheduleInspectionDate: Joi.date().required(),

		occupierName: Joi.string()
			.max(200)
			.messages({ 'string.max': 'Occupier Name must be at most 200 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		factoryAddress: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Factory Address must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		equipmentDescription: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Equipment Description must be at most 255 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		distinguishingNumber: Joi.string()
			.max(20)
			.messages({ 'string.max': 'Distinguishing Number must be at most 20 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		manufacturerDetails: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Manufacturer Details must be at most 255 characters.' })
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
			.messages({ 'string.max': 'Inspection By must be at most 50 characters.' })
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
			.messages({ 'string.max': 'Equipment Condition must be at most 100 characters.' })
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),

		remarks: Joi.string()
			.max(255)
			.messages({ 'string.max': 'Remarks must be at most 255 characters.' })
			.empty('')
			.default(null),

		inspectedOn: Joi.date()
			.empty('')
			.default(null)
			.when('isDraft', { is: 1, then: Joi.required() }),
	}),
};

export const upsertConfinedSpace = {
	body: Joi.object({
		isDraft: Joi.number().valid(0, 1).required(),

		factoryUserId: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Factory User ID must be at most 30 characters.' }),

		competentUserId: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Competent User ID must be at most 30 characters.' }),

		machineNo: Joi.string()
			.max(30)
			.required()
			.messages({ 'string.max': 'Machine No must be at most 30 characters.' }),

		scheduleInspectionDate: Joi.date().required(),

		occupierName: Joi.string()
			.max(50)
			.messages({ 'string.max': 'Occupier Name must be at most 50 characters.' })
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
			.messages({ 'string.max': 'Distinguishing Number must be at most 50 characters.' })
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

export const competentLogBook = {
	query: Joi.object().keys({
		competentUserId: Joi.string().max(30).required().messages({
			'any.required': 'Competent User Id is required',
			'string.max': 'competentUserId must be at most 30 characters',
		}),

		startDate: Joi.date().required().messages({
			'date.base': 'Start Date must be a valid date',
			'any.required': 'Start Date is required',
		}),

		endDate: Joi.date().required().messages({
			'date.base': 'End Date must be a valid date',
			'any.required': 'End Date is required',
		}),
	}),
};
