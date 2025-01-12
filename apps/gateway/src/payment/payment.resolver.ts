import { Query, Resolver } from '@nestjs/graphql';
import { PaymentService } from './payment.service';
import { Observable } from 'rxjs';

@Resolver()
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @Query(() => String)
  pingPayment(): Observable<string> {
    return this.paymentService.ping();
  }
}
