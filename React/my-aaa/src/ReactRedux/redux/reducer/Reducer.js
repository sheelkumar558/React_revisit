import { ADD_COUNT, ADD_TODO } from "../actionType/ActionType";

const initiState = {
  counter: 0,
  todos: [],
};

export const countReducer = (state = initiState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case ADD_COUNT:
      return { ...state, counter: state.counter + payload };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
    default:
      return state;
  }
};
