import { Query, Resolver } from '@nestjs/graphql';
import { Public } from '@qushah/common';

@Resolver()
export class MediaResolver {
  @Public()
  @Query(() => String, { name: 'pingMedia' })
  ping(): string {
    return 'pong';
  }
}
