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
	addressLine1: null,
	addressLine2: null,
	addressLine3: null,
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
	async factoryOwnerRegistration(data, password) {
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
				addressLine1,
				addressLine2,
				addressLine3,
				pincode,
				machineName,
				quantity,
				machineDescription,
				serialNumbers,
				dateOfFirstUse,
				dateOfInstallation,
				nameOfManufacture,
				addressOfManufacture,
				dateOfConstruction,
				thicknessOfWall,
				identityFicationOfMachine,
				safeWorkingPressure,
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
				{ name: 'factoryName', type: sql.NVarChar(200), value: factoryName },
				{ name: 'managerName', type: sql.NVarChar(150), value: managerName },
				{ name: 'email', type: sql.NVarChar(100), value: email },
				{ name: 'mobile', type: sql.NVarChar(15), value: mobile },
				{ name: 'district', type: sql.Int(), value: district },
				{ name: 'block', type: sql.Int(), value: block },
				{ name: 'factoryLicenseNumber', type: sql.NVarChar(50), value: factoryLicenseNumber },
				{ name: 'yearOfEstablishment', type: sql.Int(), value: yearOfEstablishment },
				{ name: 'industryType', type: sql.Int(), value: industryType },
				{ name: 'numberOfEmployees', type: sql.Int, value: numberOfEmployees },
				{ name: 'addressLine1', type: sql.NVarChar(50), value: addressLine1 },
				{ name: 'addressLine2', type: sql.NVarChar(50), value: addressLine2 },
				{ name: 'addressLine3', type: sql.NVarChar(50), value: addressLine3 },
				{ name: 'pincode', type: sql.NVarChar(10), value: pincode },
				{ name: 'machineName', type: sql.VarChar(40), value: machineName },
				{ name: 'quantity', type: sql.Int(), value: quantity },
				{ name: 'machineDescription', type: sql.VarChar(), value: machineDescription },
				{ name: 'serialNumbers', type: sql.VarChar(50), value: serialNumbers },
				{ name: 'dateOfFirstUse', type: sql.Date(), value: dateOfFirstUse },
				{ name: 'dateOfInstallation', type: sql.Date(), value: dateOfInstallation },
				{ name: 'nameOfManufacture', type: sql.VarChar(50), value: nameOfManufacture },
				{ name: 'addressOfManufacture', type: sql.VarChar(200), value: addressOfManufacture },
				{ name: 'dateOfConstruction', type: sql.Date(), value: dateOfConstruction },
				{ name: 'thicknessOfWall', type: sql.VarChar(30), value: thicknessOfWall },
				{
					name: 'identityFicationOfMachine',
					type: sql.VarChar(50),
					value: identityFicationOfMachine,
				},
				{ name: 'safeWorkingPressure', type: sql.VarChar(50), value: safeWorkingPressure },
				{ name: 'accountHolderName', type: sql.NVarChar(150), value: accountHolderName },
				{ name: 'bankName', type: sql.NVarChar(100), value: bankName },
				{ name: 'accountNumber', type: sql.NVarChar(30), value: accountNumber },
				{ name: 'ifscCode', type: sql.NVarChar(20), value: ifscCode },
				{ name: 'branch', type: sql.NVarChar(100), value: branch },
				{ name: 'gstNumber', type: sql.NVarChar(40), value: gstNumber },
				{
					name: 'factoryRegistrationNumber',
					type: sql.NVarChar(20),
					value: factoryRegistrationNumber,
				},
				{ name: 'companyPanCard', type: sql.NVarChar(20), value: companyPanCard },
				{ name: 'userPassword', type: sql.VarChar(255), value: password },
			]);

			return result;
		} catch (error) {
			logger.error('Error in factoryOwnerRegistration model:', { error });
			throw error;
		}
	}

	async competentOfficerRegistration(data, password) {
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
				isCentrifugeMachine,
				isThermicFluidHeater,
				isConfinedSpace,
				isStability,
				pressureVesselOrPlantDocument,
				hoistAndLiftsDocument,
				dustFumeExtractionSystemDocument,
				powerPressSafetyDevicesDocument,
				waterSealedGasHolderDocument,
				liftingMachinesChainsRopesDocument,
				ovenAndDriersDocument,
				centrifugeMachineDocument,
				thermicFluidHeaterDocument,
				confinedSpaceDocument,
				stabilityDocument,
				organization,
				experienceDesignation,
				startDate,
				endDate,
				keyResponsibilites,
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
				{ name: 'isCentrifugeMachine', type: sql.Bit, value: isCentrifugeMachine },
				{ name: 'isThermicFluidHeater', type: sql.Bit, value: isThermicFluidHeater },
				{ name: 'isConfinedSpace', type: sql.Bit, value: isConfinedSpace },
				{ name: 'isStability', type: sql.Bit, value: isStability },
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
				{
					name: 'centrifugeMachineDocument',
					type: sql.VarChar(255),
					value: centrifugeMachineDocument,
				},
				{
					name: 'thermicFluidHeaterDocument',
					type: sql.VarChar(255),
					value: thermicFluidHeaterDocument,
				},
				{ name: 'confinedSpaceDocument', type: sql.VarChar(255), value: confinedSpaceDocument },
				{ name: 'stabilityDocument', type: sql.VarChar(255), value: stabilityDocument },
				{ name: 'organization', type: sql.VarChar(70), value: organization },
				{ name: 'experienceDesignation', type: sql.VarChar(40), value: experienceDesignation },
				{ name: 'startDate', type: sql.Date(), value: startDate },
				{ name: 'endDate', type: sql.Date(), value: endDate },
				{ name: 'keyResponsibilites', type: sql.NVarChar(255), value: keyResponsibilites },
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
				{ name: 'userPassword', type: sql.VarChar(255), value: password },
			]);

			return result;
		} catch (error) {
			logger.error('Error in competentOfficerRegistration model:', { error });
			throw error;
		}
	}

	async login(userId) {
		try {
			const result = await executeStoredProcedure('SP_GetUserName', [
				{ name: 'userId', type: sql.VarChar(80), value: userId },
			]);

			return result || [];
		} catch (error) {
			logger.error('Error in login model:', { error });
			throw error;
		}
	}

	async generateResetToken(userId, email, token, expiry) {
		try {
			const result = await executeStoredProcedure(
				'SP_GeneratePasswordResetToken',
				[
					{ name: 'userId', type: sql.VarChar(30), value: userId },
					{ name: 'email', type: sql.VarChar(100), value: email },
					{ name: 'token', type: sql.VarChar(100), value: token },
					{ name: 'expiry', type: sql.DateTime2, value: expiry },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in generateResetToken model:', { err });
			throw err;
		}
	}

	async resetPassword(token, hashedPassword) {
		try {
			const result = await executeStoredProcedure(
				'SP_ResetPassword',
				[
					{ name: 'token', type: sql.VarChar(100), value: token },
					{ name: 'newPassword', type: sql.VarChar(100), value: hashedPassword },
				],
				true
			);
			return result;
		} catch (err) {
			logger.error('Error in resetPassword model:', { err });
			throw err;
		}
	}
}

export default AuthModel;
