import { Module, DynamicModule, Provider } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SeederService } from '@qushah/common/database/seeder/seeder-service.interface';
import { Type } from '@nestjs/common/interfaces/type.interface';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { DatabaseModule } from '../';

@Module({})
export class SeederModule {
  static init(
    services: Provider[],
    entities: EntityClassOrSchema[],
  ): DynamicModule {
    return {
      module: SeederModule,
      imports: [DatabaseModule.loadEntities(entities)],
      providers: services,
      exports: services,
    };
  }

  private static async bootstrap(service: Type<SeederService>, module: any) {
    const app = await NestFactory.createApplicationContext(module);
    const seeder = app.get<SeederService>(service);
    await seeder.seed();
    await app.close();
    console.log('✅ Database seeding completed.');
  }

  static seed(service: Type<SeederService>, module: any) {
    SeederModule.bootstrap(service, module).catch((err) => {
      console.error('Seeding failed!', err);
      process.exit(1);
    });
  }
}
