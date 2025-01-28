import { Test, TestingModule } from '@nestjs/testing';
import { DocumentationController } from './documentation.controller';
import { DocumentationService } from './documentation.service';

describe('DocumentationController', () => {
  let documentationController: DocumentationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DocumentationController],
      providers: [DocumentationService],
    }).compile();

    documentationController = app.get<DocumentationController>(
      DocumentationController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(documentationController.getHello()).toBe('Hello World!');
    });
  });
});
