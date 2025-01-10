import { Module } from '@nestjs/common';
import { OrchestratorController } from './orchestrator.controller';
import { OrchestratorService } from './orchestrator.service';
import { QushahConfigModule } from '@libs/config/config.module';
import { ClientProxyModule } from '@libs/client-proxy/client-proxy.module';
import { MicroServiceClient } from '@libs/common/enums';

@Module({
  imports: [
    QushahConfigModule,
    ClientProxyModule.register(MicroServiceClient.ORCHESTRATOR_CLIENT),
  ],
  controllers: [OrchestratorController],
  providers: [OrchestratorService],
})
export class OrchestratorModule {}
