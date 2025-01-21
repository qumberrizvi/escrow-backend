import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class EscrowResolver {
  @Query(() => String, { name: 'pingEscrow' })
  ping(): string {
    return 'pong';
  }
}
