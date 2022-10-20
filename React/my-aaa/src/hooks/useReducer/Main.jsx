import React, { createContext } from "react";
import { useReducer } from "react";
export const CountContext = createContext();
import { A } from "./A";
import { B } from "./B";
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

export const Main = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div>
        <h1>{count}</h1>
        <A />
        <B />
      </div>
    </CountContext.Provider>
  );
};
