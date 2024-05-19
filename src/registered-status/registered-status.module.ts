import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RegisteredStatusService } from './registered-status.service';
import { RegisteredStatusController } from './registered-status.controller';
import { RegisteredStatus } from './entities/registered-status.entity';
import { SharedModule } from '../shared/shared.module';
import { AuthJwtStrategy } from '../auth/strategies/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([RegisteredStatus]),
    SharedModule,
  ],
  controllers: [RegisteredStatusController],
  providers: [
    RegisteredStatusService,
    AuthJwtStrategy,
  ],
})
export class RegisteredStatusModule { }
