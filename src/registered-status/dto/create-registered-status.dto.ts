import {
  ApiBearerAuth,
  ApiConsumes,
  ApiExtension,
  ApiHeader,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiSecurity,
  ApiProperty,
  ApiTags
} from '@nestjs/swagger'

import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class CreateRegisteredStatusDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  cityProvinceName: string

  @ApiProperty()
  cityDistrictName: string

  @ApiProperty()
  managementAgency: string

  @ApiProperty()
  companyName: string

  @ApiProperty()
  factoryClassification: string

  @ApiProperty()
  complexName: string

  @ApiProperty()
  establishmentType: string

  @ApiProperty()
  occupancyType: string

  @ApiProperty()
  ownershipType: string

  @ApiProperty()
  registrationType: string

  @ApiProperty()
  phoneNumber: string

  @ApiProperty()
  maleEmployees: number

  @ApiProperty()
  femaleEmployees: number

  @ApiProperty()
  foreignMaleEmployees: number

  @ApiProperty()
  foreignFemaleEmployees: number

  @ApiProperty()
  totalEmployees: number

  @ApiProperty()
  product: string

  @ApiProperty()
  rawMaterials: string

  @ApiProperty()
  factorySize: string

  @ApiProperty()
  zoning: string

  @ApiProperty()
  designation: string

  @ApiProperty()
  landArea: number

  @ApiProperty()
  manufacturingFacilityArea: number

  @ApiProperty()
  ancillaryFacilityArea: number

  @ApiProperty()
  buildingArea: number

  @ApiProperty()
  knowledgeIndustryCenterName: string

  @ApiProperty()
  mainIndustry: string

  @ApiProperty()
  industryName: string

  @ApiProperty()
  industryCode: string

  @ApiProperty()
  order: number

  @ApiProperty()
  corporateAddress: string

  @ApiProperty()
  landLotNumber: number

  @ApiProperty()
  factoryAddress: string

  @ApiProperty()
  factoryAddressParcelNumber: string

  @ApiProperty()
  factoryManagementNumber: number

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
