import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
  getHello(): string {
    return 'Hello from Property Service!';
  }
}
