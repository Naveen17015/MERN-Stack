import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar-expand-sm">
        <h1>
          <Link to="/">Welcome</Link>
        </h1>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
