import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from '../../entities/external/user.entity';
import { Organization } from '../../entities/organization.entity';
import { OrganizationService } from '../../organization.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly organizationService: OrganizationService) {}

  @ResolveField(() => Organization, { nullable: true })
  async organization(@Parent() user: User): Promise<Organization | null> {
    if (!user.organizationId) return null;
    return this.organizationService.findOne({ id: user.organizationId });
  }
}
