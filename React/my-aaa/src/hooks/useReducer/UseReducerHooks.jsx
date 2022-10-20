import React from "react";
import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const UseReducerHooks = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increment")}>Incre</button>
      <button onClick={() => dispatch("decrement")}>Decre</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};
