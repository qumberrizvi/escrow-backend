import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators';
import { ClientProxy } from '@nestjs/microservices';
import { AuthCommand } from '../constants';
import { MicroServiceClient } from '../enums';
import { lastValueFrom } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly scheme = 'bearer';

  constructor(
    private reflector: Reflector,
    @Inject(MicroServiceClient.AUTH_CLIENT)
    private readonly authClient: ClientProxy,
  ) {}

  getAuthHeader(context: ExecutionContext) {
    const gqlContext = GqlExecutionContext.create(context);
    const request = gqlContext.getContext().req;
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Unauthorized');
    }
    const broken = authHeader.split(' ');
    const scheme = broken?.[0]?.toLowerCase() as string;
    const token = broken?.[1] as string;
    if (scheme !== this.scheme) {
      throw new UnauthorizedException('Invalid scheme');
    }

    return { request, token };
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const { request, token } = this.getAuthHeader(context);
    try {
      const user = await lastValueFrom(
        this.authClient.send({ cmd: AuthCommand.VALIDATE_TOKEN }, token),
      );
      if (!user) {
        // noinspection ExceptionCaughtLocallyJS
        throw new UnauthorizedException('Unauthorized');
      }
      // Attach the user to the request for further use
      request.user = user;
      return true;
    } catch {
      throw new UnauthorizedException('Unauthorized');
    }
  }
}
