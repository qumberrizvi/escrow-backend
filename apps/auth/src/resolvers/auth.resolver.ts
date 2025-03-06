import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AuthResolver {
  @Query(() => String, { name: 'pingAuth' })
  ping(): string {
    return 'pong';
  }
}
