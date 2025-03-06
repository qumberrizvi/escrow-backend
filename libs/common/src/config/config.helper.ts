import { ConfigService } from '@nestjs/config';
import { AppConfigService } from './config.service';
import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { ENVIRONMENT } from '@qushah/common';

export class ConfigHelper {
  private static instance: ConfigHelper;
  private appConfigService: AppConfigService;

  private constructor() {}

  static async getInstance(): Promise<ConfigHelper> {
    if (!ConfigHelper.instance) {
      const appContext = await NestFactory.createApplicationContext(
        ConfigModule.forRoot({
          isGlobal: true,
        }),
      );

      const configService = appContext.get(ConfigService);
      const appConfigService = new AppConfigService(configService);

      ConfigHelper.instance = new ConfigHelper();
      ConfigHelper.instance.appConfigService = appConfigService;
    }

    return ConfigHelper.instance;
  }

  get redisConfig() {
    const host = this.getConfig<string>(ENVIRONMENT.REDIS_HOST);
    const port = this.getConfig<number>(ENVIRONMENT.REDIS_PORT);
    return { host, port };
  }

  get databaseConfig() {
    const type = this.getConfig<'postgres'>(ENVIRONMENT.DATABASE_TYPE);
    const host = this.getConfig<string>(ENVIRONMENT.DATABASE_HOST);
    const port = this.getConfig<number>(ENVIRONMENT.DATABASE_PORT);
    const username = this.getConfig<string>(ENVIRONMENT.DATABASE_USERNAME);
    const password = this.getConfig<string>(ENVIRONMENT.DATABASE_PASSWORD);
    const database = this.getConfig<string>(ENVIRONMENT.DATABASE_NAME);
    return { type, host, port, username, password, database };
  }

  getModulePort(moduleName: string) {
    const key = moduleName?.split('Module')?.[0]?.toUpperCase();
    if (!key) return;
    return this.getConfig<number>(ENVIRONMENT[`${key}_PORT`]);
  }

  getMicroServiceHosts(microserviceName: string) {
    const host = this.getConfig<string>(
      `${microserviceName}_HOST`.toUpperCase(),
    );
    const port = this.getConfig<string>(
      `${microserviceName}_PORT`.toUpperCase(),
    );
    return { host, port };
  }

  getConfig<T>(key: string) {
    return this.appConfigService.getConfig<T>(key);
  }
}
