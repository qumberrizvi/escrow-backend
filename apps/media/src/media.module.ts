import { Module } from '@nestjs/common';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';
import { CommonModule } from '@qushah/common';

@Module({
  imports: [CommonModule],
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule {}
