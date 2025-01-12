import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import {
  ClientsModule,
  CommonModule,
  MicroServiceClient,
} from '@qushah/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GatewayResolver } from './gateway.resolver';

@Module({
  imports: [
    CommonModule,
    ClientsModule.register(...Object.values(MicroServiceClient)),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
    }),
  ],
  controllers: [GatewayController],
  providers: [GatewayService, GatewayResolver],
})
export class GatewayModule {}
