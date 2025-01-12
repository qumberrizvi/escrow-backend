import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { CommonModule } from '@qushah/common';

@Module({
  imports: [CommonModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
