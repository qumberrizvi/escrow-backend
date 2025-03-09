import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateOrganizationAndMetaTable1741518145374
  implements MigrationInterface
{
  name = 'CreateOrganizationAndMetaTable1741518145374';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "organization"."organizations"
                             (
                                 "id"                   uuid              NOT NULL DEFAULT uuid_generate_v4(),
                                 "name"                 character varying NOT NULL,
                                 "slug"                 character varying NOT NULL,
                                 "primary_contact_name" character varying NOT NULL,
                                 "email"                character varying NOT NULL,
                                 "phone"                character varying NOT NULL,
                                 "created_at"           TIMESTAMP         NOT NULL DEFAULT now(),
                                 "updated_at"           TIMESTAMP                  DEFAULT now(),
                                 "deleted_at"           TIMESTAMP,
                                 CONSTRAINT "UQ_9b7ca6d30b94fef571cff876884" UNIQUE ("name"),
                                 CONSTRAINT "UQ_963693341bd612aa01ddf3a4b68" UNIQUE ("slug"),
                                 CONSTRAINT "PK_6b031fcd0863e3f6b44230163f9" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`CREATE TABLE "organization"."organizations_metadata"
                             (
                                 "id"                     uuid              NOT NULL DEFAULT uuid_generate_v4(),
                                 "primary_color"          character varying,
                                 "domain"                 character varying,
                                 "logo"                   character varying NOT NULL,
                                 "rent_fee_percentage"    numeric(5, 2)     NOT NULL DEFAULT '5',
                                 "deposit_fee_percentage" numeric(5, 2)     NOT NULL DEFAULT '5',
                                 "allow_interest_earning" boolean           NOT NULL DEFAULT false,
                                 "organization_id"        uuid,
                                 "created_at"             TIMESTAMP         NOT NULL DEFAULT now(),
                                 "updated_at"             TIMESTAMP                  DEFAULT now(),
                                 "deleted_at"             TIMESTAMP,
                                 CONSTRAINT "REL_ad9c5b4a8fb0a54d63b8471019" UNIQUE ("organization_id"),
                                 CONSTRAINT "PK_63bbcee313cee9e95bfba3c7d2b" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`ALTER TABLE "organization"."organizations_metadata"
        ADD CONSTRAINT "FK_ad9c5b4a8fb0a54d63b84710190" FOREIGN KEY ("organization_id") REFERENCES "organization"."organizations" ("id") ON DELETE CASCADE ON UPDATE CASCADE`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "organization"."organizations_metadata"
        DROP CONSTRAINT "FK_ad9c5b4a8fb0a54d63b84710190"`);
    await queryRunner.query(
      `DROP TABLE "organization"."organizations_metadata"`,
    );
    await queryRunner.query(`DROP TABLE "organization"."organizations"`);
  }
}
