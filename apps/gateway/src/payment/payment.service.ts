import { Inject, Injectable } from '@nestjs/common';
import { MicroServiceClient, PaymentCommand } from '@qushah/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class PaymentService {
  constructor(
    @Inject(MicroServiceClient.PAYMENT_CLIENT)
    private readonly paymentClient: ClientProxy,
  ) {}

  ping(): Observable<string> {
    return this.paymentClient.send({ cmd: PaymentCommand.PING_PAYMENT }, {});
  }
}
