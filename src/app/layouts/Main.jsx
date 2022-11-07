import React from "react";

import { Link } from "react-router-dom/cjs/react-router-dom";

const Main = () => {
  return (
    <>
      <div className="inner">
        <div className="wrapper-center">
          <h3 className="headline headline--center">
            Hello! do you want something sweet?
          </h3>
          <Link to="/goods" className="link">
            Go to shopping!
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
