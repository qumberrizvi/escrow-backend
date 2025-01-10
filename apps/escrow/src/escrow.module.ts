import { Module } from '@nestjs/common';
import { EscrowController } from './escrow.controller';
import { EscrowService } from './escrow.service';
import { QushahConfigModule } from '@libs/config/config.module';
import { ClientProxyModule } from '@libs/client-proxy/client-proxy.module';
import { MicroServiceClient } from '@libs/common/enums';

@Module({
  imports: [
    QushahConfigModule,
    ClientProxyModule.register(MicroServiceClient.ESCROW_CLIENT),
  ],
  controllers: [EscrowController],
  providers: [EscrowService],
})
export class EscrowModule {}
