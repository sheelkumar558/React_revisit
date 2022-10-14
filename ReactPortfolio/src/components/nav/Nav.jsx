import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";

const nav = () => {
  const [activeNav, setActiveNacv] = useState("#");

  return (
    <nav>
      <a
        href="#home"
        onClick={() => {
          setActiveNacv("#");
        }}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNacv("#about");
        }}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setActiveNacv("#experience");
        }}
        className={activeNav === "#experience" ? "active" : ""}
      >
        {" "}
        <BiBook />
      </a>
      {/* <a href='#services' onClick= {() => {setActiveNacv('#services')}} className= {activeNav === '#services' ? 'active' : ''}> <RiServiceLine/></a>  */}
      <a
        href="#contact"
        onClick={() => {
          setActiveNacv("#contact");
        }}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default nav;
