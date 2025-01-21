import { PropertyModule } from './property.module';
import { Bootstrapper } from '@qushah/common';

async function bootstrap() {
  await Bootstrapper.init(PropertyModule);
}

bootstrap();
