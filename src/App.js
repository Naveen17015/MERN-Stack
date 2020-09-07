import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import { Home } from "./components/index";
import { Login } from "./components/UserInterface";
import { Register } from "./components/UserInterface2";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
    </>
  );
}

export default App;
