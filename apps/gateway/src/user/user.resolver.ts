import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  pingUser(): Observable<string> {
    return this.userService.ping();
  }
}
