import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@entities/user.entity';
import UserInput from 'src/resolvers/input/user.input';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  async createUser(data: UserInput): Promise<User> {
    const checkEmail = await this.repository.findOne({ email: data.email });

    if (!checkEmail) throw new BadRequestException('E-mail already in use');

    const user = this.repository.create(data);

    return this.repository.save(user);
  }

  async findUsers(): Promise<User[]> {
    return await this.repository.find();
  }
}
