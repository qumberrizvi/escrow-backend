import { Inject, Injectable } from '@nestjs/common';
import { MicroServiceClient, NotificationCommand } from '@qushah/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(MicroServiceClient.NOTIFICATION_CLIENT)
    private readonly notificationClient: ClientProxy,
  ) {}

  ping(): Observable<string> {
    return this.notificationClient.send(
      { cmd: NotificationCommand.PING_NOTIFICATION },
      {},
    );
  }
}
