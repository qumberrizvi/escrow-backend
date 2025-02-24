import { OrganizationModule } from './organization.module';
import { Bootstrapper } from '@qushah/common';

async function bootstrap() {
  await Bootstrapper.init(OrganizationModule);
}

bootstrap();
