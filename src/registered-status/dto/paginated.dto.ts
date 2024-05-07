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

export class PaginatedDto<TData> {
  @ApiProperty()
  total: number;

  @ApiProperty()
  size: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  last_page: number;

  results: TData[];
}

