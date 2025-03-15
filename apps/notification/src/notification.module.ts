import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { CommonModule, GraphQLMicroserviceModule } from '@qushah/common';
import { NotificationResolver } from './resolvers/notification.resolver';
import { JwtAuthGuardModule } from '@qushah/common';

@Module({
  imports: [
    CommonModule,
    GraphQLMicroserviceModule,
    JwtAuthGuardModule.register(),
  ],
  controllers: [NotificationController],
  providers: [NotificationService, NotificationResolver],
})
export class NotificationModule {}
