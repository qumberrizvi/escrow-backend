import { Module } from '@nestjs/common';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';
import { CommonModule, GraphQLMicroserviceModule } from '@qushah/common';
import { MediaResolver } from './resolvers/media.resolver';

@Module({
  imports: [CommonModule, GraphQLMicroserviceModule],
  controllers: [MediaController],
  providers: [MediaService, MediaResolver],
})
export class MediaModule {}
