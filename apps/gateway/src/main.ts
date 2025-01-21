import { GatewayModule } from './gateway.module';
import { Bootstrapper } from '@qushah/common';

async function bootstrap() {
  await Bootstrapper.init(GatewayModule);
}

bootstrap();
