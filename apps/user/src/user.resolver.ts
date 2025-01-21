import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query(() => String, { name: 'pingUser' })
  ping(): string {
    return 'pong';
  }
}
