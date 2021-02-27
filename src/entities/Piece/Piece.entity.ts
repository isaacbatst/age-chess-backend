import AdminBro, { ResourceOptions } from 'admin-bro'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  RelationId,
} from 'typeorm'
import { Board } from '../Board/Board.entity'
import { Unit } from '../Unit.entity'

interface Coordinates {
  q: number
  r: number
  s: number
}

export const options: ResourceOptions = {
  properties: {
    coordinates: {
      type: 'mixed',
      components: {
        edit: AdminBro.bundle('./Coordinates.tsx'),
      },
    },
    'coordinates.q': { type: 'number' },
    'coordinates.r': { type: 'number' },
    'coordinates.s': { type: 'number' },
  },
  navigation: { icon: 'Gamification' },
}

@Entity()
export class Piece extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @ManyToOne(() => Unit, (unit) => unit.pieces)
  @JoinColumn({ name: 'unitId' })
  unit!: Unit

  @Column('int')
  unitId!: number

  @ManyToOne(() => Board, (board) => board.pieces)
  @JoinColumn({ name: 'boardId' })
  board!: Board

  @RelationId((piece: Piece) => piece.board)
  boardId!: number

  @Column({
    type: 'json',
    nullable: true,
  })
  coordinates!: Coordinates
}
