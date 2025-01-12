import { Module } from '@nestjs/common';
import { EscrowController } from './escrow.controller';
import { EscrowService } from './escrow.service';
import { CommonModule } from '@qushah/common';

@Module({
  imports: [CommonModule],
  controllers: [EscrowController],
  providers: [EscrowService],
})
export class EscrowModule {}
