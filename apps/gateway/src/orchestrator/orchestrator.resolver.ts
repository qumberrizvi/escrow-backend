import { Query, Resolver } from '@nestjs/graphql';
import { OrchestratorService } from './orchestrator.service';
import { Observable } from 'rxjs';

@Resolver()
export class OrchestratorResolver {
  constructor(private readonly orchestratorService: OrchestratorService) {}

  @Query(() => String)
  pingOrchestrator(): Observable<string> {
    return this.orchestratorService.ping();
  }
}
