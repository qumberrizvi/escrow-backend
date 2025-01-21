import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MediaResolver {
  @Query(() => String, { name: 'pingMedia' })
  ping(): string {
    return 'pong';
  }
}
