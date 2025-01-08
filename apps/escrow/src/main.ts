import { NestFactory } from '@nestjs/core';
import { EscrowModule } from './escrow.module';

async function bootstrap() {
  const app = await NestFactory.create(EscrowModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
