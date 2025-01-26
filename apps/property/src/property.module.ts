import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { CommonModule, GraphQLMicroserviceModule } from '@qushah/common';
import { PropertyResolver } from './property.resolver';

@Module({
  imports: [CommonModule, GraphQLMicroserviceModule],
  controllers: [PropertyController],
  providers: [PropertyService, PropertyResolver],
})
export class PropertyModule {}
