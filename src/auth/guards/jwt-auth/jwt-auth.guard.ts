import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { ROLES_KEY } from 'src/auth/decorators/groups.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    //if (requiredRoles) {
    //  const { user } = context.switchToHttp().getRequest();
    //  return requiredRoles.some((role) => user.groups?.includes(role));
    //}

    //const { user } = context.switchToHttp().getRequest();
    //console.log("canActivate: %j", user)

    return super.canActivate(context);
  }
}
