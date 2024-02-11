import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Vehicle1707662004045 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name : "vehicle",
                columns : [
                    {
                        name : "id",
                        type : "int",
                        isPrimary : true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },{
                        name : "modelID",
                        type : "int",  
                    },{
                        name : "ownerID",
                        type : "int",  
                    },{
                        name : "VIN",
                        type : "varchar"
                    },{
                        name : "color",
                        type : "varchar"
                    },{
                        name : "purchaseDate",
                        type : "date"
                    },{
                        name : "purchasePrice",
                        type : "int"
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
        await queryRunner.dropTable("vehicle");
    }

}
