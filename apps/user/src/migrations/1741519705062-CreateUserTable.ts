import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1741519705062 implements MigrationInterface {
  name = 'CreateUserTable1741519705062';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "user"."users"
                             (
                                 "id"              uuid              NOT NULL DEFAULT uuid_generate_v4(),
                                 "firstName"       character varying NOT NULL,
                                 "lastName"        character varying NOT NULL,
                                 "email"           character varying NOT NULL,
                                 "password"        character varying NOT NULL,
                                 "phone"           character varying NOT NULL,
                                 "organization_id" uuid,
                                 "role"            character varying,
                                 "created_at"      TIMESTAMP         NOT NULL DEFAULT now(),
                                 "updated_at"      TIMESTAMP                  DEFAULT now(),
                                 "deleted_at"      TIMESTAMP,
                                 CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
                             )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"."users"`);
  }
}
