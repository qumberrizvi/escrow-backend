import { Test, TestingModule } from '@nestjs/testing';
import { EscrowController } from './escrow.controller';
import { EscrowService } from './escrow.service';

describe('EscrowController', () => {
  let escrowController: EscrowController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EscrowController],
      providers: [EscrowService],
    }).compile();

    escrowController = app.get<EscrowController>(EscrowController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(escrowController.getHello()).toBe('Hello World!');
    });
  });
});
