import { NestFactory } from '@nestjs/core';
import { PropertyModule } from './property.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigHelper } from '@qushah/common/config/config.helper';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('PropertyBootstrap');
  const configHelper = await ConfigHelper.getInstance();
  const redisConfig = configHelper.getRedisConfig();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PropertyModule,
    {
      transport: Transport.REDIS,
      options: {
        host: redisConfig.host,
        port: redisConfig.port,
      },
    },
  );
  await app.listen();
  logger.log('Microservice listening...');
}

bootstrap();
