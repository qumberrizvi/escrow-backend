import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import {
  CommonModule,
  DatabaseModule,
  GraphQLMicroserviceModule,
  SCHEMA,
} from '@qushah/common';
import { OrganizationResolver } from './resolvers/organization.resolver';
import { Organization } from './entities/organization.entity';
import { OrganizationMetadata } from './entities/organization-metadata.entity';

@Module({
  imports: [
    DatabaseModule.init(SCHEMA.ORGANIZATION),
    DatabaseModule.loadEntities([Organization, OrganizationMetadata]),
    CommonModule,
    GraphQLMicroserviceModule,
  ],
  controllers: [OrganizationController],
  providers: [OrganizationService, OrganizationResolver],
})
export class OrganizationModule {}
