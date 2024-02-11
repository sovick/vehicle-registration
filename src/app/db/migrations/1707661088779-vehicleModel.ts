import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class VehicleModel1707661088779 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name : "vehicleModel",
                columns : [
                    {
                        name : "id",
                        type : "int",
                        isPrimary : true
                    },{
                        name : "manufacturerID",
                        type : "int",  
                    },{
                        name : "modelName",
                        type : "varchar"
                    },{
                        name : "year",
                        type : "int"
                    },{
                        name : "fuelType",
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
        await queryRunner.dropTable("vehicleModel");
    }

}
