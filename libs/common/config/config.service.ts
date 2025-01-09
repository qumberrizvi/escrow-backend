import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { environmentConstant } from '../constants/environment.constant';

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService) {}

  getRedisConfig() {
    const host = this.configService.get<string>(environmentConstant.REDIS_HOST);
    const port = this.configService.get<number>(environmentConstant.REDIS_PORT);
    return { host, port };
  }
}
