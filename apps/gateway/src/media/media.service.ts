import { Inject, Injectable } from '@nestjs/common';
import { MediaCommand, MicroServiceClient } from '@qushah/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class MediaService {
  constructor(
    @Inject(MicroServiceClient.MEDIA_CLIENT)
    private readonly mediaClient: ClientProxy,
  ) {}

  ping(): Observable<string> {
    return this.mediaClient.send({ cmd: MediaCommand.PING_MEDIA }, {});
  }
}
