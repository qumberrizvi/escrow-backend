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
import { ServiceResolverModule } from './modules/service-resolver.module';

@Module({
  imports: [
    CommonModule,
    ServiceResolverModule,

    /* FIXME: See if this can be moved to service-resolver.module
     *  without affecting gateway.resolver */
    ClientsModule.register(...Object.values(MicroServiceClient)),

    // TODO: Move to libs/graphql
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
