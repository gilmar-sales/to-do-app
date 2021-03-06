import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { User } from '@entities/user.entity';
import { UserService } from '@services/user.service';
import UserInput from './input/user.input';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users() {
    return await this.userService.findUsers();
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: UserInput): Promise<User> {
    return await this.userService.createUser(data);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('data') data: number): Promise<boolean> {
    return await this.userService.deleteUser(data);
  }
}
