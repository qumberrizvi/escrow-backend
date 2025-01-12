import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';
import { UserCommand } from '@qushah/common';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: UserCommand.PING_USER })
  getHello(): string {
    return this.userService.getHello();
  }
}
