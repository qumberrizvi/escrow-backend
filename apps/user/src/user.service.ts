import { Inject, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { MicroServiceClient } from '@qushah/common';
import { ClientProxy } from '@nestjs/microservices';
import { Organization } from './entities/external/organization.entity';
import { firstValueFrom } from 'rxjs';
import { OrganizationCommand } from '@qushah/common/constants/commands/organization.command';

@Injectable()
export class UserService {
  constructor(
    @Inject(MicroServiceClient.ORGANIZATION_CLIENT)
    private readonly organizationClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello from User Service!';
  }

  getOrganization(user: User): Promise<Organization> {
    if (!user.organizationId) return null;

    return firstValueFrom(
      this.organizationClient.send<Organization, string>(
        {
          cmd: OrganizationCommand.FIND_ORGANIZATION_BY_ID,
        },
        user.organizationId,
      ),
    );
  }
}
