import React from 'react'
import { HexGrid, Hexagon, Hex } from 'react-hexgrid-with-context-api'
import { StyledLayout } from './styles'
import { BoardLayout, Point, SizeDetails } from './configurations'

interface BoardPreviewProps {
  sizeDetails: SizeDetails
  hexagons: Hex[]
  layout: BoardLayout
  isShowing: boolean
}
const BoardPreview: React.FC<BoardPreviewProps> = ({
  layout,
  sizeDetails,
  hexagons,
  isShowing,
}: BoardPreviewProps) => {
  const layoutSize: Point = sizeDetails.layout
  const layoutSizeConsideringAction = Object.entries(layoutSize).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: isShowing ? value / 1.3 : value,
    }),
    {}
  )

  const { flat, spacing, width, height }: BoardLayout = {
    ...layout,
    width: isShowing ? layout.width / 5 : layout.width,
    height: isShowing ? layout.height / 5 : layout.height,
  }

  return (
    <HexGrid width={width} height={height}>
      <StyledLayout
        size={layoutSizeConsideringAction}
        flat={flat}
        spacing={spacing}
        origin={sizeDetails.origin}
      >
        {hexagons.map((hex, i) => (
          <Hexagon
            key={Number(...sizeDetails.mapProps, 1) + i}
            q={hex.q}
            r={hex.r}
            s={hex.s}
          />
        ))}
      </StyledLayout>
    </HexGrid>
  )
}

export default BoardPreview
