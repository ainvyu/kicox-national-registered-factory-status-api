import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RegisteredStatusService } from './registered-status.service';
import { RegisteredStatusController } from './registered-status.controller';
import { RegisteredStatus } from './entities/registered-status.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RegisteredStatus])
  ],
  controllers: [RegisteredStatusController],
  providers: [RegisteredStatusService],
})
export class RegisteredStatusModule { }
