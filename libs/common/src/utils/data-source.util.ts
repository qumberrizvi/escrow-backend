import process from 'node:process';
import * as dotenv from 'dotenv';
import { DataSource as TypeormDataSource } from 'typeorm';

// Load environment variables from .env file
dotenv.config();

export class DataSource {
  static getInstance(schema: string) {
    return new TypeormDataSource({
      migrationsTableName: 'typeorm_migrations',
      type: (process.env.DATABASE_TYPE as 'postgres') || 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: +process.env.DATABASE_PORT || 5432,
      username: process.env.DATABASE_USERNAME || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'postgres',
      database: process.env.DATABASE_NAME || 'my-db',
      ssl: { rejectUnauthorized: false },
      schema,
      entities: ['src/**/**.entity{.ts,.js}'],
      migrations: ['src/migrations/**/*{.ts,.js}'],
      subscribers: ['src/subscriber/**/*{.ts,.js}'],
    });
  }
}
