import styled from 'styled-components';
import { Layout } from 'react-hexgrid-with-context-api';

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
