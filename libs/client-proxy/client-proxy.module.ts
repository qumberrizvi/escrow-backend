import { Module, Global, DynamicModule } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigHelper } from '@libs/config/config.helper';

@Global()
@Module({})
export class ClientProxyModule {
  static async register(name: string): Promise<DynamicModule> {
    const configHelper = await ConfigHelper.getInstance();
    const { host, port } = configHelper.getRedisConfig();

    return {
      module: ClientProxyModule,
      imports: [
        ClientsModule.register([
          {
            name,
            transport: Transport.REDIS,
            options: {
              host,
              port,
            },
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
