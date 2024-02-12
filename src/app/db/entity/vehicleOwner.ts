import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name : "vehicleOwner"})
export default class vehicleOwner {
    @PrimaryGeneratedColumn('increment')
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