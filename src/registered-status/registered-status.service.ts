import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DeleteResult, FindOptionsWhere, Repository, UpdateResult } from 'typeorm';
import { classToPlain, instanceToPlain, plainToInstance } from 'class-transformer';

import { CreateRegisteredStatusDto } from './dto/create-registered-status.dto';
import { UpdateRegisteredStatusDto } from './dto/update-registered-status.dto';
import { RegisteredStatus } from './entities/registered-status.entity';

@Injectable()
export class RegisteredStatusService {
  constructor(
    @InjectRepository(RegisteredStatus) private rsRepository: Repository<RegisteredStatus>
  ) {

  }

  async create(createRegisteredStatusDto: CreateRegisteredStatusDto) {
    const newRegisteredStatus = plainToInstance(RegisteredStatus, instanceToPlain(createRegisteredStatusDto));

    return await this.rsRepository.save(newRegisteredStatus)
  }

  async findByPaging(page: number, size: number) {
    return await this.rsRepository.findAndCount({
      take: size,
      skip: (page - 1) * size,
      where: {},
      order: { "updatedAt": "DESC" }
    })
  }

  async findOne(id: string) {
    return await this.rsRepository.findOne({ where: { "id": id } })
  }

  async update(id: string, updateRegisteredStatusDto: UpdateRegisteredStatusDto): Promise<UpdateResult> {
    return await this.rsRepository.update(id, { ...updateRegisteredStatusDto })
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.rsRepository.delete(id)
  }
}
