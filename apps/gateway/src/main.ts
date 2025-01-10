import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigHelper } from '@libs/config/config.helper';
import { environmentConstant } from '@libs/common/constants';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const configHelper = await ConfigHelper.getInstance();
  const redisConfig = configHelper.getRedisConfig();
  const logger = new Logger('GatewayBootstrap');

  const app = await NestFactory.create(GatewayModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      host: redisConfig.host,
      port: redisConfig.port,
    },
  });

  await app.startAllMicroservices();

  const gatewayPort = configHelper.getConfig<number>(
    environmentConstant.GATEWAY_PORT,
  );
  await app.listen(gatewayPort);
  logger.log(`🚀 Server started on port ${gatewayPort}.`);
}

bootstrap();
