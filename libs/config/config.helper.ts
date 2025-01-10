import { ConfigService } from '@nestjs/config';
import { QushahConfigService } from '@libs/config/config.service';
import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

export class ConfigHelper {
  private static instance: ConfigHelper;
  private qushahConfigService: QushahConfigService;

  private constructor() {}

  static async getInstance(): Promise<ConfigHelper> {
    if (!ConfigHelper.instance) {
      const appContext = await NestFactory.createApplicationContext(
        ConfigModule.forRoot({
          isGlobal: true,
        }),
      );

      const configService = appContext.get(ConfigService);
      const qushahConfigService = new QushahConfigService(configService);

      ConfigHelper.instance = new ConfigHelper();
      ConfigHelper.instance.qushahConfigService = qushahConfigService;
    }

    return ConfigHelper.instance;
  }

  getRedisConfig() {
    return this.qushahConfigService.getRedisConfig();
  }

  getConfig<T>(key: string) {
    return this.qushahConfigService.getConfig<T>(key);
  }
}
