import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MicroServiceClient } from '@qushah/common';

describe('AuthController', () => {
  let authController: AuthController;

  const mockClientProxy = {
    send: jest.fn(() => ({
      toPromise: jest.fn().mockResolvedValue({}),
    })),
    emit: jest.fn(),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        { provide: MicroServiceClient.AUTH_CLIENT, useValue: mockClientProxy },
      ],
    }).compile();

    authController = app.get<AuthController>(AuthController);
  });

  describe('root', () => {
    it('should return "Hello from Auth Service!"', () => {
      expect(authController.getHello()).toBe('Hello from Auth Service!');
    });
  });
});
