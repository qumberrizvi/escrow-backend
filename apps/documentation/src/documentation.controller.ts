import { Controller, Get } from '@nestjs/common';
import { DocumentationService } from './documentation.service';

@Controller()
export class DocumentationController {
  constructor(private readonly documentationService: DocumentationService) {}

  @Get()
  getHello(): string {
    return this.documentationService.getHello();
  }
}
