import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { QushahConfigModule } from '@libs/config/config.module';
import { ClientProxyModule } from '@libs/client-proxy/client-proxy.module';
import { MicroServiceClient } from '@libs/common/enums';

@Module({
  imports: [
    QushahConfigModule,
    ClientProxyModule.register(MicroServiceClient.PAYMENTS_CLIENT),
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
