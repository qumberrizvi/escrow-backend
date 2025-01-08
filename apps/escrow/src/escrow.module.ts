import { Module } from '@nestjs/common';
import { EscrowController } from './escrow.controller';
import { EscrowService } from './escrow.service';

@Module({
  imports: [],
  controllers: [EscrowController],
  providers: [EscrowService],
})
export class EscrowModule {}
