import { Query, Resolver } from '@nestjs/graphql';
import { Public } from '@qushah/common';

@Resolver()
export class PaymentResolver {
  @Public()
  @Query(() => String, { name: 'pingPayment' })
  ping(): string {
    return 'pong';
  }
}
