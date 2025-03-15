import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { CommonModule, GraphQLMicroserviceModule } from '@qushah/common';
import { PaymentResolver } from './resolvers/payment.resolver';
import { JwtAuthGuardModule } from '@qushah/common';

@Module({
  imports: [
    CommonModule,
    GraphQLMicroserviceModule,
    JwtAuthGuardModule.register(),
  ],
  controllers: [PaymentController],
  providers: [PaymentService, PaymentResolver],
})
export class PaymentModule {}
