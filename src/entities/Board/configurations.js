const configurations = {
  hexagon: {
    layout: { flat: false, spacing: 1, origin: { x: 0, y: 0 } },
    map: 'hexagon',
    width: 500,
    height: 400,
    sizes: {
      small: {
        mapProps: [3],
        layout: { x: 7, y: 7 },
        origin: { x: 0, y: 0 },
      },
      medium: {
        mapProps: [5],
        width: 500,
        height: 400,
        layout: { x: 5, y: 5 },
        origin: { x: 0, y: 0 },
      },
      large: {
        mapProps: [7],
        width: 500,
        height: 400,
        layout: { x: 4, y: 4 },
        origin: { x: 0, y: 0 },
      },
    },
  },
  rectangle: {
    layout: {
      flat: false,
      spacing: 1.02,
    },
    map: 'rectangle',
    mapProps: [5, 10],
    sizes: {
      small: {
        mapProps: [5, 5],
        width: 500,
        height: 400,
        layout: { x: 8, y: 8 },
        origin: { x: 0, y: 0 },
      },
      medium: {
        mapProps: [7, 7],
        width: 500,
        height: 400,
        layout: { x: 7, y: 7 },
        origin: { x: 0, y: 0 },
      },
      large: {
        mapProps: [9, 9],
        width: 500,
        height: 400,
        layout: { x: 6, y: 6 },
        origin: { x: 0, y: 0 },
      },
    },
  },
};

export default configurations;
