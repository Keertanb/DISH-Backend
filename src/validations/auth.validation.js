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

		machines: Joi.array()
			.items(
				Joi.object({
					machineName: Joi.string().required(),
					totalMachines: Joi.number().integer().required(),
				})
			)
			.required(),
		gstNumber: Joi.string()
			.trim()
			.uppercase()
			.length(15)
			.message('GST number (GSTIN) must be exactly 15 characters')
			.pattern(/^\d{2}[A-Z]{5}\d{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/)
			.message('GST number must be a valid GSTIN (e.g., 27ABCDE1234F1Z5)')
			.allow(null, '')
			.optional(),
		factoryRegistrationNumber: Joi.string()
			.trim()
			.uppercase()
			.max(20)
			.message('Factory registration number cannot exceed 20 characters')
			.pattern(/^[A-Z0-9][A-Z0-9\/\- ]*$/)
			.optional(),
		companyPanCard: Joi.string()
			.trim()
			.uppercase()
			.length(10)
			.message('Company PAN must be exactly 10 characters')
			.pattern(/^[A-Z]{5}\d{4}[A-Z]$/)
			.message('Company PAN must be in format (e.g., ABCDE1234F)')
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
			.min(2)
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

export const renewPauseCompetentOfficer = {
	body: Joi.object().keys({
		userId: Joi.string().max(30).optional(),
		email: Joi.string().email().optional(),
	}),
};
