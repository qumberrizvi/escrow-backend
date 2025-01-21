import { PaymentModule } from './payment.module';
import { Bootstrapper } from '@qushah/common';

async function bootstrap() {
  await Bootstrapper.init(PaymentModule);
}

bootstrap();
