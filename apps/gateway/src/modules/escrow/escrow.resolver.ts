import { Query, Resolver } from '@nestjs/graphql';
import { EscrowService } from './escrow.service';
import { Observable } from 'rxjs';

@Resolver()
export class EscrowResolver {
  constructor(private readonly escrowService: EscrowService) {}

  @Query(() => String)
  pingEscrow(): Observable<any> {
    return this.escrowService.ping();
  }
}
