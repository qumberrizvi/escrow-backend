import { Inject, Injectable } from '@nestjs/common';
import { EscrowCommand, MicroServiceClient } from '@qushah/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class EscrowService {
  constructor(
    @Inject(MicroServiceClient.ESCROW_CLIENT)
    private readonly escrowClient: ClientProxy,
  ) {}

  ping(): Observable<any> {
    return this.escrowClient.send({ cmd: EscrowCommand.PING_ESCROW }, {});
  }
}
