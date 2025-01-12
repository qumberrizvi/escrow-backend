import { Query, Resolver } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import { Observable } from 'rxjs';

@Resolver()
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Query(() => String)
  pingNotification(): Observable<string> {
    return this.notificationService.ping();
  }
}
