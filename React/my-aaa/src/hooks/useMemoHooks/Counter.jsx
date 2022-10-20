import React from "react";
import { useMemo } from "react";
import { useState } from "react";

export const Counter = () => {
  const [counta, setCounta] = useState(0);
  const [countb, setCountb] = useState(0);

  const incrementA = () => {
    setCounta(counta + 1);
  };
  const incrementB = () => {
    setCountb(countb + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counta % 2 === 0;
  }, [counta]);
  return (
    <div>
      <h1>A - {counta}</h1>
      <h1>B - {countb}</h1>
      <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      <button onClick={incrementA}>intA</button>

      <button onClick={incrementB}>intB</button>
    </div>
  );
};
