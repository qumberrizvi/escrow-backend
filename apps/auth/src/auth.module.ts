import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CommonModule, GraphQLMicroserviceModule } from '@qushah/common';
import { AuthResolver } from './resolvers/auth.resolver';

@Module({
  imports: [CommonModule, GraphQLMicroserviceModule],
  controllers: [AuthController],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
