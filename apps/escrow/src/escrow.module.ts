import { Module } from '@nestjs/common';
import { EscrowController } from './escrow.controller';
import { EscrowService } from './escrow.service';
import { CommonModule } from '@qushah/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { EscrowResolver } from './escrow.resolver';

@Module({
  imports: [
    CommonModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      sortSchema: true,
    }),
  ],
  controllers: [EscrowController],
  providers: [EscrowService, EscrowResolver],
})
export class EscrowModule {}
