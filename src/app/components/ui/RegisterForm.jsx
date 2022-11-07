import React, { useState } from "react";

import { TextField } from "../common/form";

const RegisterForm = () => {
  const [data, setData] = useState({});

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <div className="btn-wrapper btn-wrapper--center btn-wrapper--full-btn mb-2">
          <button className="btn btn-primary">Continue</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
