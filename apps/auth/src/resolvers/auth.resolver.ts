import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from '../auth.service';
import { LoginInput } from '../dtos/login.input';
import { Login } from '../entities/login-entity';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Public } from '@qushah/common';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Query(() => String, { name: 'pingAuth' })
  ping(): string {
    return 'pong';
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Mutation(() => Login)
  login(
    @Args('loginInput') _input: LoginInput,
    @Context() context: any,
  ): Login {
    return this.authService.login(context.req.user);
  }
}
