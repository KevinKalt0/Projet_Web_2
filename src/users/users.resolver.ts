import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from '../models/user/user';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  users(): User[] {
    return this.usersService.findAll();
  }

  @Query(() => User)
  user(@Args('id') id: string): User {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  createUser(
    @Args('username') username: string,
    @Args('email') email: string
  ): User {
    const user: User = { id: Date.now().toString(), username, email };
    return this.usersService.create(user);
  }
}
