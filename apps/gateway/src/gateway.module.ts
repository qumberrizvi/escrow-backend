import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import {
  CommonModule,
  ENVIRONMENT,
  GraphQLGatewayModule,
} from '@qushah/common';

const {
  AUTH_HOST,
  ESCROW_HOST,
  MEDIA_HOST,
  NOTIFICATION_HOST,
  ORGANIZATION_HOST,
  PAYMENT_HOST,
  PROPERTY_HOST,
  USER_HOST,
} = ENVIRONMENT;

@Module({
  imports: [
    CommonModule,
    GraphQLGatewayModule.register(
      AUTH_HOST,
      ESCROW_HOST,
      MEDIA_HOST,
      NOTIFICATION_HOST,
      ORGANIZATION_HOST,
      PAYMENT_HOST,
      PROPERTY_HOST,
      USER_HOST,
    ),
  ],
  providers: [GatewayService],
})
export class GatewayModule {}
