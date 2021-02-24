import AdminBro, { ResourceOptions } from 'admin-bro';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Piece } from '../Piece/Piece.entity';
enum boardFormat {
  HEXAGON = 'Hexagon',
  RECTANGLE = 'Rectangle',
}

export const options: ResourceOptions = {
  navigation: { icon: 'Development' },
  properties: {
    details: {
      type: 'mixed',
      components: {
        edit: AdminBro.bundle('./BoardDetails.tsx'),
      },
    },
    'details.format': {
      type: 'string',
      availableValues: [
        { value: 'hexagon', label: 'Hexagon' },
        { value: 'rectangle', label: 'Rectangle' }
      ],
    },
    'details.size': { type: 'number' },
  },
};

interface boardDetails {
  format: boardFormat;
  size: number;
}

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({
    type: 'json', nullable: true
  })
  details!: boardDetails;

  @OneToMany(() => Piece, (piece) => piece.board)
  pieces!: Piece[];
}
