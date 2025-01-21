import { AuthModule } from './auth.module';
import { Bootstrapper } from '@qushah/common';

async function bootstrap() {
  await Bootstrapper.init(AuthModule);
}

bootstrap();
