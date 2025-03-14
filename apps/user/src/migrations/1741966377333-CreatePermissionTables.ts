import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePermissionTables1741966377333 implements MigrationInterface {
  name = 'CreatePermissionTables1741966377333';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user"."users" DROP CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1"`,
    );
    await queryRunner.query(`CREATE TABLE "user"."permissions"
                             (
                                 "name"        character varying NOT NULL,
                                 "description" character varying,
                                 CONSTRAINT "PK_48ce552495d14eae9b187bb6716" PRIMARY KEY ("name")
                             )`);
    await queryRunner.query(`CREATE TABLE "user"."role_permissions"
                             (
                                 "role"       character varying NOT NULL,
                                 "permission" character varying NOT NULL,
                                 CONSTRAINT "PK_9c116ac03805ca80baf3e8d2319" PRIMARY KEY ("role", "permission")
                             )`);
    await queryRunner.query(
      `CREATE INDEX "IDX_5d5086bd299f773d403574cf1c" ON "user"."role_permissions" ("role") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0ab5175ebb91e7a07f850acf42" ON "user"."role_permissions" ("permission") `,
    );
    await queryRunner.query(`ALTER TABLE "user"."users"
        ADD CONSTRAINT "FK_ace513fa30d485cfd25c11a9e4a" FOREIGN KEY ("role") REFERENCES "user"."roles" ("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "user"."role_permissions"
        ADD CONSTRAINT "FK_5d5086bd299f773d403574cf1c8" FOREIGN KEY ("role") REFERENCES "user"."roles" ("name") ON DELETE CASCADE ON UPDATE CASCADE`);
    await queryRunner.query(`ALTER TABLE "user"."role_permissions"
        ADD CONSTRAINT "FK_0ab5175ebb91e7a07f850acf42e" FOREIGN KEY ("permission") REFERENCES "user"."permissions" ("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user"."role_permissions" DROP CONSTRAINT "FK_0ab5175ebb91e7a07f850acf42e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user"."role_permissions" DROP CONSTRAINT "FK_5d5086bd299f773d403574cf1c8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user"."users" DROP CONSTRAINT "FK_ace513fa30d485cfd25c11a9e4a"`,
    );
    await queryRunner.query(
      `DROP INDEX "user"."IDX_0ab5175ebb91e7a07f850acf42"`,
    );
    await queryRunner.query(
      `DROP INDEX "user"."IDX_5d5086bd299f773d403574cf1c"`,
    );
    await queryRunner.query(`DROP TABLE "user"."role_permissions"`);
    await queryRunner.query(`DROP TABLE "user"."permissions"`);
    await queryRunner.query(`ALTER TABLE "user"."users"
        ADD CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1" FOREIGN KEY ("role") REFERENCES "user"."roles" ("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }
}
