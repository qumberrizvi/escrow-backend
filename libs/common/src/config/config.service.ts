import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  getConfig<T>(key: string): T {
    return this.configService.get<T>(key);
  }
}
