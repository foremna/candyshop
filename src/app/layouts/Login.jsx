import React, { useState } from "react";

import LoginForm from "../components/ui/LoginForm";
import RegisterForm from "../components/ui/RegisterForm";

const Login = () => {
  const [formType, setFormType] = useState("login");

  const handleChandeFormType = () => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };

  return (
    <>
      <div className="row wrapper-center">
        <div className="col-4 shadow p-3">
          {formType === "register" ? (
            <>
              <h3 className="headline-form">Register</h3>
              <RegisterForm />
              <div className="text-and-link">
                <p>Already have account?</p>
                <a
                  className="btn-link"
                  role="button"
                  onClick={handleChandeFormType}
                >
                  Sign in
                </a>
              </div>
            </>
          ) : (
            <>
              <h3 className="headline-form">Authorization</h3>
              <LoginForm />
              <div className="text-and-link">
                <p>Dont have account?</p>
                <a
                  className="btn-link"
                  role="button"
                  onClick={handleChandeFormType}
                >
                  Sign up
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
