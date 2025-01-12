import { Controller } from '@nestjs/common';
import { EscrowService } from './escrow.service';
import { MessagePattern } from '@nestjs/microservices';
import { EscrowCommand } from '@qushah/common';

@Controller()
export class EscrowController {
  constructor(private readonly escrowService: EscrowService) {}

  @MessagePattern({ cmd: EscrowCommand.PING_ESCROW })
  getHello(): string {
    return this.escrowService.getHello();
  }
}
