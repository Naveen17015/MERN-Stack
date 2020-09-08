import React from "react";
import { NavBar } from "./NavBar";
import { Main } from "./Main";

export const Home = () => {
  return (
    <div className="container-fluid">
      <NavBar />
      <Main />
    </div>
  );
};
