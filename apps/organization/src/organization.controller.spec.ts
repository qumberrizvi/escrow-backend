import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Organization } from './entities/organization.entity';

describe('OrganizationController', () => {
  let organizationController: OrganizationController;

  const mockOrganizationRepository = {
    find: jest.fn().mockResolvedValue([]), // Mock the `find` method
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationController],
      providers: [
        OrganizationService,
        {
          provide: getRepositoryToken(Organization),
          useValue: mockOrganizationRepository, // Provide a mock repository
        },
      ],
    }).compile();

    organizationController = app.get<OrganizationController>(
      OrganizationController,
    );
  });

  describe('root', () => {
    it('should return "Hello from Organization Service!"', () => {
      expect(organizationController.getHello()).toBe(
        'Hello from Organization Service!',
      );
    });
  });
});
