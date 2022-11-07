import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <NavBar />
          <Link className="link link--btn" to="/login">
            Login / Register
          </Link>
          <Link className="icon-btn link link--btn cart-icon" to="/cart">
            <i className="bi bi-basket"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
