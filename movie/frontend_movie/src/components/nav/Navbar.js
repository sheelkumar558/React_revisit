import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
export const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/">Movie</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/producer">Producer</NavLink>
    </nav>
  );
};
