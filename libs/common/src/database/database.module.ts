import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigHelper } from '@qushah/common';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { DataSource, DataSourceOptions } from 'typeorm';

@Module({})
export class DatabaseModule {
  static init(schema: string): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRootAsync({
          useFactory: async () => {
            const configHelper = await ConfigHelper.getInstance();
            const { type, host, port, username, password, database } =
              configHelper.databaseConfig;
            const options: TypeOrmModuleOptions = {
              type,
              host,
              port,
              username,
              password,
              database,
              schema: schema, // Set schema dynamically
              autoLoadEntities: true,
              ssl: { rejectUnauthorized: false },
            };

            return options;
          },
        }),
      ],
    };
  }

  static loadEntities(
    entities?: EntityClassOrSchema[],
    dataSource?: DataSource | DataSourceOptions | string,
  ): DynamicModule {
    return TypeOrmModule.forFeature(entities, dataSource);
  }
}
