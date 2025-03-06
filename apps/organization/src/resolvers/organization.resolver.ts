import { Query, Resolver } from '@nestjs/graphql';
import { Organization } from '../entities/organization.entity';
import { OrganizationService } from '../organization.service';

@Resolver()
export class OrganizationResolver {
  constructor(private readonly organizationService: OrganizationService) {}

  @Query(() => String, { name: 'pingOrganization' })
  ping(): string {
    return 'pong';
  }

  @Query(() => [Organization], { nullable: true })
  organizations(): Promise<Organization[]> {
    return this.organizationService.findAll();
  }
}
