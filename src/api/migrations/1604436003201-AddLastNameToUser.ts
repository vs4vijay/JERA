import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddLastNameToUser1604436003201 implements MigrationInterface {
  name = 'AddLastNameToUser1604436003201';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" ADD "lastName" varchar2(255) NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`);
  }
}
