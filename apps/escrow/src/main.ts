import { EscrowModule } from './escrow.module';
import { Bootstrapper } from '@qushah/common';

async function bootstrap() {
  await Bootstrapper.init(EscrowModule);
}

bootstrap();
