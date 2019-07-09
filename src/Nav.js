import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const activeStyle = {
    color: "orange"
  };

  return (
    <div>
      <NavLink activeStyle={activeStyle} to="/" exact>
        Home
      </NavLink>{" "}
      <NavLink activeStyle={activeStyle} to="/jets">
        Jets
      </NavLink>
    </div>
  );
};

export default Nav;
