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
import { AuthModule } from './auth/auth.module';
import { EscrowModule } from './escrow/escrow.module';
import { MediaModule } from './media/media.module';
import { NotificationModule } from './notification/notification.module';
import { OrchestratorModule } from './orchestrator/orchestrator.module';
import { PaymentModule } from './payment/payment.module';
import { PropertyModule } from './property/property.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    CommonModule,
    ClientsModule.register(...Object.values(MicroServiceClient)),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
    }),
    AuthModule,
    EscrowModule,
    MediaModule,
    NotificationModule,
    OrchestratorModule,
    PaymentModule,
    PropertyModule,
    UserModule,
  ],
  controllers: [GatewayController],
  providers: [GatewayService, GatewayResolver],
})
export class GatewayModule {}
