import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { Board } from "./Board";
import { Coordinate } from "./Coordinate";
import { Unit } from "./Unit";

interface Coordinates {
  q: number,
  r: number,
  s: number
}

@Entity()
export class Piece extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToOne(() => Unit, unit => unit.pieces)
  @JoinColumn({name: 'unitId'})
  unit!: Unit

  @Column('int')
  unitId!: number

  @ManyToOne(() => Board, board => board.pieces)
  @JoinColumn({name: 'boardId'})
  board!: Board

  @Column('int')
  boardId!: Board

  @OneToOne(() => Coordinate)
  @JoinColumn()
  coordinate!: Coordinate
}
