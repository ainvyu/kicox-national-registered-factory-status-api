import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from "bcryptjs";

import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { UserGroup } from '../user/entities/user_group.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, password: string): Promise<Partial<User>> {
    console.log('AuthService::validateUser');

    const user: User = await this.userService.findOneByEmail(email);

    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      console.log(`Success! username: ${result.username}`)

      // 비밀번호를 제외하고 유저 정보를 반환
      return result;
    }

    throw new BadRequestException('Invalid credentials')
  }

  _signJwt(data) {
    return this.jwtService.sign(data)
  }

  async login({ email, username, groups, id }: { email: string, username: string, groups: UserGroup[], id: string }) {
    const payload = {
      email: email,
      username: username,
      groups: groups.map((group) => group.name),
      sub: id,
    };

    return {
      access_token: this._signJwt(payload)
    };
  }

}
