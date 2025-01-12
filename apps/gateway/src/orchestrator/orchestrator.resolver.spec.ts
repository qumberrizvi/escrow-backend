import { Test, TestingModule } from '@nestjs/testing';
import { OrchestratorResolver } from './orchestrator.resolver';
import { OrchestratorService } from './orchestrator.service';

describe('OrchestratorResolver', () => {
  let resolver: OrchestratorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrchestratorResolver, OrchestratorService],
    }).compile();

    resolver = module.get<OrchestratorResolver>(OrchestratorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
