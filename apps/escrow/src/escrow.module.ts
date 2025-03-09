import { Module } from '@nestjs/common';
import { EscrowController } from './escrow.controller';
import { EscrowService } from './escrow.service';
import { CommonModule, GraphQLMicroserviceModule } from '@qushah/common';
import { EscrowResolver } from './resolvers/escrow.resolver';

@Module({
  imports: [CommonModule, GraphQLMicroserviceModule],
  controllers: [EscrowController],
  providers: [EscrowService, EscrowResolver],
})
export class EscrowModule {}
