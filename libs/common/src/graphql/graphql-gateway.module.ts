import { Module, Global, DynamicModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { IntrospectAndCompose } from '@apollo/gateway';
import { SubgraphsBuilder } from '@qushah/common';

@Global()
@Module({})
export class GraphQLGatewayModule {
  static async register(...subgraphNames: string[]): Promise<DynamicModule> {
    return {
      module: GraphQLGatewayModule,
      imports: [
        GraphQLModule.forRootAsync<ApolloGatewayDriverConfig>({
          driver: ApolloGatewayDriver,
          useFactory: async () => {
            return {
              gateway: {
                supergraphSdl: new IntrospectAndCompose({
                  subgraphs: await SubgraphsBuilder.build(...subgraphNames),
                }),
              },
            };
          },
        }),
      ],
      exports: [GraphQLModule],
    };
  }
}
