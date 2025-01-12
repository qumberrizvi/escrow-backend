import { Module } from '@nestjs/common';
import { OrchestratorService } from './orchestrator.service';
import { OrchestratorResolver } from './orchestrator.resolver';

@Module({
  providers: [OrchestratorResolver, OrchestratorService],
})
export class OrchestratorModule {}
