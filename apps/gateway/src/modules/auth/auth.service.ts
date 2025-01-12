import { Inject, Injectable } from '@nestjs/common';
import { AuthCommand, MicroServiceClient } from '@qushah/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject(MicroServiceClient.AUTH_CLIENT)
    private readonly authClient: ClientProxy,
  ) {}

  ping(): Observable<any> {
    return this.authClient.send({ cmd: AuthCommand.PING_AUTH }, {});
  }
}
