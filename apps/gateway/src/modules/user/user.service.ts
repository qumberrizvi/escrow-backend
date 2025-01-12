import { Inject, Injectable } from '@nestjs/common';
import { MicroServiceClient, UserCommand } from '@qushah/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @Inject(MicroServiceClient.USER_CLIENT)
    private readonly userClient: ClientProxy,
  ) {}

  ping(): Observable<string> {
    return this.userClient.send({ cmd: UserCommand.PING_USER }, {});
  }
}
