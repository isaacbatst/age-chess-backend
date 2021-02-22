import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Piece } from "./Piece";

@Entity()
export class Board extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Piece, piece => piece.board)
  pieces!: Piece[]
}
