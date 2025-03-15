import { ConfigHelper } from '@qushah/common';
import { randomBytes } from 'crypto';

export class JwtUtil {
  static async secret(): Promise<string> {
    const configHelper = await ConfigHelper.getInstance();
    return configHelper.getConfig('JWT_SECRET');
  }

  static generateNonce(length: number = 16): string {
    return randomBytes(length).toString('hex');
  }
}
