import { BasePropertyComponentProps, useRecord } from 'admin-bro';
import React, { useState, useEffect, SyntheticEvent, useCallback } from 'react';
import {
  GridGenerator,
  Hex,
  generatorFunction,
} from 'react-hexgrid-with-context-api';
import BoardInputs from './BoardInputs';
import BoardPreview from './BoardPreview';
import configs, {
  BoardConfig,
  BoardFormats,
  BoardSize,
} from './configurations';
import { StyledBoardDetails } from './styles';

const initialFormat = 'hexagon';
const initialSize = 'medium'
const initialConfig = configs[initialFormat];
const initialGenerator = GridGenerator.getGenerator(initialConfig.map);
const initialHexagons = initialGenerator(
  ...initialConfig.sizes[initialSize].mapProps
);

const sizes: BoardSize[] = ['small', 'medium', 'large'];

interface BoardState {
  hexagons: Hex[];
  config: BoardConfig;
  generator: generatorFunction,
  size: BoardSize
}

const initialBoard: BoardState = {
  hexagons: initialHexagons,
  config: initialConfig,
  generator: initialGenerator,
  size: initialSize
};

interface UpdateBoardProps {
  size?: BoardSize;
  format?: BoardFormats;
}

const BoardDetails = (props: BasePropertyComponentProps) => {
  const [board, setBoard] = useState(initialBoard);
  const { record: initialRecord, property } = props;
  const { record, handleChange, submit } = useRecord(
    initialRecord,
    property.resourceId,
    {
      includeParams: ['details.size', 'details.format']
    }
  );

  useEffect(() => {
    handleChange(`${property.propertyPath}.format`, board.config.map);
    handleChange(`${property.propertyPath}.size`, board.size);
  }, [])
  function updateBoard({ format, size }: UpdateBoardProps) {

    const [newGenerator, newConfig] = format
      ? [GridGenerator.getGenerator(format), configs[format]]
      : [board.generator, board.config];

    const newSize = size || board.size;
    const newHexagons = newGenerator(...newConfig.sizes[newSize].mapProps)

    setBoard({
      config: newConfig,
      hexagons: newHexagons,
      generator: newGenerator,
      size: newSize
    });
  }

  console.log(record)

  function changeFormat(event: SyntheticEvent<HTMLSelectElement>) {
    const format = event.currentTarget.value as BoardFormats;
    updateBoard({ format });
  }

  function changeSize(event: SyntheticEvent<HTMLSelectElement>) {
    const size = event.currentTarget.value as BoardSize;
    updateBoard({ size });
  }

  return (
    <StyledBoardDetails>
      <BoardInputs
        changeFormat={changeFormat}
        changeSize={changeSize}
        configs={configs}
      />
      <BoardPreview
        boardConfig={board.config}
        size={board.size}
        hexagons={board.hexagons}
      />
    </StyledBoardDetails>
  );
};

export default BoardDetails;
