import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Vehicle {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    modelID : number;

    @Column()
    ownerID : number;

    @Column()
    VIN : string;

    @Column()
    color : string;

    @Column()
    purchaseDate : Date;

    @Column()
    purchasePrice : number;

}