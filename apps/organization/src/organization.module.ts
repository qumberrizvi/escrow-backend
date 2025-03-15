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
import { JwtAuthGuardModule } from '@qushah/common';

@Module({
  imports: [
    CommonModule,
    GraphQLMicroserviceModule,
    JwtAuthGuardModule.register(),
    DatabaseModule.init(SCHEMA.ORGANIZATION),
    DatabaseModule.loadEntities([Organization, OrganizationMetadata]),
  ],
  controllers: [OrganizationController],
  providers: [OrganizationService, OrganizationResolver],
})
export class OrganizationModule {}
