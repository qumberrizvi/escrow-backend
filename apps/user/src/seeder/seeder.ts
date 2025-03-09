import { NestFactory } from '@nestjs/core';
import { UserModule } from '../user.module';
import { SeederService } from './seeder.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(UserModule);
  const seeder = app.get(SeederService);
  await seeder.seed();
  await app.close();
}

bootstrap().catch((err) => {
  console.error('Seeding failed!', err);
  process.exit(1);
});
