import sql from 'mssql';
// DATABASE
import { executeStoredProcedure } from '../database/index.js';
// UTILS
import logger from '../utils/logger.js';

export const factoryOwner = {
	factoryName: null,
	managerName: null,
	email: '',
	mobile: null,
	district: 0,
	block: 0,
	factoryLicenseNumber: '',
	yearOfEstablishment: null,
	industryType: 0,
	numberOfEmployees: null,
	address: null,
	pincode: null,
	accountHolderName: null,
	bankName: null,
	accountNumber: null,
	ifscCode: null,
	branch: null,
	gstNumber: null,
	factoryRegistrationNumber: null,
	companyPanCard: null,
};

export const competentOfficer = {
	formType: 1,
	name: null,
	organizationName: null,
	mobileNo: null,
	email: '',
	addressLine1: null,
	addressLine2: null,
	addressLine3: null,
	districtId: 0,
	blockId: 0,
	pincode: null,
	dateOfBirth: null,
	organizationStatus: 0,
	currentOrganization: null,
	parentOrganization: null,
	designation: null,
	isPressureVesselOrPlant: 0,
	isHoistAndLifts: 0,
	isDustFumeExtractionSystem: 0,
	isPowerPressSafetyDevices: 0,
	isWaterSealedGasHolder: 0,
	isLiftingMachinesChainsRopes: 0,
	isOvenAndDriers: 0,
	pressureVesselOrPlantDocument: null,
	hoistAndLiftsDocument: null,
	dustFumeExtractionSystemDocument: null,
	powerPressSafetyDevicesDocument: null,
	waterSealedGasHolderDocument: null,
	liftingMachinesChainsRopesDocument: null,
	ovenAndDriersDocument: null,
	accountHolderName: null,
	bankName: null,
	accountNumber: null,
	ifscCode: null,
	branch: null,
	educationalQualification: null,
	descriptionOfExamination: null,
	arrangementsForCalibrationAndMaintenance: null,
	competencyCertificateIsSought: null,
	otherStatute: 0,
	statuteCompetency: null,
	otherRelevantInformation: null,
};

class AuthModel {
	async factoryOwnerRegistration(data) {
		try {
			const {
				factoryName,
				managerName,
				email,
				mobile,
				district,
				block,
				factoryLicenseNumber,
				yearOfEstablishment,
				industryType,
				numberOfEmployees,
				address,
				pincode,
				accountHolderName,
				bankName,
				accountNumber,
				ifscCode,
				branch,
				gstNumber,
				factoryRegistrationNumber,
				companyPanCard,
			} = data;

			const result = await executeStoredProcedure('SP_FactoryOwner', [
				{ name: 'factoryName', type: sql.VarChar(200), value: factoryName },
				{ name: 'managerName', type: sql.VarChar(150), value: managerName },
				{ name: 'email', type: sql.VarChar(100), value: email },
				{ name: 'mobile', type: sql.VarChar(15), value: mobile },
				{ name: 'district', type: sql.Int(), value: district },
				{ name: 'block', type: sql.Int(), value: block },
				{ name: 'factoryLicenseNumber', type: sql.VarChar(50), value: factoryLicenseNumber },
				{ name: 'yearOfEstablishment', type: sql.Int(), value: yearOfEstablishment },
				{ name: 'industryType', type: sql.Int(), value: industryType },
				{ name: 'numberOfEmployees', type: sql.Int, value: numberOfEmployees },
				{ name: 'address', type: sql.VarChar(500), value: address },
				{ name: 'pincode', type: sql.VarChar(10), value: pincode },
				{ name: 'accountHolderName', type: sql.VarChar(150), value: accountHolderName },
				{ name: 'bankName', type: sql.VarChar(100), value: bankName },
				{ name: 'accountNumber', type: sql.VarChar(30), value: accountNumber },
				{ name: 'ifscCode', type: sql.VarChar(20), value: ifscCode },
				{ name: 'branch', type: sql.VarChar(100), value: branch },
				{ name: 'gstNumber', type: sql.VarChar(40), value: gstNumber },
				{
					name: 'factoryRegistrationNumber',
					type: sql.VarChar(20),
					value: factoryRegistrationNumber,
				},
				{ name: 'companyPanCard', type: sql.VarChar(20), value: companyPanCard },
			]);

			return result;
		} catch (error) {
			logger.error('Error in factoryOwnerRegistration model:', { error });
			throw error;
		}
	}

	async competentOfficerRegistration(data) {
		try {
			const {
				formType,
				name,
				organizationName,
				mobileNo,
				email,
				addressLine1,
				addressLine2,
				addressLine3,
				districtId,
				blockId,
				pincode,
				dateOfBirth,
				organizationStatus,
				currentOrganization,
				parentOrganization,
				designation,
				isPressureVesselOrPlant,
				isHoistAndLifts,
				isDustFumeExtractionSystem,
				isPowerPressSafetyDevices,
				isWaterSealedGasHolder,
				isLiftingMachinesChainsRopes,
				isOvenAndDriers,
				pressureVesselOrPlantDocument,
				hoistAndLiftsDocument,
				dustFumeExtractionSystemDocument,
				powerPressSafetyDevicesDocument,
				waterSealedGasHolderDocument,
				liftingMachinesChainsRopesDocument,
				ovenAndDriersDocument,
				accountHolderName,
				bankName,
				accountNumber,
				ifscCode,
				branch,
				educationalQualification,
				descriptionOfExamination,
				arrangementsForCalibrationAndMaintenance,
				competencyCertificateIsSought,
				otherStatute,
				statuteCompetency,
				otherRelevantInformation,
			} = data;

			const result = await executeStoredProcedure('SP_InsertCompetentOfficer', [
				{ name: 'formType', type: sql.Int, value: formType },
				{ name: 'name', type: sql.VarChar(100), value: name },
				{ name: 'organizationName', type: sql.VarChar(200), value: organizationName },
				{ name: 'mobileNo', type: sql.VarChar(15), value: mobileNo },
				{ name: 'email', type: sql.VarChar(100), value: email },
				{ name: 'addressLine1', type: sql.VarChar(50), value: addressLine1 },
				{ name: 'addressLine2', type: sql.VarChar(50), value: addressLine2 },
				{ name: 'addressLine3', type: sql.VarChar(50), value: addressLine3 },
				{ name: 'districtId', type: sql.Int, value: districtId },
				{ name: 'blockId', type: sql.Int, value: blockId },
				{ name: 'pincode', type: sql.VarChar(10), value: pincode },
				{ name: 'dateOfBirth', type: sql.Date, value: dateOfBirth },
				{ name: 'organizationStatus', type: sql.Int, value: organizationStatus },
				{ name: 'currentOrganization', type: sql.VarChar(50), value: currentOrganization },
				{ name: 'parentOrganization', type: sql.VarChar(50), value: parentOrganization },
				{ name: 'designation', type: sql.VarChar(50), value: designation },
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
				{ name: 'accountHolderName', type: sql.VarChar(150), value: accountHolderName },
				{ name: 'bankName', type: sql.VarChar(100), value: bankName },
				{ name: 'accountNumber', type: sql.VarChar(30), value: accountNumber },
				{ name: 'ifscCode', type: sql.VarChar(20), value: ifscCode },
				{ name: 'branch', type: sql.VarChar(100), value: branch },
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
			]);

			return result;
		} catch (error) {
			logger.error('Error in competentOfficerRegistration model:', { error });
			throw error;
		}
	}
}

export default AuthModel;
