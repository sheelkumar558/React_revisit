import React from "react";
import CV from "./../../assets/sheelkumar332Resume.pdf";
import LetsTalkBtn from "../Common/LetsTalkBtn";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="Sheelkumar\'s resume" className="btn">
        Download CV
      </a>
      <LetsTalkBtn />
    </div>
  );
};

export default CTA;
