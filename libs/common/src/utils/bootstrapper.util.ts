import { Logger } from '@nestjs/common';
import { ConfigHelper } from '@qushah/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export class Bootstrapper {
  static async init(module: any) {
    const logger = new Logger(`${module.name}Bootstrap`);
    const configHelper = await ConfigHelper.getInstance();
    const redisConfig = configHelper.redisConfig;
    const app = await NestFactory.create(module);
    app.connectMicroservice<MicroserviceOptions>({
      transport: Transport.REDIS,
      options: {
        host: redisConfig.host,
        port: redisConfig.port,
      },
    });
    await app.startAllMicroservices();
    const port: number = configHelper.getModulePort(module.name);
    await app.listen(port);
    logger.log(`Microservice listening on port ${port}...`);
  }
}
