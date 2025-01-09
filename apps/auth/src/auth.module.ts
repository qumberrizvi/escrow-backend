import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { QushahConfigModule } from '../../../libs/common/config/config.module';

@Module({
  imports: [QushahConfigModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
