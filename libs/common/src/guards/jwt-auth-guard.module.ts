import { DynamicModule, Module } from '@nestjs/common';
import { ClientsModule } from '../clients';
import { MicroServiceClient } from '../enums';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '../guards';

@Module({})
export class JwtAuthGuardModule {
  static register(): DynamicModule {
    return {
      module: JwtAuthGuardModule,
      imports: [ClientsModule.register(MicroServiceClient.AUTH_CLIENT)],
      providers: [
        {
          provide: APP_GUARD,
          useClass: JwtAuthGuard,
        },
      ],
    };
  }
}
