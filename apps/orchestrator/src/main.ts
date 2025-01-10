import { NestFactory } from '@nestjs/core';
import { OrchestratorModule } from './orchestrator.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigHelper } from '@libs/config/config.helper';

async function bootstrap() {
  const configHelper = await ConfigHelper.getInstance();
  const redisConfig = configHelper.getRedisConfig();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrchestratorModule,
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
