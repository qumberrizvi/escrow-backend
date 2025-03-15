import { Query, Resolver } from '@nestjs/graphql';
import { Organization } from '../entities/organization.entity';
import { OrganizationService } from '../organization.service';
import { Public } from '@qushah/common';

@Resolver()
export class OrganizationResolver {
  constructor(private readonly organizationService: OrganizationService) {}

  @Public()
  @Query(() => String, { name: 'pingOrganization' })
  ping(): string {
    return 'pong';
  }

  @Query(() => [Organization], { nullable: true })
  organizations(): Promise<Organization[]> {
    return this.organizationService.findAll();
  }
}
