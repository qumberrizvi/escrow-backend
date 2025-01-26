import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CommonModule, GraphQLMicroserviceModule } from '@qushah/common';
import { UserResolver } from './user.resolver';

@Module({
  imports: [CommonModule, GraphQLMicroserviceModule],
  controllers: [UserController],
  providers: [UserService, UserResolver],
})
export class UserModule {}
