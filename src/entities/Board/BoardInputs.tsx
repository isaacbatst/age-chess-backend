import { SyntheticEvent } from "react";
import { BoardConfigs, BoardSize, sizes } from "./configurations";
import { boardDetails } from './Board.entity';

interface BoardInputsProps {
  changeFormat: (event: SyntheticEvent<HTMLSelectElement>) => void;
  changeSize: (event: SyntheticEvent<HTMLSelectElement>) => void;
  configs: BoardConfigs;
  isShowing: boolean,
  details: boardDetails
}

const BoardInputs = ({
  changeFormat,
  changeSize,
  configs,
  isShowing,
  details
}: BoardInputsProps) => (
  <div className="label-wrapper">
    {!isShowing && <h2>Select grid type and configuration from dropdown.</h2>}
    <div className="selects-wrapper">
      <select onChange={changeFormat} disabled={isShowing} defaultValue={details.format}>
        {Object.keys(configs).map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
      <select onChange={changeSize} disabled={isShowing} defaultValue={isShowing ? details.size : sizes[1]}>
        {sizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default BoardInputs;
