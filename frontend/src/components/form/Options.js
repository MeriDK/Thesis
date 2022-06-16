import { Fragment } from "react";
import { difficultyOptions } from "./constants";

const Options = ({ levelChecked, handleOptionsChange }) => {
  const handleChange = index => {
    handleOptionsChange(index);
  };

  return (
    <Fragment>
      {difficultyOptions.map(({ option }, index) => {
        return (
          <div className='option' key={option}>
            <label>
              <input
                type='checkbox'
                value={option}
                checked={levelChecked[index]}
                onChange={() => handleChange(index)}
              />
              {option}
            </label>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Options;
