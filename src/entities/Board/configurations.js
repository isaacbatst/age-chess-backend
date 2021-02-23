const configurations = {
  hexagon: {
    layout: { flat: false, spacing: 1, origin: { x: 0, y: 0 } },
    map: 'hexagon',
    sizes: {
      small: {
        mapProps: [3],
        width: 500,
        height: 400,
        layout: { x: 7, y: 7 },
      },
      medium: {
        mapProps: [5],
        width: 500,
        height: 400,
        layout: { x: 5, y: 5 },
      },
      large: {
        mapProps: [7],
        width: 500,
        height: 400,
        layout: { x: 4, y: 4 },
      },
    },
  },
  rectangle: {
    layout: {
      origin: { x: -40, y: -40 },
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
      },
      medium: {
        mapProps: [7, 7],
        width: 500,
        height: 400,
        layout: { x: 7, y: 7 },
      },
      large: {
        mapProps: [9, 9],
        width: 500,
        height: 400,
        layout: { x: 6, y: 6 },
      },
    },
  },
};

export default configurations;
