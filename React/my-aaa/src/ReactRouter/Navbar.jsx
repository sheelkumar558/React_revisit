import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinkstyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-around" }}>
      <NavLink style={navLinkstyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkstyles} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkstyles} to="/products">
        Products
      </NavLink>
    </nav>
  );
};
