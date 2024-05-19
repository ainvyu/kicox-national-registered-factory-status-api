import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { AuthLocalStrategy } from './strategies/local-auth.strategy';
import { SharedModule } from '../shared/shared.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { AuthJwtStrategy } from './strategies/jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles/roles.guard';

@Module({
  imports: [
    UserModule,
    SharedModule,
    PassportModule,
    ConfigModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthLocalStrategy,
    AuthJwtStrategy,
  ]
})
export class AuthModule { }
