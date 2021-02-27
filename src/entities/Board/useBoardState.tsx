import configurations, { BoardFormat, BoardSize, initialFormat, initialSize } from "./configurations";
import { BoardState } from "./BoardDetails";
import { useState } from "react";
import { GridGenerator } from "react-hexgrid-with-context-api";

function getBoardState(format: BoardFormat, size: BoardSize): BoardState {
  const { map, sizes, layout } = configurations[format];
  const generator = GridGenerator.getGenerator(map);
  const sizeDetails = sizes[size];

  return {
    format,
    size,
    sizeDetails,
    layout,
    hexagons: generator(...sizeDetails.mapProps),
  }
}

function useBoardState(format: BoardFormat, size: BoardSize): [BoardState, (format: BoardFormat, size: BoardSize) => void] {
  const [board, setBoard] = useState(getBoardState(format, size));

  function createAndSetBoard(format: BoardFormat, size: BoardSize) {
    setBoard(getBoardState(format, size))
  }

  return [board, createAndSetBoard];
}

export default useBoardState;