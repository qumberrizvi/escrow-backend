import { Controller } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { MessagePattern } from '@nestjs/microservices';
import { NotificationCommand } from '@qushah/common';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @MessagePattern({ cmd: NotificationCommand.PING_NOTIFICATION })
  getHello(): string {
    return this.notificationService.getHello();
  }
}
