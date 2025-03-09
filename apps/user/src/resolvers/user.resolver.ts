import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../entities/user.entity';
import { UserService } from '../user.service';
import { CreateUserInput } from '../dtos/create-user.input';

@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String, { name: 'pingUser' })
  ping(): string {
    return 'pong';
  }

  @Query(() => [User], { nullable: true })
  users(): Promise<User[]> {
    return this.userService.find();
  }

  @Mutation(() => User)
  createUser(@Args() input: CreateUserInput): Promise<User> {
    return this.userService.create(input);
  }
}
