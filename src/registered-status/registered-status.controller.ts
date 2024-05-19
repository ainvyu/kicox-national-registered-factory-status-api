import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
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
  ApiTags,
  ApiBody,
} from '@nestjs/swagger'

import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

import { RegisteredStatusService } from './registered-status.service';
import { CreateRegisteredStatusDto } from './dto/create-registered-status.dto';
import { UpdateRegisteredStatusDto } from './dto/update-registered-status.dto';
import { PaginatedDto } from './dto/paginated.dto';
import { RegisteredStatus } from './entities/registered-status.entity';
import { ApiPaginatedResponse } from '../utils/decorators';
import { JwtAuthGuard } from '../auth/guards/jwt-auth/jwt-auth.guard';

export class PagingQuery {
  @IsInt()
  @Type(() => Number)
  @ApiProperty()
  public readonly page: number;

  @IsInt()
  @Type(() => Number)
  @ApiProperty()
  public readonly size: number;
}

@ApiTags('registered-status')
@ApiBearerAuth()
@Controller('registered-status')
export class RegisteredStatusController {
  constructor(private readonly registeredStatusService: RegisteredStatusService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createRegisteredStatusDto: CreateRegisteredStatusDto) {
    return this.registeredStatusService.create(createRegisteredStatusDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiPaginatedResponse(RegisteredStatus)
  async findByPaging(@Query() pageQueryParams: PagingQuery): Promise<PaginatedDto<RegisteredStatus>> {
    const [data, total] = await this.registeredStatusService.findByPaging(
      pageQueryParams.page,
      pageQueryParams.size,
    );

    return {
      results: data,
      total,
      size: pageQueryParams.size,
      page: pageQueryParams.page,
      last_page: Math.ceil(total / pageQueryParams.size),
    } as PaginatedDto<RegisteredStatus>
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registeredStatusService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiBody({ type: UpdateRegisteredStatusDto })
  update(
    @Param('id') id: string,
    @Body() updateRegisteredStatusDto: UpdateRegisteredStatusDto
  ) {
    return this.registeredStatusService.update(id, updateRegisteredStatusDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registeredStatusService.remove(id);
  }
}
