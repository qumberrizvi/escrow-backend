import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { CommonModule } from '@qushah/common';

@Module({
  imports: [CommonModule],
  controllers: [PropertyController],
  providers: [PropertyService],
})
export class PropertyModule {}
