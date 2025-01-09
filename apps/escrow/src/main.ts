import { NestFactory } from '@nestjs/core';
import { EscrowModule } from './escrow.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EscrowModule,
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6378,
      },
    },
  );
  await app.listen();
}

bootstrap();
