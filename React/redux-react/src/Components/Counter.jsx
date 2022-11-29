import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, subCount } from "../redux/Actions";

const Counter = () => {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addCount(1));
  };

  const handleSub = () => {
    dispatch(subCount(1));
  };
  return (
    <>
      <h1> Counter : {count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
    </>
  );
};

export default Counter;
