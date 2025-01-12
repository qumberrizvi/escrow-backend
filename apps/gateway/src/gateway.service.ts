import { Injectable } from '@nestjs/common';

@Injectable()
export class GatewayService {
  constructor() {}

  ping(): string {
    return 'Hello from Gateway Service!';
  }
}
