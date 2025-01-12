import { Controller } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { MessagePattern } from '@nestjs/microservices';
import { PaymentCommand } from '@qushah/common';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @MessagePattern({ cmd: PaymentCommand.PING_PAYMENT })
  getHello(): string {
    return this.paymentService.getHello();
  }
}
