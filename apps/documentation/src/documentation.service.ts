import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentationService {
  getHello(): string {
    return 'Hello World!';
  }
}
