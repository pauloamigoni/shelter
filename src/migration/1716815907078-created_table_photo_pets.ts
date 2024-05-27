import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreatedTablePhotoPets1716815907078 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "photos_pets",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "url",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
                {
                    name: "petId",
                    type: "int",
                    isNullable: false,
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                    onUpdate: "CURRENT_TIMESTAMP",
                },
            ],
        }));

        await queryRunner.createForeignKey("photos_pets", new TableForeignKey({
            columnNames: ["petId"],
            referencedColumnNames: ["id"],
            referencedTableName: "pets",
            onDelete: "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("photos_pets");
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("petId") !== -1);
        await queryRunner.dropForeignKey("photos_pets", foreignKey);
        await queryRunner.dropTable("photos_pets");
    }
}