import React from "react";
import ME from "./../../assets/pngpic.png";

const HeaderImage = () => {
  return (
    <div className="me">
      <img src={ME} max-width="30%" height="400px" alt="me" />
    </div>
  );
};

export default HeaderImage;
