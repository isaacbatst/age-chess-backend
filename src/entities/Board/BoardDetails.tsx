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
  Point,
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
  const { property, onChange, where, record } = props;

  const isShowing = where === 'list' || where === 'show';

  useEffect(() => {
    if (isShowing) {
      updateBoard({ size: record?.params['details.size'], format: record?.params['details.format'] })
    }
  }, [])

  useEffect(() => {
    if (onChange) {
      onChange(`${property.propertyPath}.format`, board.config.map)
      onChange(`${property.propertyPath}.size`, board.size);
    }
  }, [board])

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

  function changeFormat(event: SyntheticEvent<HTMLSelectElement>) {
    const format = event.currentTarget.value as BoardFormats;
    updateBoard({ format });
  }

  function changeSize(event: SyntheticEvent<HTMLSelectElement>) {
    const size = event.currentTarget.value as BoardSize;
    updateBoard({ size });
  }

  const layoutSize = board.config.sizes[board.size].layout;
  const layoutSizeConsideringAction = Object.entries(layoutSize)
    .reduce((acc, [key, value]) => ({
      ...acc,
      [key]: isShowing ? value / 1.5 : value
    }), {})

  const { config } = board;
  const configConsideringAction: BoardConfig = {
    ...config,
    layout: {
      ...config.layout,
      width: isShowing ? config.layout.width / 3 : config.layout.width,
      height: isShowing ? config.layout.height / 3: config.layout.height,
    }
  }

  return (
    <StyledBoardDetails>
      <BoardInputs
        changeFormat={changeFormat}
        changeSize={changeSize}
        configs={configs}
        isShowing={isShowing}
        details={{
          format: record?.params['details.format'],
          size: record?.params['details.size'],
        }}
      />
      <BoardPreview
        boardConfig={configConsideringAction}
        size={board.size}
        layoutSize={layoutSizeConsideringAction as Point}
        hexagons={board.hexagons}
      />
    </StyledBoardDetails>
  );
};

export default BoardDetails;
