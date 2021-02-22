import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Piece } from "./Piece";

@Entity()
export class Coordinate extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column('int')
    q!: number;

    @Column('int')
    r!: number;

    @Column('int')
    s!: number;

    @OneToOne(() => Piece)
    @JoinColumn()
    piece!: Piece
}
