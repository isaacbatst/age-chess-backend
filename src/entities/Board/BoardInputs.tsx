import { SyntheticEvent } from "react";
import { BoardConfigs, BoardSizes, sizes } from "./configurations";

interface BoardInputsProps {
  changeFormat: (event: SyntheticEvent<HTMLSelectElement>) => void;
  changeSize: (event: SyntheticEvent<HTMLSelectElement>) => void;
  configs: BoardConfigs;
}

const BoardInputs = ({
  changeFormat,
  changeSize,
  configs,
}: BoardInputsProps) => (
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
);

export default BoardInputs;
