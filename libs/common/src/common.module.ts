import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { QushahConfigModule } from '@qushah/common/config';

@Module({
  imports: [QushahConfigModule],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
