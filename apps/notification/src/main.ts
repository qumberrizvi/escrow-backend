import { NotificationModule } from './notification.module';
import { Bootstrapper } from '@qushah/common';

async function bootstrap() {
  await Bootstrapper.init(NotificationModule);
}

bootstrap();
