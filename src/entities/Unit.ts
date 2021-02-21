import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Unit extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    move!: number;

    @Column()
    icon!: string;

    @Column()
    type!: string;

    @Column()
    range!: number;
}
