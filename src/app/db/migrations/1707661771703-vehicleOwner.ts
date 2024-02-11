import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class VehicleOwner1707661771703 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name : "vehicleOwner",
                columns : [
                    {
                        name : "id",
                        type : "int",
                        isPrimary : true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },{
                        name : "firstName",
                        type : "varchar",  
                    },{
                        name : "lastName",
                        type : "varchar"
                    },{
                        name : "email",
                        type : "varchar"
                    },{
                        name : "address",
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
        await queryRunner.dropTable("vehicleOwner");
    }

}
