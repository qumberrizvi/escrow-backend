import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';
import { AuthCommand } from '@qushah/common/constants/commands';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: AuthCommand.PING_AUTH })
  getHello(): string {
    return this.authService.getHello();
  }
}
