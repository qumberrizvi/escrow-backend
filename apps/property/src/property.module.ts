import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { CommonModule, GraphQLMicroserviceModule } from '@qushah/common';
import { PropertyResolver } from './resolvers/property.resolver';
import { JwtAuthGuardModule } from '@qushah/common';

@Module({
  imports: [
    CommonModule,
    GraphQLMicroserviceModule,
    JwtAuthGuardModule.register(),
  ],
  controllers: [PropertyController],
  providers: [PropertyService, PropertyResolver],
})
export class PropertyModule {}
