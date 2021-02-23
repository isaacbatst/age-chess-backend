import { ResourceWithOptions } from "admin-bro";
import { options as unitOptions, Unit } from './entities/Unit';
import { options as pieceOptions, Piece } from './entities/Piece/Piece';
import { Board, options as boardOptions } from "./entities/Board/Board";
import { GameType, options as gameTypeOptions } from "./entities/GameType";

const resources: ResourceWithOptions[] = [
  { resource: Unit, options: unitOptions },
  { resource: Piece, options: pieceOptions },
  { resource: Board, options: boardOptions },
  { resource: GameType, options: gameTypeOptions }
]

export default resources;