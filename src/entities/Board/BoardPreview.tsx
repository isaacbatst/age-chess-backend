import { HexGrid, Hexagon, Hex } from 'react-hexgrid-with-context-api';
import { StyledLayout } from './styles';
import { BoardConfig, BoardSizes } from './configurations';


interface BoardPreviewProps {
  boardConfig: BoardConfig,
  size: BoardSizes,
  hexagons: Hex[];
}
const BoardPreview = ({ boardConfig: { layout, sizes }, size, hexagons }: BoardPreviewProps) => (
  <HexGrid width={layout.width} height={layout.height} >
    <StyledLayout
      size={sizes[size].layout}
      flat={layout.flat}
      spacing={layout.spacing}
      origin={sizes[size].origin}
    >
      {hexagons.map((hex, i) => (
        <Hexagon key={sizes[size].mapProps.push(1)} q={hex.q} r={hex.r} s={hex.s} />
      ))}
    </StyledLayout>
  </HexGrid>
);

export default BoardPreview;
