import { Controller, Get } from '@nestjs/common';
import { EscrowService } from './escrow.service';

@Controller()
export class EscrowController {
  constructor(private readonly escrowService: EscrowService) {}

  @Get()
  getHello(): string {
    return this.escrowService.getHello();
  }
}
