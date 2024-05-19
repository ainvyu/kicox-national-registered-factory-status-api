import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { InjectRepository } from '@nestjs/typeorm';
import { UserGroup } from './entities/user_group.entity';
import * as bcrypt from "bcryptjs";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(UserGroup) private userGroupRepository: Repository<UserGroup>,
  ) {

  }

  async create(createUserDto: CreateUserDto) {
    const newUser = plainToInstance(User, instanceToPlain(createUserDto));

    newUser.groups = createUserDto.groups.map((groupName) => {
      const group = new UserGroup()
      group.name = groupName;
      return group
    })

    const bPw = bcrypt.hashSync(newUser.password, 8);
    newUser.password = bPw

    return await this.userRepository.save(newUser)
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email },
      relations: ['groups']
    })
  }
}
