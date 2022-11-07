import React from "react";

const TextField = ({ label, type, name, value, onChange }) => {
  return (
    <div className="input-container">
      <input
        type={type}
        id={name}
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      />
      <span className="input-container__label">{label}</span>
    </div>
  );
};

TextField.defaultProps = {
  type: "type",
};

export default TextField;
