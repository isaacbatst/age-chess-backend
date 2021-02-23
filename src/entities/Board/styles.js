import styled from 'styled-components';
import { Layout, Hexagon } from 'react-hexgrid-with-context-api';

export const StyledBoardPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .label-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.2rem;

    h2 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    .selects-wrapper {
      display: flex;
      justify-content: space-around;
    }
  }
`;

export const StyledLayout = styled(Layout)`
  g {
    fill: #3f51b5;
    fill-opacity: 0.6;
  }

  g polygon {
    stroke: #aaa;
    stroke-width: 0.3;
    transition: fill-opacity 0.2s;
  }
  g text {
    font-size: 0.2em;
    fill: black;
    fill-opacity: 0.8;
    transition: fill-opacity 0.2s;
  }
  path {
    fill: none;
    stroke: hsl(60, 20%, 70%);
    stroke-width: 0.4em;
    stroke-opacity: 0.3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

const hexColorMap = {
  player1: 'blue',
  player2: 'red',
  none: '',
};

export const StyledHex = styled(Hexagon)`
  g polygon {
    stroke: ${({ owner }) => hexColorMap[owner]};
    fill-opacity: ${({ selected }) => (selected ? 1 : 0.5)};
  }
`;
