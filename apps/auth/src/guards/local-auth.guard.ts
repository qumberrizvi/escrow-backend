import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  // noinspection JSUnusedGlobalSymbols
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const gqlReq = ctx.getContext().req;
    if (gqlReq) {
      const { loginInput } = ctx.getArgs();
      gqlReq.body = loginInput;
      return gqlReq;
    }
    return context.switchToHttp().getRequest();
  }
}
