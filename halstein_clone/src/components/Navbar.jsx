// import { Select } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import "./nav.css";
export const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>halstein</h1>
        <p>SOLUTIONS</p>
      </div>
      <div className="line"></div>
      <div className="other">
        <div className="first">
          <div className="first second ">
            <p>halstein@example.com</p>
            <p>+99 4 11 72 1270</p>
            <p>Mon-Fri 9am-5pm</p>
          </div>
          <div>
            <p>
              English <ChevronDownIcon />
            </p>
          </div>
        </div>
        <hr />
        <div className="first">
          <div className="second ">
            <a href="###">HOME</a>
            <a href="###">PAGES</a>
            <a href="###">PORTFOLIO</a>
            <a href="###">SHOP</a>
          </div>
          <div>
            <p>INFO</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
