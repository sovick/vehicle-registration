import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name : "vehicleModel"})
export default class vehicleModel {
    @PrimaryGeneratedColumn('increment')
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