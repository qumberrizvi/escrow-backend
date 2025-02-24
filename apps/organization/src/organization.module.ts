import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { CommonModule, GraphQLMicroserviceModule } from '@qushah/common';
import { OrganizationResolver } from './organization.resolver';

@Module({
  imports: [CommonModule, GraphQLMicroserviceModule],
  controllers: [OrganizationController],
  providers: [OrganizationService, OrganizationResolver],
})
export class OrganizationModule {}
