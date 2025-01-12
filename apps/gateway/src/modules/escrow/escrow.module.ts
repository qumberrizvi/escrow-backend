import { Module } from '@nestjs/common';
import { EscrowService } from './escrow.service';
import { EscrowResolver } from './escrow.resolver';

@Module({
  providers: [EscrowResolver, EscrowService],
})
export class EscrowModule {}
