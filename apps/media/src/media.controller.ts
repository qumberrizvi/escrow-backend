import { Controller } from '@nestjs/common';
import { MediaService } from './media.service';
import { MessagePattern } from '@nestjs/microservices';
import { MediaCommand } from '@qushah/common';

@Controller()
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @MessagePattern({ cmd: MediaCommand.PING_MEDIA })
  getHello(): string {
    return this.mediaService.getHello();
  }
}
