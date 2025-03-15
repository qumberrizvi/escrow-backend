import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginInput } from './dtos/login.input';
import { MicroServiceClient, UserCommand } from '@qushah/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { User } from './entities/external/user.entity';
import { JwtUtil } from './utils/jwt.util';
import { Login } from './entities/login-entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(MicroServiceClient.AUTH_CLIENT) private client: ClientProxy,
    private readonly jwtService: JwtService,
  ) {}

  getHello(): string {
    return 'Hello from Auth Service!';
  }

  findUser(input: LoginInput): Promise<User> {
    return lastValueFrom(
      this.client.send<User>(
        {
          cmd: UserCommand.FIND_USER_BY_CREDENTIALS,
        },
        input,
      ),
    );
  }

  login(user: User): Login {
    const payload = {
      sub: user.id,
      org: user.organizationId,
      nonce: JwtUtil.generateNonce(),
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  validateToken(accessToken: string) {
    try {
      const payload = this.jwtService.verify(accessToken);
      return {
        id: payload.sub,
        nonce: payload.nonce,
        organizationId: payload.org,
      };
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
