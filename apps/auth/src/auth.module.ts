import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {
  CommonModule,
  GraphQLMicroserviceModule,
  JwtAuthGuardModule,
} from '@qushah/common';
import { AuthResolver } from './resolvers/auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { JwtUtil } from './utils/jwt.util';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    CommonModule,
    GraphQLMicroserviceModule,
    JwtAuthGuardModule.register(),
    JwtModule.registerAsync({
      useFactory: async () => {
        return {
          global: true,
          secret: await JwtUtil.secret(),
          signOptions: { expiresIn: '24h' },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
