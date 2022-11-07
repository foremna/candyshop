import React from "react";

const RadioFields = ({ name, onChange, value, options }) => {
  return (
    <>
      {options &&
        options.map((option, i) => (
          <div key={i} className="input-btn">
            <input
              className="input-btn__radio visually-hidden"
              type="radio"
              name={name}
              value={option.value}
              id={option.name + "_" + option.id}
              onChange={onChange}
              checked={option.value === value}
            />
            <label
              className="input-btn__label input-btn__label--radio"
              htmlFor={option.name + "_" + option.id}
            >
              {option.name}
            </label>
          </div>
        ))}
    </>
  );
};

export default RadioFields;
