import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;

  const mockClientProxy = {
    send: jest.fn(() => ({
      toPromise: jest.fn().mockResolvedValue({}),
    })),
    emit: jest.fn(),
  };

  const mockUserService = {
    getHello: jest.fn(() => 'Hello from User Service!'),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        { provide: UserService, useValue: mockUserService },
        { provide: 'ORGANIZATION_CLIENT', useValue: mockClientProxy },
      ],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should return "Hello from User Service!"', () => {
      expect(userController.getHello()).toBe('Hello from User Service!');
    });
  });
});
