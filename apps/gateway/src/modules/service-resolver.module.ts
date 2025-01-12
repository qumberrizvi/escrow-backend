import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EscrowModule } from './escrow/escrow.module';
import { MediaModule } from './media/media.module';
import { NotificationModule } from './notification/notification.module';
import { OrchestratorModule } from './orchestrator/orchestrator.module';
import { PaymentModule } from './payment/payment.module';
import { PropertyModule } from './property/property.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthModule,
    EscrowModule,
    MediaModule,
    NotificationModule,
    OrchestratorModule,
    PaymentModule,
    PropertyModule,
    UserModule,
  ],
})
export class ServiceResolverModule {}
