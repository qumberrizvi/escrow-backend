import { UserModule } from './user.module';
import { Bootstrapper } from '@qushah/common';

async function bootstrap() {
  await Bootstrapper.init(UserModule);
}

bootstrap();
