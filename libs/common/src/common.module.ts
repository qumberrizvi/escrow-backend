import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { AppConfigModule } from '@qushah/common/config';

@Module({
  imports: [AppConfigModule],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
