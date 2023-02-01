import React from "react";

export const Image = ({ img }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <img width="370px" hight="400px" src={img} alt="" />
    </div>
  );
};
