import React from "react";

export const Image = ({ img }) => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "380px",
        height: "410px",
        margin: "auto",
      }}
    >
      <img width="370px" height="400px" src={img} alt="clicked any image" />
    </div>
  );
};
