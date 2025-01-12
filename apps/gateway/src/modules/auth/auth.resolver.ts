import { Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => String)
  pingAuth(): Observable<any> {
    return this.authService.ping();
  }
}
