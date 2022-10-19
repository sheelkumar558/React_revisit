import React from "react";
import { useContext } from "react";
import { CountContext } from "./Main";

export const A = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h1>CountA - {countContext.countState}</h1>
      <button onClick={() => countContext.countDispatch("increment")}>
        Incre
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decre
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};
