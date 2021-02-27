import { BasePropertyComponentProps } from 'admin-bro';
import React, { useEffect, SyntheticEvent } from 'react';
import {
  Hex,
} from 'react-hexgrid-with-context-api';
import styled from 'styled-components';
import { BoardContainerWrapper } from './BoardContainerWrapper';
import BoardInputs from './BoardInputs';
import BoardPreview from './BoardPreview';
import configs, {
  BoardFormat,
  BoardSize,
  BoardLayout,
  initialFormat,
  initialSize,
  SizeDetails
} from './configurations';
import useBoardState from './useBoardState';

export interface BoardState {
  hexagons: Hex[];
  size: BoardSize,
  layout: BoardLayout,
  sizeDetails: SizeDetails,
  format: BoardFormat
}

const StyledWrapper = styled(BoardContainerWrapper)`
  display: flex;
  flex-direction: column;
  align-items: ${({ isShowing }) => isShowing ? 'flex-start' : 'center'};

  .label-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.2rem;

    h2 {
      font-size: 1.3rem;
      margin-bottom: 3rem;
    }

    .selects-wrapper {
      display: flex;
      justify-content: space-around;
    }
  }
`;

const BoardDetails = (props: BasePropertyComponentProps) => {
  const [board, setBoard] = useBoardState(initialFormat, initialSize);
  const { property, onChange, where, record } = props;

  const isShowing = where === 'list' || where === 'show';

  useEffect(() => {
    if (isShowing) {
      updateBoard({ size: record?.params['details.size'], format: record?.params['details.format'] })
    }
  }, [])

  useEffect(() => {
    if (onChange) {
      onChange(`${property.propertyPath}.format`, board.format)
      onChange(`${property.propertyPath}.size`, board.size);
    }
  }, [board])

  interface UpdateBoardProps {
    size?: BoardSize;
    format?: BoardFormat;
  }

  function updateBoard({ format, size }: UpdateBoardProps) {
    format ??= board.format;
    size ??= board.size;

    setBoard(format, size)
  }

  function changeFormat(event: SyntheticEvent<HTMLSelectElement>) {
    const format = event.currentTarget.value as BoardFormat;
    updateBoard({ format });
  }

  function changeSize(event: SyntheticEvent<HTMLSelectElement>) {
    const size = event.currentTarget.value as BoardSize;
    updateBoard({ size });
  }

  console.log(isShowing)

  return (
    <StyledWrapper isShowing={isShowing}>
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
        layout={board.layout}
        sizeDetails={board.sizeDetails}
        hexagons={board.hexagons}
        isShowing={isShowing}
      />
    </StyledWrapper>
  );
};

export default BoardDetails;
