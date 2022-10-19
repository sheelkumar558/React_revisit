import React from "react";
import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count - {count.firstCounter}</h1>
      <h1>secCount - {count.secondCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Incre
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decre
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
        Incre 5
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
        Decre 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
