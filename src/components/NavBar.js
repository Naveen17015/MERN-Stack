import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar fixed-top navbar-dark bg-primary" id="nav">
      <nav>
        <ul className="navigation">
          <Link to={{ pathname: "/Login" }}>Login</Link>
          <Link to={{ pathname: "/Register" }}>Sign up</Link>
        </ul>
      </nav>
    </div>
  );
};
