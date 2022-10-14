import React from "react";
import "./footer.css";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Sandeep
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com" target="blank">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/" target="blank">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/" target="blank">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sheelkumar's Resume. Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
