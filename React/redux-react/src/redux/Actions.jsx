import * as types from "./ActionType";

export const addCount = (payload) => {
  return { type: types.INCREMENT, payload };
};

export const subCount = (payload) => {
  return { type: types.DECINCREMENT, payload };
};

export const addTodo = (payload) => {
  return { type: types.ADD_TODO, payload };
};
