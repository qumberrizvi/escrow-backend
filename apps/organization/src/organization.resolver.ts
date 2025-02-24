import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class OrganizationResolver {
  @Query(() => String, { name: 'pingOrganization' })
  ping(): string {
    return 'pong';
  }
}
