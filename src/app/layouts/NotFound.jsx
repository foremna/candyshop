import React from "react";

import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="wrapper-center">
        <p className="not-found__title">404</p>
        <div className="text-and-link">
          <p>Ooops! something went wrong, apparently there is no such page</p>
          <Link to="/" className="link">
            go to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
