import { Controller } from '@nestjs/common';
import { OrchestratorService } from './orchestrator.service';
import { MessagePattern } from '@nestjs/microservices';
import { OrchestratorCommand } from '@qushah/common';

@Controller()
export class OrchestratorController {
  constructor(private readonly orchestratorService: OrchestratorService) {}

  @MessagePattern({ cmd: OrchestratorCommand.PING_ORCHESTRATOR })
  getHello(): string {
    return this.orchestratorService.getHello();
  }
}
