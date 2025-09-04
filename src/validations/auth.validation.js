import Joi from 'joi';

export const factoryOwnerRegistration = {
	body: Joi.object().keys({
		factoryName: Joi.string()
			.trim()
			.pattern(/^(?!\s*$)[a-zA-Z. ]+$/)
			.message('Invalid name format')
			.min(5)
			.message('Factory name must be at least 5 characters')
			.max(200)
			.message('Factory name cannot exceed 200 characters')
			.allow('', null)
			.required(),
		managerName: Joi.string()
			.trim()
			.pattern(/^(?!\s*$)[a-zA-Z. ]+$/)
			.message('Invalid name format')
			.min(5)
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
		yearOfEstablishment: Joi.number().integer().min(1800).max(3000).allow(null),
		industryType: Joi.number().integer().required(),
		numberOfEmployees: Joi.number().integer().min(0).allow(null),
		address: Joi.string()
			.trim()
			.uppercase()
			.max(500)
			.message('Area cannot exceed 500 characters')
			.pattern(/^[A-Za-z0-9\s\-\\.]+$/)
			.message('Only English characters, numbers, spaces, hyphens and dots are allowed')
			.optional()
			.allow('', null),
		pincode: Joi.string()
			.trim()
			.pattern(/^[0-9]{6}$/)
			.message('Pincode must be exactly 6 digits')
			.allow('', null),
		accountHolderName: Joi.string()
			.trim()
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
			.trim()
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
			.trim()
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
			.max(100)
			.when('formType', {
				is: 1,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		organizationName: Joi.string()
			.max(200)
			.when('formType', {
				is: 2,
				then: Joi.required(),
				otherwise: Joi.allow(null, ''),
			}),
		mobileNo: Joi.string()
			.pattern(/^[0-9]{10,15}$/)
			.allow(null, ''),
		email: Joi.string().email().max(100).required(),
		addressLine1: Joi.string().max(50).allow(null, ''),
		addressLine2: Joi.string().max(50).allow(null, ''),
		addressLine3: Joi.string().max(50).allow(null, ''),
		districtId: Joi.number().integer().required(),
		blockId: Joi.number().integer().required(),
		pincode: Joi.string()
			.pattern(/^[0-9]{6}$/)
			.allow(null, ''),
		dateOfBirth: Joi.date().when('formType', {
			is: 1,
			then: Joi.required(),
			otherwise: Joi.allow(null),
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
		designation: Joi.string().max(50).allow(null, ''),

		isPressureVesselOrPlant: Joi.number().valid(0, 1).allow(null),
		isHoistAndLifts: Joi.number().valid(0, 1).allow(null),
		isDustFumeExtractionSystem: Joi.number().valid(0, 1).allow(null),
		isPowerPressSafetyDevices: Joi.number().valid(0, 1).allow(null),
		isWaterSealedGasHolder: Joi.number().valid(0, 1).allow(null),
		isLiftingMachinesChainsRopes: Joi.number().valid(0, 1).allow(null),
		isOvenAndDriers: Joi.number().valid(0, 1).allow(null),

		pressureVesselOrPlantDocument: Joi.string().max(255).allow(null, ''),
		hoistAndLiftsDocument: Joi.string().max(255).allow(null, ''),
		dustFumeExtractionSystemDocument: Joi.string().max(255).allow(null, ''),
		powerPressSafetyDevicesDocument: Joi.string().max(255).allow(null, ''),
		waterSealedGasHolderDocument: Joi.string().max(255).allow(null, ''),
		liftingMachinesChainsRopesDocument: Joi.string().max(255).allow(null, ''),
		ovenAndDriersDocument: Joi.string().max(255).allow(null, ''),

		accountHolderName: Joi.string().max(150).allow(null, ''),
		bankName: Joi.string().max(100).allow(null, ''),
		accountNumber: Joi.string().max(30).allow(null, ''),
		ifscCode: Joi.string().max(20).allow(null, ''),
		branch: Joi.string().max(100).allow(null, ''),
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
