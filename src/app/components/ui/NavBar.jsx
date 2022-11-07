import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar col-8 mb-4">
      <ul className="navbar__nav">
        <li className="Nav__item">
          <Link className="link" to="/goods">
            Sweets
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
