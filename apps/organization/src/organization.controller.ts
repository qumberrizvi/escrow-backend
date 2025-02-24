import { Controller } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { MessagePattern } from '@nestjs/microservices';
import { OrganizationCommand } from '@qushah/common/constants/commands/organization.command';

@Controller()
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @MessagePattern({ cmd: OrganizationCommand.PING_ORGANIZATION })
  getHello(): string {
    return this.organizationService.getHello();
  }
}
