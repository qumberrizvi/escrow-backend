import { Controller } from '@nestjs/common';
import { PropertyService } from './property.service';
import { MessagePattern } from '@nestjs/microservices';
import { PropertyCommand } from '@qushah/common';

@Controller()
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @MessagePattern({ cmd: PropertyCommand.PING_PROPERTY })
  getHello(): string {
    return this.propertyService.getHello();
  }
}
