import { NestFactory } from '@nestjs/core';
import { DocumentationModule } from './documentation.module';

async function bootstrap() {
  const app = await NestFactory.create(DocumentationModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
