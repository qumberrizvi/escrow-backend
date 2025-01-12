import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentConstant } from '../constants';

@Injectable()
export class QushahConfigService {
  constructor(private readonly configService: ConfigService) {}

  getRedisConfig() {
    const host = this.configService.get<string>(EnvironmentConstant.REDIS_HOST);
    const port = this.configService.get<number>(EnvironmentConstant.REDIS_PORT);
    return { host, port };
  }

  getConfig<T>(key: string): T {
    return this.configService.get<T>(key);
  }
}
