import { HexGrid, Hexagon, Hex } from 'react-hexgrid-with-context-api';
import { StyledLayout } from './styles';
import { BoardConfig, BoardSize, Point } from './configurations';


interface BoardPreviewProps {
  boardConfig: BoardConfig,
  size: BoardSize,
  hexagons: Hex[];
  layoutSize: Point
}
const BoardPreview = ({ boardConfig: { layout, sizes }, size, hexagons, layoutSize }: BoardPreviewProps) => {
  return (
    <HexGrid width={layout.width} height={layout.height} >
      <StyledLayout
        size={layoutSize}
        flat={layout.flat}
        spacing={layout.spacing}
        origin={sizes[size].origin}
      >
        {hexagons.map((hex, i) => (
          <Hexagon key={Number(...sizes[size].mapProps, 1) + i} q={hex.q} r={hex.r} s={hex.s} />
        ))}
      </StyledLayout>
    </HexGrid>
  )
};

export default BoardPreview;
