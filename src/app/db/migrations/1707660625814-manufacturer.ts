import { MigrationInterface, QueryRunner, Table} from "typeorm";

export class Manufacturer1707660625814 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name : "manufacturer",
                columns : [
                    {
                        name : "id",
                        type : "int",
                        isPrimary : true
                    },{
                        name : "manufacturerName",
                        type : "varchar",  
                    },{
                        name : "country",
                        type : "varchar"
                    },{
                        name : "createdAt",
                        type : "timestamp",
                        default : "now()"
                    },{
                        name : "updatedAt",
                        type : "timestamp",
                        default : "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("manufacturer");
    }

}
