import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { CommonModule, GraphQLMicroserviceModule } from '@qushah/common';
import { PaymentResolver } from './payment.resolver';

@Module({
  imports: [CommonModule, GraphQLMicroserviceModule],
  controllers: [PaymentController],
  providers: [PaymentService, PaymentResolver],
})
export class PaymentModule {}
