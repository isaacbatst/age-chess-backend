import { HexGrid, Hexagon, Hex } from 'react-hexgrid-with-context-api';
import { StyledLayout } from './styles';
import { BoardConfig, BoardSize } from './configurations';


interface BoardPreviewProps {
  boardConfig: BoardConfig,
  size: BoardSize,
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
        <Hexagon key={Number(...sizes[size].mapProps, 1) + i} q={hex.q} r={hex.r} s={hex.s} />
      ))}
    </StyledLayout>
  </HexGrid>
);

export default BoardPreview;
