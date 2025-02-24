import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateOrganization1740356244243 implements MigrationInterface {
  name = 'CreateOrganization1740356244243';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "organization"."organization" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "slug" character varying NOT NULL, "primary_contact_name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_c21e615583a3ebbb0977452afb0" UNIQUE ("name"), CONSTRAINT "UQ_a08804baa7c5d5427067c49a31f" UNIQUE ("slug"), CONSTRAINT "PK_472c1f99a32def1b0abb219cd67" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "organization"."organization_metadata" ("id" SERIAL NOT NULL, "primary_color" character varying, "domain" character varying, "logo" character varying NOT NULL, "rent_fee_percentage" numeric(5,2) NOT NULL DEFAULT '5', "deposit_fee_percentage" numeric(5,2) NOT NULL DEFAULT '5', "allow_interest_earning" boolean NOT NULL DEFAULT false, "organization_id" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "REL_efaca847c588a9817470f7c6ca" UNIQUE ("organization_id"), CONSTRAINT "PK_2fecc2ceb81f30a7f46be802cbd" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "organization"."organization_metadata" ADD CONSTRAINT "FK_efaca847c588a9817470f7c6ca8" FOREIGN KEY ("organization_id") REFERENCES "organization"."organization"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "organization"."organization_metadata" DROP CONSTRAINT "FK_efaca847c588a9817470f7c6ca8"`,
    );
    await queryRunner.query(
      `DROP TABLE "organization"."organization_metadata"`,
    );
    await queryRunner.query(`DROP TABLE "organization"."organization"`);
  }
}
