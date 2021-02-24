import { BasePropertyComponentProps } from 'admin-bro';
import React, { useState, useEffect } from 'react';
import { GridGenerator } from 'react-hexgrid-with-context-api';
import BoardInputs from './BoardInputs';
import BoardPreview from './BoardPreview';
import configs from './configurations';
import { StyledBoardDetails } from './styles';

const initialConfig = configs['hexagon'];
const generator = GridGenerator.getGenerator(initialConfig.map);
const initalHexagons = generator.apply(
  undefined,
  initialConfig.sizes.medium.mapProps
);

const sizes = ['small', 'medium', 'large'];

const BoardDetails = (props: BasePropertyComponentProps) => {
  const [hexagons, setHexagons] = useState(initalHexagons);
  const [config, setConfig] = useState(initialConfig);
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const layout = config.layout;
  const sizeProps = config.sizes[selectedSize];

  useEffect(() => {
    updateGrid();
  }, [selectedSize, config]);

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
    setSelectedSize(value);
  }

  return (
    <StyledBoardDetails>
      <BoardInputs changeFormat={changeFormat} changeSize={changeSize} sizes={sizes} configs={configs} />
      <BoardPreview sizeProps={sizeProps} layout={layout} hexagons={hexagons} />
    </StyledBoardDetails>
  );
};

export default BoardDetails;
