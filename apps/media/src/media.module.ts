import { Module } from '@nestjs/common';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';
import { QushahConfigModule } from '@libs/config/config.module';
import { ClientProxyModule } from '@libs/client-proxy/client-proxy.module';
import { MicroServiceClient } from '@libs/common/enums';

@Module({
  imports: [
    QushahConfigModule,
    ClientProxyModule.register(MicroServiceClient.MEDIA_CLIENT),
  ],
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule {}
