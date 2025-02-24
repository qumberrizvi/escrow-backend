import { Injectable } from '@nestjs/common';

@Injectable()
export class OrganizationService {
  getHello(): string {
    return 'Hello from Organization Service!';
  }
}
