interface BoardInputsProps {
  changeFormat;
  changeSize;
  configs;
  sizes;
}

const BoardInputs = ({
  changeFormat,
  changeSize,
  configs,
  sizes,
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
