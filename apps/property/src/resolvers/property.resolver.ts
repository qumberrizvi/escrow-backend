import { Query, Resolver } from '@nestjs/graphql';
import { Public } from '@qushah/common';

@Resolver()
export class PropertyResolver {
  @Public()
  @Query(() => String, { name: 'pingProperty' })
  ping(): string {
    return 'pong';
  }
}
