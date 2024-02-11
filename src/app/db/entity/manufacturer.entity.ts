import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Manufacturer {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    ManufacturerName : string;

    @Column()
    Country : string;

}