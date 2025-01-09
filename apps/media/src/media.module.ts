import { Module } from '@nestjs/common';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';
import { QushahConfigModule } from '../../../libs/common/config/config.module';

@Module({
  imports: [QushahConfigModule],
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule {}
