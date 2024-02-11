import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Manufacturer {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    manufacturerName : string;

    @Column()
    country : string;

}