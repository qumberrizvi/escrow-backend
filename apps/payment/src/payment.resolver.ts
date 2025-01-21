import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class PaymentResolver {
  @Query(() => String, { name: 'pingPayment' })
  ping(): string {
    return 'pong';
  }
}
