import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class vehicleModel {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    manufacturerID : number;

    @Column()
    modelName : string;

    @Column()
    year : number;

    @Column()
    fuelType: string;


}