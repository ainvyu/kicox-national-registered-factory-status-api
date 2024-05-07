import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

//시도명,시군구명,관리기관,회사명,공장구분,단지명,설립구분,입주형태,보유구분,등록구분,전화번호,남자종업원,여자종업원,외국인남자종업원,외국인여자종업원,종업원합계,생산품,원자재,공장규모,용도지역,지목,용지면적,제조시설면적,부대시설면적,건축면적,지식산업센터명,대표업종,업종명,업종코드,차수,법인주소,필지수,공장주소,공장주소_지번,공장관리번호
//
@Entity('registered_status')
export class RegisteredStatus extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: 'text', nullable: true, comment: "시도명" })
  cityProvinceName: string

  @Column({ type: 'text', nullable: true, comment: "시군구명" })
  cityDistrictName: string

  @Column({ type: 'text', nullable: true, comment: "관리기관" })
  managementAgency: string

  @Column({ type: 'text', nullable: true, comment: "회사명" })
  companyName: string

  @Column({ type: 'text', nullable: true, comment: "공장구분" })
  factoryClassification: string

  @Column({ type: 'text', nullable: true, comment: "단지명" })
  complexName: string

  @Column({ type: 'text', nullable: true, comment: "설립구분" })
  establishmentType: string

  @Column({ type: 'text', nullable: true, comment: "입주형태" })
  occupancyType: string

  @Column({ type: 'text', nullable: true, comment: "보유구분" })
  ownershipType: string

  @Column({ type: 'text', nullable: true, comment: "등록구분" })
  registrationType: string

  @Column({ type: 'text', nullable: true, comment: "전화번호" })
  phoneNumber: string

  @Column({ type: 'int', nullable: true, comment: "남자종업원" })
  maleEmployees: number

  @Column({ type: 'int', nullable: true, comment: "여자종업원" })
  femaleEmployees: number

  @Column({ type: 'int', nullable: true, comment: "외국인남자종업원" })
  foreignMaleEmployees: number

  @Column({ type: 'int', nullable: true, comment: "외국인여자종업원" })
  foreignFemaleEmployees: number

  @Column({ type: 'int', nullable: true, comment: "종업원합계" })
  totalEmployees: number

  @Column({ type: 'text', nullable: true, comment: "생산품" })
  product: string

  @Column({ type: 'text', nullable: true, comment: "원자재" })
  rawMaterials: string

  @Column({ type: 'text', nullable: true, comment: "공장규모" })
  factorySize: string

  @Column({ type: 'text', nullable: true, comment: "용도지역" })
  zoning: string

  @Column({ type: 'text', nullable: true, comment: "지목" })
  designation: string

  @Column({ type: 'float', nullable: true, comment: "용지면적" })
  landArea: number

  @Column({ type: 'float', nullable: true, comment: "제조시설면적" })
  manufacturingFacilityArea: number

  @Column({ type: 'float', nullable: true, comment: "부대시설면적" })
  ancillaryFacilityArea: number

  @Column({ type: 'float', nullable: true, comment: "건축면적" })
  buildingArea: number

  @Column({ type: 'text', nullable: true, comment: "지식산업센터명" })
  knowledgeIndustryCenterName: string

  @Column({ type: 'text', nullable: true, comment: "대표업종" })
  mainIndustry: string

  @Column({ type: 'text', nullable: true, comment: "업종명" })
  industryName: string

  @Column({ type: 'text', nullable: true, comment: "업종코드 (comma seperate)" })
  industryCode: string

  @Column({ type: 'int', nullable: true, comment: "차수" })
  order: number

  @Column({ type: 'text', nullable: true, comment: "법인주소" })
  corporateAddress: string

  @Column({ type: 'int', nullable: true, comment: "필지수" })
  landLotNumber: number

  @Column({ type: 'text', nullable: true, comment: "공장주소" })
  factoryAddress: string

  @Column({ type: 'text', nullable: true, comment: "공장주소_지번" })
  factoryAddressParcelNumber: string

  @Column({ type: 'bigint', nullable: true, comment: "공장관리번호" })
  factoryManagementNumber: number

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
