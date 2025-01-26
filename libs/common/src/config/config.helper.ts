import { ConfigService } from '@nestjs/config';
import { QushahConfigService } from './config.service';
import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentConstant } from '@qushah/common';

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

  get redisConfig() {
    const host = this.getConfig<string>(EnvironmentConstant.REDIS_HOST);
    const port = this.getConfig<number>(EnvironmentConstant.REDIS_PORT);
    return { host, port };
  }

  get databaseConfig() {
    const type = this.getConfig<'postgres'>(EnvironmentConstant.DATABASE_TYPE);
    const host = this.getConfig<string>(EnvironmentConstant.DATABASE_HOST);
    const port = this.getConfig<number>(EnvironmentConstant.DATABASE_PORT);
    const username = this.getConfig<string>(
      EnvironmentConstant.DATABASE_USERNAME,
    );
    const password = this.getConfig<string>(
      EnvironmentConstant.DATABASE_PASSWORD,
    );
    const database = this.getConfig<string>(EnvironmentConstant.DATABASE_NAME);
    return { type, host, port, username, password, database };
  }

  getModulePort(moduleName: string) {
    const key = moduleName?.split('Module')?.[0]?.toUpperCase();
    if (!key) return;
    return this.getConfig<number>(EnvironmentConstant[`${key}_PORT`]);
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
    return this.qushahConfigService.getConfig<T>(key);
  }
}
