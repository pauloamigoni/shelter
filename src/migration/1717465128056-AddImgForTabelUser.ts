import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddImgForTabelUser1717465128056 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("user", new TableColumn({
            name: "img",
            type: "varchar",
            isNullable: true
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("user", "img");
    }

}
