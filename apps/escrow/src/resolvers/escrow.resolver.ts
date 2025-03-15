import { Query, Resolver } from '@nestjs/graphql';
import { Public } from '@qushah/common';

@Resolver()
export class EscrowResolver {
  @Public()
  @Query(() => String, { name: 'pingEscrow' })
  ping(): string {
    return 'pong';
  }
}
