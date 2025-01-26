import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigHelper } from '@qushah/common';

@Module({})
export class DatabaseModule {
  static forRoot(entitiesPath: string[], schema: string): DynamicModule {
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
              entities: entitiesPath, // Pass entities dynamically
              // synchronize: true, // Enable only for development
            };

            return options;
          },
        }),
        TypeOrmModule.forFeature([]), // Can be extended as needed
      ],
    };
  }
}
