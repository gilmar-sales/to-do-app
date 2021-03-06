import { Resolver, Query } from '@nestjs/graphql';

import { User } from '@entities/user.entity';
import { UserService } from '@services/user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users() {
    return await this.userService.findUsers();
  }
}
