import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar fixed-top navbar-dark bg-primary" id="nav">
      <nav>
        <ul className="navigation">
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              margin: 50,
              padding: 10,
            }}
            to={{ pathname: "/Login" }}
          >
            Login
          </Link>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              margin: 50,
              padding: 10,
            }}
            to={{ pathname: "/Register" }}
          >
            Sign up
          </Link>
        </ul>
      </nav>
    </div>
  );
};
