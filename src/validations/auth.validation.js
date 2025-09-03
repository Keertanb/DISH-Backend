import Joi from 'joi';

export const factoryOwnerRegistration = {
  body: Joi.object().keys({
    factoryName: Joi.string().max(200).allow('', null),
    managerName: Joi.string().max(150).allow('', null),
    email: Joi.string().email().required(),
    mobile: Joi.string().max(15).allow('', null),
    district: Joi.number().integer().required(),
    block: Joi.number().integer().required(),
    factoryLicenseNumber: Joi.string().max(50).required(),
    yearOfEstablishment: Joi.number().integer().min(1800).max(3000).allow(null),
    industryType: Joi.number().integer().required(),
    numberOfEmployees: Joi.number().integer().min(0).allow(null),
    address: Joi.string().max(500).allow('', null),
    pincode: Joi.string().max(10).allow('', null),
    accountHolderName: Joi.string().max(150).required(),
    bankName: Joi.string().max(100).required(),
    accountNumber: Joi.string().max(30).required(),
    ifscCode: Joi.string().max(20).required(),
    branch: Joi.string().max(100).required(),
    gstNumber: Joi.string().max(40).required(),
    factoryRegistrationNumber: Joi.string().max(20).required(),
    companyPanCard: Joi.string().max(20).required()
  }),
};



