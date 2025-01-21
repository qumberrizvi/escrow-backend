import { MediaModule } from './media.module';
import { Bootstrapper } from '@qushah/common';

async function bootstrap() {
  await Bootstrapper.init(MediaModule);
}

bootstrap();
