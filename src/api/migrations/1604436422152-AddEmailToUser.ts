import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddEmailToUser1604436422152 implements MigrationInterface {
  name = 'AddEmailToUser1604436422152';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" ADD "email" varchar2(255) NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
  }
}
