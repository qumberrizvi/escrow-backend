import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';
import { UserCommand } from '@qushah/common';
import { ValidateUserInput } from './dtos/validate-user.input';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: UserCommand.PING_USER })
  getHello(): string {
    return this.userService.getHello();
  }

  @MessagePattern({ cmd: UserCommand.FIND_USER_BY_CREDENTIALS })
  findByCredentials(input: ValidateUserInput) {
    return this.userService.validate(input);
  }
}
