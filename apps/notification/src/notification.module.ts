import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { CommonModule, GraphQLMicroserviceModule } from '@qushah/common';
import { NotificationResolver } from './notification.resolver';

@Module({
  imports: [CommonModule, GraphQLMicroserviceModule],
  controllers: [NotificationController],
  providers: [NotificationService, NotificationResolver],
})
export class NotificationModule {}
