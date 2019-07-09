import React from "react";
import Jets from "./Jets";
import Home from "./Home";
import { Route } from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Nav />
      <Route path="/" component={Home} exact />
      <Route path="/jets" component={Jets} />
    </>
  );
}

export default App;
