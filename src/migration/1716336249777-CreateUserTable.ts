import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1716336249777 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                },
                {
                    name: 'phone',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'cpf',
                    type: 'varchar',
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'type',
                    type: 'int',
                    isNullable: true,
                },
                {
                    name: 'username',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'avatar',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'description',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'address',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'city',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'state',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'country',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'postalCode',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'birthplace',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'gender',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'language',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'profession',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'company',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'website',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'relationship',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'birthdate',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'status',
                    type: 'int',
                    isNullable: true,
                },
                {
                    name: 'active',
                    type: 'boolean',
                    isNullable: true,
                },
                {
                    name: 'whatsApp',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }
}