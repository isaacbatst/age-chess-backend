import React, { ComponentProps } from 'react'

interface BoardContainerWrapperProps extends ComponentProps<'div'> {
  isShowing: boolean
}

export const BoardContainerWrapper: React.FC<BoardContainerWrapperProps> = ({
  children,
  className,
}: BoardContainerWrapperProps) => <div className={className}>{children}</div>
