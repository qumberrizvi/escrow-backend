import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserAndRoleTables1741299235205
  implements MigrationInterface
{
  name = 'CreateUserAndRoleTables1741299235205';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "user"."roles"
                             (
                                 "name"        character varying NOT NULL,
                                 "description" character varying,
                                 CONSTRAINT "PK_648e3f5447f725579d7d4ffdfb7" PRIMARY KEY ("name")
                             )`);
    await queryRunner.query(`CREATE TABLE "user"."users"
                             (
                                 "id"             SERIAL            NOT NULL,
                                 "firstName"      character varying NOT NULL,
                                 "lastName"       character varying NOT NULL,
                                 "email"          character varying NOT NULL,
                                 "password"       character varying NOT NULL,
                                 "phone"          character varying NOT NULL,
                                 "organizationId" character varying,
                                 "role_id"        character varying,
                                 "created_at"     TIMESTAMP         NOT NULL DEFAULT now(),
                                 "updated_at"     TIMESTAMP                  DEFAULT now(),
                                 "deleted_at"     TIMESTAMP,
                                 CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`ALTER TABLE "user"."users"
        ADD CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1" FOREIGN KEY ("role_id") REFERENCES "user"."roles" ("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user"."users"
        DROP CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1"`);
    await queryRunner.query(`DROP TABLE "user"."users"`);
    await queryRunner.query(`DROP TABLE "user"."roles"`);
  }
}
