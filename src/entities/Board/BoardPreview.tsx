import { BasePropertyComponentProps } from 'admin-bro';
import React, { useState, useEffect } from 'react';
import {
  HexGrid,
  Hexagon,
  GridGenerator,
} from 'react-hexgrid-with-context-api';
import configs from './configurations';
import { StyledBoardPreview, StyledLayout } from './styles';

const initialConfig = configs['hexagon'];
const generator = GridGenerator.getGenerator(initialConfig.map);
const initalHexagons = generator.apply(undefined, initialConfig.sizes.medium.mapProps);

const sizes = ['small', 'medium', 'large']

const BoardPreview = (props: BasePropertyComponentProps) => {
  const [hexagons, setHexagons] = useState(initalHexagons);
  const [config, setConfig] = useState(initialConfig);
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const layout = config.layout;
  const sizeProps = config.sizes[selectedSize];

  useEffect(() => {
    updateGrid();
  }, [selectedSize, config])

  function updateGrid() {
    const generator = GridGenerator.getGenerator(config.map);
    const hexagons = generator.apply(undefined, sizeProps.mapProps);

    setHexagons(hexagons);
  }

  function changeFormat(event) {
    const name = event.currentTarget.value;
    setConfig(configs[name]);
  }

  function changeSize(event) {
    const value = event.currentTarget.value;
    setSelectedSize(value)
  }

  return (
    <StyledBoardPreview>
      <div className="label-wrapper">
        <h2>Select grid type and configuration from dropdown.</h2>
        <div className="selects-wrapper">
          <select onChange={changeFormat}>
            {Object.keys(configs).map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          <select onChange={changeSize} defaultValue={sizes[1]}>
            {sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
      <HexGrid width={config.width} height={config.height}>
        <StyledLayout
          size={sizeProps.layout}
          flat={layout.flat}
          spacing={layout.spacing}
          origin={sizeProps.origin}
        >
          {hexagons.map((hex, i) => (
            <Hexagon key={sizeProps.mapProps + i} q={hex.q} r={hex.r} s={hex.s} />
          ))}
        </StyledLayout>
      </HexGrid>
    </StyledBoardPreview>
  );
};

export default BoardPreview;
