import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('event')

export class Event{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length : 100})
    name: string;

    @Column()
    description: string;

    @Column()
    when: Date;

    @Column()
    address: string;
}