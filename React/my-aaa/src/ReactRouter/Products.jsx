import React from "react";
import { Link, Outlet } from "react-router-dom";
export const Products = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="search products..." />
      </div>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </div>
  );
};
