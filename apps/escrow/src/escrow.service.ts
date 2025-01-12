import { Injectable } from '@nestjs/common';

@Injectable()
export class EscrowService {
  getHello(): string {
    return 'Hello from Escrow Service!';
  }
}
