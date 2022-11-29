import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addCount, addTodo } from "./redux/action/Action";

export const Main = () => {
  const dispatch = useDispatch();
  const Counter = useSelector((state) => state.counter);
  const todos = useSelector((state) => state.todos);
  console.log("main", todos);
  const [text, setText] = useState("");
  console.log(text);
  return (
    <div>
      <h1>{Counter}</h1>
      <button onClick={() => dispatch(addCount(1))}>count</button>
      <br />
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <br />
      {todos.map((e) => (
        <h1 key={e.id}>{e}</h1>
      ))}
      <button onClick={() => dispatch(addTodo(text))}>Todos</button>
    </div>
  );
};
