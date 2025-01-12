import { Controller, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';
import { AuthCommand } from '@qushah/common/constants/commands';

@Controller()
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: AuthCommand.PING_AUTH })
  getHello(): string {
    this.logger.debug('Message received in Auth Controller');
    return this.authService.getHello();
  }
}
