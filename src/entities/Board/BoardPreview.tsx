import { HexGrid, Hexagon } from 'react-hexgrid-with-context-api';
import { StyledLayout } from './styles';

interface Origin {
  x: number,
  y: number
}
interface Layout {
  x: number;
  y: number;
}

interface GridLayout {
  origin: Origin,
  flat: boolean,
  spacing: number
}

interface SizeProps {
  mapProps: Number[];
  width: Number;
  height: Number;
  layout: Layout
}

interface BoardPreviewProps {
  sizeProps: SizeProps;
  layout: GridLayout;
  hexagons;
}
const BoardPreview = ({ layout, sizeProps, hexagons }: BoardPreviewProps) => (
  <HexGrid width={sizeProps.width} height={sizeProps.height}>
    <StyledLayout
      size={sizeProps.layout}
      flat={layout.flat}
      spacing={layout.spacing}
      origin={layout.origin}
    >
      {hexagons.map((hex, i) => (
        <Hexagon key={sizeProps.mapProps + i} q={hex.q} r={hex.r} s={hex.s} />
      ))}
    </StyledLayout>
  </HexGrid>
);

export default BoardPreview;
