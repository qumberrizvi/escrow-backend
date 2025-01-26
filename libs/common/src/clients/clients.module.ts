import { Module, Global, DynamicModule } from '@nestjs/common';
import {
  ClientsModule as NestClientsModule,
  ClientsModuleOptions,
  Transport,
} from '@nestjs/microservices';
import { ConfigHelper } from '@qushah/common/config/config.helper';

@Global()
@Module({})
export class ClientsModule {
  static async register(...names: string[]): Promise<DynamicModule> {
    const configHelper = await ConfigHelper.getInstance();
    const { host, port } = configHelper.redisConfig;
    const clients: ClientsModuleOptions = names.map((name) => ({
      name,
      transport: Transport.REDIS,
      options: {
        host,
        port,
      },
    }));
    return {
      module: ClientsModule,
      imports: [NestClientsModule.register(clients)],
      exports: [NestClientsModule],
    };
  }
}
