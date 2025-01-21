import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class PropertyResolver {
  @Query(() => String, { name: 'pingProperty' })
  ping(): string {
    return 'pong';
  }
}
