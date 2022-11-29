import React from "react";
import { Counter } from "./components/Counter";
import { Todo } from "./components/Todo";

export const App = () => {
  return (
    <div>
      <Counter />
      <hr />
      <Todo />
    </div>
  );
};
