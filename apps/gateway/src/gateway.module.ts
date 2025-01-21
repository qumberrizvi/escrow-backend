import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { CommonModule, EnvironmentConstant } from '@qushah/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { IntrospectAndCompose } from '@apollo/gateway';
import { SubgraphsBuilder } from '@qushah/common';

@Module({
  imports: [
    CommonModule,

    GraphQLModule.forRootAsync<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      useFactory: async () => {
        const {
          AUTH_HOST,
          ESCROW_HOST,
          MEDIA_HOST,
          NOTIFICATION_HOST,
          PAYMENT_HOST,
          PROPERTY_HOST,
          USER_HOST,
        } = EnvironmentConstant;
        return {
          gateway: {
            supergraphSdl: new IntrospectAndCompose({
              subgraphs: await SubgraphsBuilder.build(
                AUTH_HOST,
                ESCROW_HOST,
                MEDIA_HOST,
                NOTIFICATION_HOST,
                PAYMENT_HOST,
                PROPERTY_HOST,
                USER_HOST,
              ),
            }),
          },
        };
      },
    }),
  ],
  providers: [GatewayService],
})
export class GatewayModule {}
