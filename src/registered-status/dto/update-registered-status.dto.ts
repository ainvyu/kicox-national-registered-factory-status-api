import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisteredStatusDto } from './create-registered-status.dto';

export class UpdateRegisteredStatusDto extends PartialType(CreateRegisteredStatusDto) { }
