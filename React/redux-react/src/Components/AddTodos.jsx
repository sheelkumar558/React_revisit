import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/Actions";

export const AddTodos = () => {
  const [data, setData] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" onChange={(e) => setData(e.target.value)} />
      {todos.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
      <button onClick={() => dispatch(addTodo(data))}>todo</button>
    </div>
  );
};
