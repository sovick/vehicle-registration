import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import vehicleModel from './vehicleModel';
import vehicleOwner from './vehicleOwner';

@Entity()
export default class Vehicle {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    VIN : string;

    @Column()
    color : string;

    @Column()
    purchaseDate : Date;

    @Column()
    purchasePrice : number;

    @OneToOne(() => vehicleModel,{cascade : true})
    @JoinColumn({name : 'modelID'})
    modelID : vehicleModel

    @OneToOne(() => vehicleOwner,{cascade : true})
    @JoinColumn({name : 'ownerID'})
    ownerID : vehicleOwner

}