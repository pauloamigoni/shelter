import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreatedTablePets1716815879889 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "pets",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "100",
                    isNullable: false,
                },
                {
                    name: "age",
                    type: "int",
                    isNullable: false,
                },
                {
                    name: "type",
                    type: "varchar",
                    length: "50",
                    isNullable: false,
                },
                {
                    name: "breed",
                    type: "varchar",
                    length: "100",
                    isNullable: false,
                },
                {
                    name: "gender",
                    type: "enum",
                    enum: ["Male", "Female"],
                    isNullable: false,
                },
                {
                    name: "weight",
                    type: "decimal",
                    precision: 5,
                    scale: 2,
                    isNullable: false,
                },
                {
                    name: "color",
                    type: "varchar",
                    length: "50",
                    isNullable: false,
                },
                {
                    name: "description",
                    type: "text",
                    isNullable: true,
                },
                {
                    name: "vaccinated",
                    type: "boolean",
                    default: false,
                },
                {
                    name: "neutered",
                    type: "boolean",
                    default: false,
                },
                {
                    name: "entry_date",
                    type: "date",
                    isNullable: false,
                },
                {
                    name: "status",
                    type: "enum",
                    enum: ["Available", "Adopted"],
                    default: "'Available'",
                },
                {
                    name: "userId",
                    type: "int",
                    isNullable: true,
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

        await queryRunner.createForeignKey("pets", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "SET NULL",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("pets");
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1);
        await queryRunner.dropForeignKey("pets", foreignKey);
        await queryRunner.dropTable("pets");
    }
}