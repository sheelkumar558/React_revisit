import { ADD_TODO, DECINCREMENT, INCREMENT } from "./ActionType";
const initialState = {
  count: 0,
  todos: [],
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + payload };
    case DECINCREMENT:
      return { ...state, count: state.count - payload };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
    default:
      return state;
  }
};
