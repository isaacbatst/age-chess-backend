import AdminBro, { ResourceOptions } from 'admin-bro'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm'
import { Piece } from '../Piece/Piece.entity'

export const options: ResourceOptions = {
  navigation: { icon: 'Development' },
  actions: {
    new: {
      component: AdminBro.bundle('./BoardNewAction.tsx'),
    },
  },
  properties: {
    details: {
      type: 'mixed',
      components: {
        edit: AdminBro.bundle('./BoardDetails.tsx'),
        list: AdminBro.bundle('./BoardDetails.tsx'),
        show: AdminBro.bundle('./BoardDetails.tsx'),
      },
    },
    'details.format': {
      type: 'string',
      availableValues: [
        { value: 'hexagon', label: 'Hexagon' },
        { value: 'rectangle', label: 'Rectangle' },
      ],
    },
    'details.size': {
      type: 'string',
      availableValues: [
        { value: 'small', label: 'small' },
        { value: 'medium', label: 'medium' },
        { value: 'large', label: 'large' },
      ],
    },
  },
}

enum boardFormat {
  hexagon = 'Hexagon',
  rectangle = 'Rectangle',
}

enum boardSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export interface boardDetails {
  format: boardFormat
  size: boardSize
}

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column({
    type: 'json',
    nullable: true,
  })
  details!: boardDetails

  @OneToMany(() => Piece, (piece) => piece.board)
  pieces!: Piece[]
}
