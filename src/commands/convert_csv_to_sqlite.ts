import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { RegisteredStatusService } from "../registered-status/registered-status.service";
import { RegisteredStatus } from "../registered-status/entities/registered-status.entity";
const csv = require('csv-parser');
var iconv = require('iconv-lite');
import { open } from 'fs/promises';
import * as fs from 'fs';

(async () => {
  console.log("Create application context");
  const app = await NestFactory.createApplicationContext(AppModule);

  console.log("Start");
  const rsService = app.get(RegisteredStatusService);

  //const file = await open('data/converted_data.csv');
  //for await (const line of file.readLines()) {
  //  console.log(line)
  //}

  const columnMapping = {
    "시도명": "cityProvinceName",
    "시군구명": "cityDistrictName",
    "관리기관": "managementAgency",
    "회사명": "companyName",
    "공장구분": "factoryClassification",
    "단지명": "complexName",
    "설립구분": "establishmentType",
    "입주형태": "occupancyType",
    "보유구분": "ownershipType",
    "등록구분": "registrationType",
    "전화번호": "phoneNumber",
    "남자종업원": "maleEmployees",
    "여자종업원": "femaleEmployees",
    "외국인남자종업원": "foreignMaleEmployees",
    "외국인여자종업원": "foreignFemaleEmployees",
    "종업원합계": "totalEmployees",
    "생산품": "product",
    "원자재": "rawMaterials",
    "공장규모": "factorySize",
    "용도지역": "zoning",
    "지목": "designation",
    "용지면적": "landArea",
    "제조시설면적": "manufacturingFacilityArea",
    "부대시설면적": "ancillaryFacilityArea",
    "건축면적": "buildingArea",
    "지식산업센터명": "knowledgeIndustryCenterName",
    "대표업종": "mainIndustry",
    "업종명": "industryName",
    "업종코드": "industryCode",
    "차수": "order",
    "법인주소": "corporateAddress",
    "필지수": "landLotNumber",
    "공장주소": "factoryAddress",
    "공장주소_지번": "factoryAddressParcelNumber",
    "공장관리번호": "factoryManagementNumber"
  };

  function normalizeString(s: string, nullable: boolean = true) {
    let v = s.trim()
    if (v.length == 0 && nullable) {
      return null
    }
    else if (v.length == 0 && !nullable) {
      throw RangeError("Not allow null")
    }

    return v
  }

  const typeMapping = {
    "cityProvinceName": (value: string) => normalizeString(value),
    "cityDistrictName": (value: string) => normalizeString(value),
    "managementAgency": (value: string) => normalizeString(value),
    "companyName": (value: string) => normalizeString(value),
    "factoryClassification": (value: string) => normalizeString(value),
    "complexName": (value: string) => normalizeString(value),
    "establishmentType": (value: string) => normalizeString(value),
    "occupancyType": (value: string) => normalizeString(value),
    "ownershipType": (value: string) => normalizeString(value),
    "registrationType": (value: string) => normalizeString(value),
    "phoneNumber": (value: string) => normalizeString(value),
    "maleEmployees": (value: string) => parseInt(value),
    "femaleEmployees": (value: string) => parseInt(value),
    "foreignMaleEmployees": (value: string) => parseInt(value),
    "foreignFemaleEmployees": (value: string) => parseInt(value),
    "totalEmployees": (value: string) => parseInt(value),
    "product": (value: string) => normalizeString(value),
    "rawMaterials": (value: string) => normalizeString(value),
    "factorySize": (value: string) => normalizeString(value),
    "zoning": (value: string) => normalizeString(value),
    "designation": (value: string) => normalizeString(value),
    "landArea": (value: string) => parseFloat(value),
    "manufacturingFacilityArea": (value: string) => parseFloat(value),
    "ancillaryFacilityArea": (value: string) => parseFloat(value),
    "buildingArea": (value: string) => parseFloat(value),
    "knowledgeIndustryCenterName": (value: string) => normalizeString(value),
    "mainIndustry": (value: string) => normalizeString(value),
    "industryName": (value: string) => normalizeString(value),
    "industryCode": (value: string) => normalizeString(value),
    "order": (value: string) => parseInt(value),
    "corporateAddress": (value: string) => normalizeString(value),
    "landLotNumber": (value: string) => normalizeString(value),
    "factoryAddress": (value: string) => normalizeString(value),
    "factoryAddressParcelNumber": (value: string) => normalizeString(value),
    "factoryManagementNumber": (value: string) => new Number(value).valueOf(),
  };


  fs.createReadStream("data/data.csv")
    .pipe(iconv.decodeStream('cp949'))
    .pipe(
      csv({
        mapHeaders: ({ header, index }) => columnMapping[header],
        mapValues: ({ header, index, value }) => typeMapping[header](value),
      })
    )
    .on("data", (data) => {
      try {
        rsService.create(data)
      }
      catch (e) {
        console.error(e);
        throw e;
      }
    })
    .on("end", () => {
      console.log("closing file")
    });

})();
