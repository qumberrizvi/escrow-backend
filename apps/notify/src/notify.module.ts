import { Module } from '@nestjs/common';
import { NotifyController } from './notify.controller';
import { NotifyService } from './notify.service';
import { QushahConfigModule } from '../../../libs/common/config/config.module';

@Module({
  imports: [QushahConfigModule],
  controllers: [NotifyController],
  providers: [NotifyService],
})
export class NotifyModule {}
