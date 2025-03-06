import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Organization } from '../entities/external/organization.entity';
import { User } from '../entities/user.entity';
import { UserService } from '../user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String, { name: 'pingUser' })
  ping(): string {
    return 'pong';
  }

  @ResolveField(() => Organization, { nullable: true })
  organization(@Parent() user: User): Promise<Organization> {
    return this.userService.getOrganization(user);
  }
}
