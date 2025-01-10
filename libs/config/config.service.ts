import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { environmentConstant } from '@libs/common/constants';

@Injectable()
export class QushahConfigService {
  constructor(private readonly configService: ConfigService) {}

  getRedisConfig() {
    const host = this.configService.get<string>(environmentConstant.REDIS_HOST);
    const port = this.configService.get<number>(environmentConstant.REDIS_PORT);
    return { host, port };
  }

  getConfig<T>(key: string): T {
    return this.configService.get<T>(key);
  }
}
