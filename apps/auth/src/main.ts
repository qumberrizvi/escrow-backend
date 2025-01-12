import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigHelper } from '@qushah/common/config/config.helper';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('AuthBootstrap');
  const configHelper = await ConfigHelper.getInstance();
  const redisConfig = configHelper.getRedisConfig();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    {
      transport: Transport.REDIS,
      options: {
        host: redisConfig.host,
        port: redisConfig.port,
      },
    },
  );
  logger.debug('App started');
  await app.listen();
  logger.debug('Auth Microservice listening');
}

bootstrap();
