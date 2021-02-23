import { ResourceOptions } from "admin-bro";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Piece } from "./Piece";

export const options: ResourceOptions = { navigation: { icon: 'Development' } };

enum boardFormat {
  HEXAGON = 'Hexagon',
  RECTANGLE = 'Rectangle'
}

@Entity()
export class Board extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ type: 'enum', enum: boardFormat, default: boardFormat.HEXAGON})
  format!: boardFormat

  @OneToMany(() => Piece, piece => piece.board)
  pieces!: Piece[];
}
