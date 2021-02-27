import { ResourceOptions } from 'admin-bro'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm'
import { Piece } from './Piece/Piece.entity'

export const options: ResourceOptions = { navigation: { icon: 'Person' } }

@Entity()
export class Unit extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  move!: number

  @Column()
  icon!: string

  @Column()
  type!: string

  @Column()
  range!: number

  @OneToMany(() => Piece, (piece) => piece.unit)
  pieces!: Piece[]
}
