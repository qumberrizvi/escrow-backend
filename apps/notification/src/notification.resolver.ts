import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class NotificationResolver {
  @Query(() => String, { name: 'pingNotification' })
  ping(): string {
    return 'pong';
  }
}
