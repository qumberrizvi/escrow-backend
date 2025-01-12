import { Inject, Injectable } from '@nestjs/common';
import { MicroServiceClient, OrchestratorCommand } from '@qushah/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class OrchestratorService {
  constructor(
    @Inject(MicroServiceClient.ORCHESTRATOR_CLIENT)
    private readonly orchestratorClient: ClientProxy,
  ) {}

  ping(): Observable<string> {
    return this.orchestratorClient.send(
      {
        cmd: OrchestratorCommand.PING_ORCHESTRATOR,
      },
      {},
    );
  }
}
