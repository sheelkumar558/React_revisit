import { ADD_COUNT, ADD_TODO } from "../actionType/ActionType";

export const addCount = (data) => {
  return {
    type: ADD_COUNT,
    payload: data,
  };
};

export const addTodo = (data) => {
  console.log(data);
  return {
    type: ADD_TODO,
    payload: data,
  };
};
