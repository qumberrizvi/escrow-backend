import { Query, Resolver } from '@nestjs/graphql';
import { Public } from '@qushah/common';

@Resolver()
export class NotificationResolver {
  @Public()
  @Query(() => String, { name: 'pingNotification' })
  ping(): string {
    return 'pong';
  }
}
