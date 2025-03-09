import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRoleTable1741519642145 implements MigrationInterface {
  name = 'CreateRoleTable1741519642145';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "user"."roles"
                             (
                                 "name"        character varying NOT NULL,
                                 "description" character varying,
                                 CONSTRAINT "PK_648e3f5447f725579d7d4ffdfb7" PRIMARY KEY ("name")
                             )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"."roles"`);
  }
}
