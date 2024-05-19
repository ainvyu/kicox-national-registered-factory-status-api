import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthLocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(
    private authService: AuthService,
  ) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      console.log('Unauthorized');

      throw new UnauthorizedException();
    }

    console.log("Validate success: %j", user)
    return user;
  }
}

