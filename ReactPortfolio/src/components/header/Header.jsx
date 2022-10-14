import React from "react";
import "./header.css";
import "./CTA";
import CTA from "./CTA";
import HeaderImage from "./HeaderImage";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container" id="#">
        <h5>Hello</h5>
        <h1>SheelKumar</h1>
        <h5 className="text-light">Developer</h5>

        <CTA />
        <HeaderSocials />
        <HeaderImage />

        <a href="#contact" className="scroll__down">
          {" "}
          Scroll Down{" "}
        </a>
      </div>
    </header>
  );
};

export default Header;
