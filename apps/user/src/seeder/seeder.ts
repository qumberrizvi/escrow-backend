import { SeederModule } from '@qushah/common';
import { SeederService } from './seeder.service';
import { UserModule } from '../user.module';

SeederModule.seed(SeederService, UserModule);
