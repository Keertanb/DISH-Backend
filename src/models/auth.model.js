import sql from 'mssql';    
// DATABASE
import { executeStoredProcedure } from '../database/index.js';
// UTILS
import logger from '../utils/logger.js';

export const factoryOwner = {
  factoryName: null,
  managerName: null,
  email: "",
  mobile: null,
  district: 0,
  block: 0,
  factoryLicenseNumber: "",
  yearOfEstablishment: null,
  industryType: 0,
  numberOfEmployees: null,
  address: null,
  pincode: null,
  accountHolderName: null,
  bankName : null,
  accountNumber: null,
  ifscCode: null,
  branch: null,
  gstNumber: null,
  factoryRegistrationNumber: null,
  companyPanCard: null
};

class AuthModel{
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
        companyPanCard
      } = data;

      const result = await executeStoredProcedure("SP_FactoryOwner", [
        { name: "factoryName", type: sql.VarChar(200), value: factoryName },
        { name: "managerName", type: sql.VarChar(150), value: managerName },
        { name: "email", type: sql.VarChar(100), value: email },
        { name: "mobile", type: sql.VarChar(15), value: mobile },
        { name: "district", type: sql.Int, value: district},
        { name: "block", type: sql.Int, value: block },
        { name: "factoryLicenseNumber", type: sql.VarChar(50), value: factoryLicenseNumber },
        { name: "yearOfEstablishment", type: sql.Int, value: yearOfEstablishment },
        { name: "industryType", type: sql.Int, value: industryType },
        { name: "numberOfEmployees", type: sql.Int, value: numberOfEmployees },
        { name: "address", type: sql.VarChar(500), value: address },
        { name: "pincode", type: sql.VarChar(10), value: pincode },
        { name: "accountHolderName", type: sql.VarChar(150), value: accountHolderName },
        { name: "bankName", type: sql.VarChar(100), value: bankName },
        { name: "accountNumber", type: sql.VarChar(30), value: accountNumber },
        { name: "ifscCode", type: sql.VarChar(20), value: ifscCode },
        { name: "branch", type: sql.VarChar(100), value: branch },
        { name: "gstNumber", type: sql.VarChar(40), value: gstNumber },
        { name: "factoryRegistrationNumber", type: sql.VarChar(20), value: factoryRegistrationNumber },
        { name: "companyPanCard", type: sql.VarChar(20), value: companyPanCard },
      ]);

      return result;
    } catch (error) {
      logger.error("Error in factoryOwnerRegistration model:", { error });
      throw error;
    }
  }
}


export default AuthModel;