import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterFun, getData, sort, deleteFun } from "./Redux/Todo/action";

export const Todo = () => {
  const [skill, setSkill] = useState("");
  const [filt, setFilt] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos.todos);

  const handleSkill = () => {
    const payload = {
      title: skill,
      status: false,
    };
    fetch("http://localhost:8000/todos", {
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(() => setSkill(""))
      .then(() => dispatch(getData()));
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

  console.log("todos");
  return (
    <div>
      <select
        onChange={(e) => {
          dispatch(sort(e.target.value));
        }}
      >
        <option value="id">sort by id</option>
        <option value="status">sort by status</option>
        <option value="title">sort by title</option>
      </select>
      <input
        value={skill}
        type="text"
        onChange={(e) => setSkill(e.target.value)}
        placeholder="enter skill"
      />

      <button onClick={handleSkill}>Add</button>
      <input
        type="text"
        placeholder="filter todo"
        onChange={(e) => {
          setFilt(e.target.value);
        }}
      />
      {todos
        .filter((todo) => todo.title.includes(filt))
        .map((e, i) => (
          <div key={i}>
            {e.id} : {e.title} - {e.status ? "done" : "not done"}
            <button
              onClick={() => {
                dispatch(deleteFun(e.id));
              }}
            >
              Togggle
            </button>
          </div>
        ))}
    </div>
  );
};
