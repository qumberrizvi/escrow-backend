import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QushahConfigService {
  constructor(private readonly configService: ConfigService) {}

  getConfig<T>(key: string): T {
    return this.configService.get<T>(key);
  }
}
