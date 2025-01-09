import { Module } from '@nestjs/common';
import { EscrowController } from './escrow.controller';
import { EscrowService } from './escrow.service';
import { QushahConfigModule } from '../../../libs/common/config/config.module';

@Module({
  imports: [QushahConfigModule],
  controllers: [EscrowController],
  providers: [EscrowService],
})
export class EscrowModule {}
