import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class vehicleOwner {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName : string;

    @Column()
    lastName : string;

    @Column()
    email : string;

    @Column()
    address : string;

}