import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserUniqueConstraints1741988202974 implements MigrationInterface {
  name = 'UserUniqueConstraints1741988202974';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user"."users"
        ADD CONSTRAINT "UQ_a3dd42a06d6b8642a713b8ebf3c" UNIQUE NULLS NOT DISTINCT ("phone", "organization_id")`);
    await queryRunner.query(`ALTER TABLE "user"."users"
        ADD CONSTRAINT "UQ_04402eb4cf7be16f6cc5e5f0788" UNIQUE NULLS NOT DISTINCT ("email", "organization_id")`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user"."users"
        DROP CONSTRAINT "UQ_04402eb4cf7be16f6cc5e5f0788"`);
    await queryRunner.query(`ALTER TABLE "user"."users"
        DROP CONSTRAINT "UQ_a3dd42a06d6b8642a713b8ebf3c"`);
  }
}
