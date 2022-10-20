import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Nomatch } from "./Nomatch";
import { OrderSummary } from "./OrderSummary";
import { Products } from "./Products";
import { Featured } from "./Featured";
import { New } from "./New";
import { Users } from "./Users";
import { UserDetails } from "./UserDetails";
import { Admin } from "./Admin";
export const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<Featured />} />
            <Route path="featured" element={<Featured />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path="admin" element={<Admin />} />
            <Route path=":userId" element={<UserDetails />} />
          </Route>

          <Route path="/ordersummary" element={<OrderSummary />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
