import { NestFactory } from '@nestjs/core';
import { EscrowModule } from './escrow.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { environmentConstant } from '../../../libs/common/constants/environment.constant';

async function bootstrap() {
  const configService = new ConfigService();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EscrowModule,
    {
      transport: Transport.REDIS,
      options: {
        host: configService.get(environmentConstant.REDIS_HOST),
        port: configService.get(environmentConstant.REDIS_PORT),
      },
    },
  );
  await app.listen();
}

bootstrap();
