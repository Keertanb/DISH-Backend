import Joi from 'joi';

export const factoryOwnerRegistration = {
	body: Joi.object().keys({
		factoryName: Joi.string()
			.pattern(/^(?!\s*$)[a-zA-Z. ]+$/)
			.message('Invalid name format')
			.min(2)
			.message('Factory name must be at least 2 characters')
			.max(200)
			.message('Factory name cannot exceed 200 characters')
			.allow('', null)
			.required(),
		managerName: Joi.string()
			.pattern(/^(?!\s*$)[a-zA-Z. ]+$/)
			.message('Invalid name format')
			.min(3)
			.message('Manager name must be at least 5 characters')
			.max(150)
			.message('Manager name cannot exceed 150 characters')
			.allow('', null)
			.required(),
		email: Joi.string().email().trim().required(),
		mobile: Joi.string()
			.trim()
			.allow('0')
			.pattern(/^[6-9][0-9]{9}$/)
			.message('Invalid mobile number')
			.required()
			.allow('', null),
		district: Joi.number().integer().required(),
		block: Joi.number().integer().required(),
		factoryLicenseNumber: Joi.string()
			.trim()
			.min(5)
			.message('Factory License Number must be at least 5 characters')
			.max(50)
			.message('Factory License Number must be at least 50 characters')
			.required(),
		yearOfEstablishment: Joi.number().integer().min(1800).allow(null),
		industryType: Joi.number().integer().required(),
		numberOfEmployees: Joi.number().integer().min(1).allow(null),
		addressLine1: Joi.string()
			.uppercase()
			.pattern(/^[A-Za-z0-9\s\-\\.]+$/)
			.message('Only English characters, numbers, spaces, hyphens and dots are allowed')
			.max(50)
			.message('Area cannot exceed 50 characters')
			.required(),
		addressLine2: Joi.string()
			.uppercase()
			.pattern(/^[A-Za-z0-9\s\-\\.]+$/)
			.message('Only English characters, numbers, spaces, hyphens and dots are allowed')
			.max(50)
			.message('Area cannot exceed 50 characters')
			.allow(null, ''),
		addressLine3: Joi.string()
			.uppercase()
			.pattern(/^[A-Za-z0-9\s\-\\.]+$/)
			.message('Only English characters, numbers, spaces, hyphens and dots are allowed')
			.max(50)
			.message('Area cannot exceed 50 characters')
			.allow(null, ''),
		pincode: Joi.string()
			.trim()
			.pattern(/^[0-9]{6}$/)
			.message('Pincode must be exactly 6 digits')
			.allow('', null),
		machineName: Joi.string().max(40).required(),
		quantity: Joi.number().min(1).message('At least 1 number required').required(),
		machineDescription: Joi.string()
			.max(300)
			.message('Area cannot exceed 300 characters')
			.required(),
		serialNumbers: Joi.string().max(30).required(),
		dateOfFirstUse: Joi.date().required(),
		dateOfInstallation: Joi.date().optional(),
		nameOfManufacture: Joi.string()
			.max(50)
			.message('nameOfManufacture cannot exceed 50 characters')
			.required(),
		addressOfManufacture: Joi.string().max(200).required(),
		dateOfConstruction: Joi.date().optional(),
		thicknessOfWall: Joi.string()
			.max(30)
			.message('thicknessOfWall cannot exceed 30 characters')
			.optional(),
		identityFicationOfMachine: Joi.string()
			.max(50)
			.message('identityFicationOfMachine cannot exceed 30 characters')
			.optional(),
		safeWorkingPressure: Joi.when('machineName', {
			is: 'Pressure Vessel or Plant',
			then: Joi.string().max(50).required(),
			otherwise: Joi.string().optional(),
		}),
		accountHolderName: Joi.string()
			.uppercase()
			.optional()
			.max(150)
			.message('Account holder name cannot exceed 150 characters')
			.pattern(/^[A-Za-z\s]+$/)
			.message('Only English characters and spaces are allowed')
			.custom((value, helpers) => {
				if (!value || value === '') return value;
				if (value === '0') {
					return helpers.error('any.invalid', { message: 'Account holder name cannot be 0' });
				}
				return value;
			}, 'not-zero')
			.required(),
		bankName: Joi.string()
			.pattern(/^(?!\s*$)[a-zA-Z. ]+$/)
			.message('Invalid name format')
			.min(5)
			.message('Bank name must be at least 5 characters')
			.max(100)
			.message('Bank name cannot exceed 100 characters')
			.allow('', null)
			.required(),
		accountNumber: Joi.string()
			.trim()
			.optional()
			.allow('0')
			.custom((value, helpers) => {
				if (!value || value === '') return value;
				if (!/^[0-9]{7,30}$/.test(value)) {
					return helpers.error('any.invalid', {
						message: 'Bank account number must be 7-30 digits',
					});
				}
				return value;
			}, 'valid-account-number')
			.required(),
		ifscCode: Joi.string()
			.trim()
			.custom((value, helpers) => {
				if (!value || value === '' || value === 'NA') return value;
				if (!/^[A-Z]{4}[0-9A-Z]{7}$/.test(value)) {
					return helpers.error('any.invalid', {
						message: 'IFSC code must be exactly 11 characters',
					});
				}
				if (value === '0') {
					return helpers.error('any.invalid', { message: 'IFSC code cannot be 0' });
				}
				return value;
			}, 'valid-ifsc')
			.required(),
		branch: Joi.string()

			.pattern(/^(?!\s*$)[a-zA-Z. ]+$/)
			.message('Invalid name format')
			.min(3)
			.message('Branch name must be at least 3 characters')
			.max(100)
			.message('Branch name cannot exceed 100 characters')
			.allow('', null)
			.required(),
		gstNumber: Joi.string()
			.trim()
			.uppercase()
			.length(15)
			.message('GST number (GSTIN) must be exactly 15 characters')
			.pattern(/^\d{2}[A-Z]{5}\d{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/)
			.message('GST number must be a valid GSTIN (e.g., 27ABCDE1234F1Z5)')
			.required(),
		factoryRegistrationNumber: Joi.string()
			.trim()
			.uppercase()
			.max(20)
			.message('Factory registration number cannot exceed 20 characters')
			.pattern(/^[A-Z0-9][A-Z0-9\/\- ]*$/)
			.required(),
		companyPanCard: Joi.string()
			.trim()
			.uppercase()
			.length(10)
			.message('Company PAN must be exactly 10 characters')
			.pattern(/^[A-Z]{5}\d{4}[A-Z]$/)
			.message('Company PAN must be in format (e.g., ABCDE1234F)')
			.required()
			.max(20)
			.required(),
	}),
};

export const competentOfficerSchema = {
	body: Joi.object({
		formType: Joi.number().valid(1, 2).required(),
		name: Joi.string()
			.pattern(/^(?!\s*$)[a-zA-Z. ]+$/)
			.message('Invalid name format')
			.min(5)
			.message('Name must be at least 5 characters')
			.max(100)
			.message('Name cannot exceed 100 characters')
			.when('formType', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		mobileNo: Joi.string()
			.trim()
			.pattern(/^[6-9][0-9]{9}$/)
			.message('Mobile number must be 10 digits and start with 6 to 9')
			.allow(null, ''),
		email: Joi.string().email().max(100).required(),
		dateOfBirth: Joi.date().when('formType', {
			is: 1,
			then: Joi.required(),
			otherwise: Joi.allow(null),
		}),
		districtId: Joi.number().integer().required(),
		blockId: Joi.number().integer().required(),
		addressLine1: Joi.string().max(50).message('cannot exceed 50 characters').required(),

		addressLine2: Joi.string().max(50).message('cannot exceed 50 characters').allow(null, ''),

		addressLine3: Joi.string().max(50).message('cannot exceed 50 characters').allow(null, ''),
		pincode: Joi.string()
			.pattern(/^[0-9]{6}$/)
			.required(),
		designation: Joi.string().max(50).message('cannot exceed 50 characters').allow(null, ''),

		organizationName: Joi.string()
			.max(200)
			.when('formType', {
				is: 2,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),

		organizationStatus: Joi.number()
			.integer()
			.when('formType', {
				is: 2,
				then: Joi.required(),
				otherwise: Joi.allow(null),
			}),

		currentOrganization: Joi.string()
			.max(50)
			.when('formType', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		parentOrganization: Joi.string()
			.max(50)
			.when('formType', {
				is: 2,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),

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

		pressureVesselOrPlantDocument: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isPressureVesselOrPlant', {
				is: 1,
				then: Joi.string()
					.max(255)
					.message('Pressure Vessel or Plant document is required when selected')
					.required(),
				otherwise: Joi.string().max(255).allow(null, ''),
			}),

		hoistAndLiftsDocument: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isHoistAndLifts', {
				is: 1,
				then: Joi.string()
					.max(255)
					.message('Hoist and Lifts document is required when selected')
					.required(),
				otherwise: Joi.string().max(255).allow(null, ''),
			}),
		dustFumeExtractionSystemDocument: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isDustFumeExtractionSystem', {
				is: 1,
				then: Joi.string()
					.max(255)
					.message('Dust & Fume Extraction System document is required when selected')
					.required(),
				otherwise: Joi.string().max(255).allow(null, ''),
			}),

		powerPressSafetyDevicesDocument: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isPowerPressSafetyDevices', {
				is: 1,
				then: Joi.string()
					.max(255)
					.message('Power Press Safety Devices document is required when selected')
					.required(),
				otherwise: Joi.string().max(255).allow(null, ''),
			}),
		waterSealedGasHolderDocument: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isWaterSealedGasHolder', {
				is: 1,
				then: Joi.string()
					.max(255)
					.message('Water Sealed Gas Holder document is required when selected')
					.required(),
				otherwise: Joi.string().max(255).allow(null, ''),
			}),
		liftingMachinesChainsRopesDocument: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isLiftingMachinesChainsRopes', {
				is: 1,
				then: Joi.string()
					.max(255)
					.message('Lifting Machines, Chains & Ropes document is required when selected')
					.required(),
				otherwise: Joi.string().max(255).allow(null, ''),
			}),
		ovenAndDriersDocument: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isOvenAndDriers', {
				is: 1,
				then: Joi.string()
					.max(255)
					.message('Oven and Driers document is required when selected')
					.required(),
				otherwise: Joi.string().max(255).allow(null, ''),
			}),
		centrifugeMachineDocument: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isCentrifugeMachine', {
				is: 1,
				then: Joi.string()
					.max(255)
					.message('Centrifuge Machine document is required when selected')
					.required(),
				otherwise: Joi.string().max(255).allow(null, ''),
			}),
		thermicFluidHeaterDocument: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isThermicFluidHeater', {
				is: 1,
				then: Joi.string()
					.max(255)
					.message('Thermic Fluid Heater document is required when selected')
					.required(),
				otherwise: Joi.string().max(255).allow(null, ''),
			}),
		confinedSpaceDocument: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isConfinedSpace', {
				is: 1,
				then: Joi.string()
					.max(255)
					.message('Pressure Vessel or Plant document is required when selected')
					.required(),
				otherwise: Joi.string().max(255).allow(null, ''),
			}),
		stabilityDocument: Joi.string()
			.max(255)
			.allow(null, '')
			.when('isStability', {
				is: 1,
				then: Joi.string()
					.max(255)
					.message('Pressure Vessel or Plant document is required when selected')
					.required(),
				otherwise: Joi.string().max(255).allow(null, ''),
			}),

		organization: Joi.string()
			.pattern(/^(?!\s*$)[a-zA-Z. ]+$/)
			.message('Invalid name format')
			.min(5)
			.message('Name must be at least 5 characters')
			.max(70)
			.message('Name cannot exceed 70 characters')
			.required(),
		experienceDesignation: Joi.string()
			.pattern(/^(?!\s*$)[a-zA-Z. ]+$/)
			.message('Invalid name format')
			.min(5)
			.message('Name must be at least 5 characters')
			.max(40)
			.message('Name cannot exceed 40 characters')
			.required(),
		startDate: Joi.date().allow(null),
		endDate: Joi.date().allow(null),
		keyResponsibilites: Joi.string()
			.pattern(/^(?!\s*$)[a-zA-Z. ]+$/)
			.message('Invalid name format')
			.min(5)
			.message('Name must be at least 5 characters')
			.max(255)
			.message('Name cannot exceed 255 characters')
			.allow(null, ''),

		accountHolderName: Joi.string()
			.uppercase()
			.max(150)
			.message('Account holder name cannot exceed 150 characters')
			.pattern(/^[A-Za-z\s]+$/)
			.message('Only English characters and spaces are allowed')
			.custom((value, helpers) => {
				if (!value || value === '') return value;
				if (value === '0') {
					return helpers.error('any.invalid', { message: 'Account holder name cannot be 0' });
				}
				return value;
			}, 'not-zero')
			.required(),
		bankName: Joi.string()
			.pattern(/^(?!\s*$)[a-zA-Z. ]+$/)
			.message('Invalid name format')
			.min(5)
			.message('Bank name must be at least 5 characters')
			.max(100)
			.message('Bank name cannot exceed 100 characters')
			.allow('', null)
			.required(),
		accountNumber: Joi.string()
			.trim()
			.optional()
			.allow('0')
			.custom((value, helpers) => {
				if (!value || value === '') return value;
				if (!/^[0-9]{7,30}$/.test(value)) {
					return helpers.error('any.invalid', {
						message: 'Bank account number must be 7-30 digits',
					});
				}
				return value;
			}, 'valid-account-number')
			.required(),
		ifscCode: Joi.string()
			.trim()
			.custom((value, helpers) => {
				if (!value || value === '' || value === 'NA') return value;
				if (!/^[A-Z]{4}[0-9A-Z]{7}$/.test(value)) {
					return helpers.error('any.invalid', {
						message: 'IFSC code must be exactly 11 characters',
					});
				}
				if (value === '0') {
					return helpers.error('any.invalid', { message: 'IFSC code cannot be 0' });
				}
				return value;
			}, 'valid-ifsc')
			.required(),
		branch: Joi.string()
			.pattern(/^(?!\s*$)[a-zA-Z. ]+$/)
			.message('Invalid name format')
			.min(3)
			.message('Branch name must be at least 3 characters')
			.max(100)
			.message('Branch name cannot exceed 100 characters')
			.allow('', null)
			.required(),

		upiId: Joi.string().max(100).allow(null, ''),

		educationalQualification: Joi.string().allow(null, ''),
		descriptionOfExamination: Joi.string().allow(null, ''),
		arrangementsForCalibrationAndMaintenance: Joi.string().allow(null, ''),
		competencyCertificateIsSought: Joi.string().allow(null, ''),

		otherStatute: Joi.number().valid(0, 1).allow(null),
		statuteCompetency: Joi.when('otherStatute', {
			is: 1,
			then: Joi.string().required(),
			otherwise: Joi.allow(null, ''),
		}),
		otherRelevantInformation: Joi.string().allow(null, ''),
	}),
};

export const login = {
	body: Joi.object().keys({
		userId: Joi.string().max(80).required(),
		userPassword: Joi.string().required(),
	}),
};

export const forgotPasswordSchema = {
	body: Joi.object().keys({
		userId: Joi.string().max(30).required(),
		email: Joi.string().email().required(),
	}),
};

export const resetPasswordSchema = {
	body: Joi.object().keys({
		token: Joi.string().required(),
		newPassword: Joi.string().min(8).required(),
	}),
};
