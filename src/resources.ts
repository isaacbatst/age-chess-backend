import { ResourceWithOptions } from 'admin-bro'
import { options as unitOptions, Unit } from './entities/Unit.entity'
import { options as pieceOptions, Piece } from './entities/Piece/Piece.entity'
import { Board, options as boardOptions } from './entities/Board/Board.entity'
import {
  GameType,
  options as gameTypeOptions,
} from './entities/GameType.entity'

const resources: ResourceWithOptions[] = [
  { resource: Unit, options: unitOptions },
  { resource: Piece, options: pieceOptions },
  { resource: Board, options: boardOptions },
  { resource: GameType, options: gameTypeOptions },
]

export default resources
