import { Test, TestingModule } from '@nestjs/testing';
import { EscrowResolver } from './escrow.resolver';
import { EscrowService } from './escrow.service';

describe('EscrowResolver', () => {
  let resolver: EscrowResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EscrowResolver, EscrowService],
    }).compile();

    resolver = module.get<EscrowResolver>(EscrowResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
