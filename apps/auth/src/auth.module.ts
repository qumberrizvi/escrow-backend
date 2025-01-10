import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { QushahConfigModule } from '@libs/config/config.module';
import { ClientProxyModule } from '@libs/client-proxy/client-proxy.module';
import { MicroServiceClient } from '@libs/common/enums';

@Module({
  imports: [
    QushahConfigModule,
    ClientProxyModule.register(MicroServiceClient.AUTH_CLIENT),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
