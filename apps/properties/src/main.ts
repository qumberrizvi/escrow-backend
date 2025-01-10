import { NestFactory } from '@nestjs/core';
import { PropertiesModule } from './properties.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigHelper } from '@libs/config/config.helper';

async function bootstrap() {
  const configHelper = await ConfigHelper.getInstance();
  const redisConfig = configHelper.getRedisConfig();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PropertiesModule,
    {
      transport: Transport.REDIS,
      options: {
        host: redisConfig.host,
        port: redisConfig.port,
      },
    },
  );
  await app.listen();
}

bootstrap();
