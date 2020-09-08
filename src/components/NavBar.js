import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  return (
    <div className="container-fluid">
      <Navbar expand="lg" variant="dark" bg="success">
        <Navbar.Brand>
          <Link style={{ color: "white", fontSize: 30 }} to={{ pathname: "/" }}>
            WELCOME!
          </Link>
        </Navbar.Brand>
        <NavLink
          style={{ margin: 30, color: "white", fontSize: 20 }}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          style={{ margin: 30, color: "white", fontSize: 20 }}
          to="/register"
        >
          Sign up
        </NavLink>
      </Navbar>
    </div>
  );
};
