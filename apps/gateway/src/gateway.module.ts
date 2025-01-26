import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import {
  CommonModule,
  EnvironmentConstant,
  GraphQLGatewayModule,
} from '@qushah/common';

const {
  AUTH_HOST,
  ESCROW_HOST,
  MEDIA_HOST,
  NOTIFICATION_HOST,
  PAYMENT_HOST,
  PROPERTY_HOST,
  USER_HOST,
} = EnvironmentConstant;

@Module({
  imports: [
    CommonModule,
    GraphQLGatewayModule.register(
      AUTH_HOST,
      ESCROW_HOST,
      MEDIA_HOST,
      NOTIFICATION_HOST,
      PAYMENT_HOST,
      PROPERTY_HOST,
      USER_HOST,
    ),
  ],
  providers: [GatewayService],
})
export class GatewayModule {}
