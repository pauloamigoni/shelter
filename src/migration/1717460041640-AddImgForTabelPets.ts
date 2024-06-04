import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddImgForTabelPets1717460041640 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("pet", new TableColumn({
            name: "img",
            type: "varchar",
            isNullable: true
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("pet", "img");
    }

}
