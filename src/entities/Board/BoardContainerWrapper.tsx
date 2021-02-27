import { ComponentProps } from "react";

interface BoardContainerWrapperProps extends ComponentProps<'div'> {
  isShowing: boolean,
}

export const BoardContainerWrapper = ({ children, className }: BoardContainerWrapperProps) => (
  <div className={className}>
    { children }
  </div>
)
