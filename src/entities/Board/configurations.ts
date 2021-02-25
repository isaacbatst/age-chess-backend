const configurations: BoardConfigs = {
  hexagon: {
    layout: {
      flat: false, spacing: 1, width: 500,
      height: 400,
    },
    map: 'hexagon',
    sizes: {
      small: {
        mapProps: [3],
        layout: { x: 7, y: 7 },
        origin: { x: 0, y: 0 },
      },
      medium: {
        mapProps: [5],
        layout: { x: 5, y: 5 },
        origin: { x: 0, y: 0 },
      },
      large: {
        mapProps: [7],
        layout: { x: 4, y: 4 },
        origin: { x: 0, y: 0 },
      },
    },
  },
  rectangle: {
    layout: {
      flat: false,
      spacing: 1,
      width: 500,
      height: 400,
    },
    map: 'rectangle',
    sizes: {
      small: {
        mapProps: [5, 5],
        layout: { x: 8, y: 8 },
        origin: { x: -30, y: -30 },
      },
      medium: {
        mapProps: [7, 7],
        layout: { x: 7, y: 7 },
        origin: { x: -40, y: -35 },
      },
      large: {
        mapProps: [9, 9],
        layout: { x: 6, y: 6 },
        origin: { x: -40, y: -35 },
      },
    },
  },
};

export default configurations;

interface XYCoordinates {
  x: number;
  y: number;
}

interface BoardLayout {
  flat: boolean,
  spacing: number
  width: number;
  height: number;
}

interface SizeDetails {
  mapProps: number[];
  layout: XYCoordinates
  origin: XYCoordinates,
}

interface BoardSizesDetails {
  small: SizeDetails,
  medium: SizeDetails,
  large: SizeDetails
}

const formats = ['hexagon', 'rectangle'] as const;
export type BoardFormats = typeof formats[number];

export const sizes = ['small', 'medium', 'large'] as const;
export type BoardSize = typeof sizes[number];

export interface BoardConfig {
  layout: BoardLayout,
  map: BoardFormats,
  sizes: BoardSizesDetails
}

export interface BoardConfigs {
  hexagon: BoardConfig,
  rectangle: BoardConfig
}