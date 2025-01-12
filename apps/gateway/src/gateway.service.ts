import { Inject, Injectable, Logger } from '@nestjs/common';
import { MicroServiceClient } from '@qushah/common';
import { ClientProxy } from '@nestjs/microservices';
import { AuthCommand } from '@qushah/common/constants/commands';
import { Observable } from 'rxjs';

@Injectable()
export class GatewayService {
  private readonly logger = new Logger(GatewayService.name);

  constructor(
    @Inject(MicroServiceClient.AUTH_CLIENT)
    private readonly authClient: ClientProxy,
  ) {}

  ping(): string {
    return 'Hello from Gateway Service!';
  }

  async pingAuth(): Promise<Observable<any>> {
    this.logger.debug('Message sent');
    return this.authClient.send({ cmd: AuthCommand.PING_AUTH }, {});
  }
}
