import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import {
  CommonModule,
  DatabaseModule,
  GraphQLMicroserviceModule,
} from '@qushah/common';
import { OrganizationResolver } from './organization.resolver';
import { Organization } from './entities/organization.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationMetadata } from './entities/organization-metadata.entity';

@Module({
  imports: [
    DatabaseModule.forRoot(
      [__dirname + '/entities/*.entity{.ts,.js}'],
      'organization',
    ),
    TypeOrmModule.forFeature([Organization, OrganizationMetadata]),
    CommonModule,
    GraphQLMicroserviceModule,
  ],
  controllers: [OrganizationController],
  providers: [OrganizationService, OrganizationResolver],
})
export class OrganizationModule {}
