import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./Redux/Todo/action";

export const Todo = () => {
  const [skill, setSkill] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos.todos);

  const handleSkill = () => {
    dispatch(
      addTodo({
        title: skill,

        status: false,
      })
    );
  };
  console.log("todos");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSkill(e.target.value)}
        placeholder="enter skill"
      />

      <button onClick={handleSkill}>Add</button>
      {todos.map((e, i) => (
        <div key={i}>{e.title}</div>
      ))}
    </div>
  );
};
