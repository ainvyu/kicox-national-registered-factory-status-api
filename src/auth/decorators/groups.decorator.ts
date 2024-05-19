import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'groups';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);

