import { ADD_TODO, DELETE_TODO, FILTER, SORT } from "./action";
const init = {
  todos: [],
};
export const todoReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...store, todos: payload };
    case SORT:
      return {
        ...store,
        todos: [...store.todos].sort((a, b) =>
          a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1 : 0
        ),
      };
    case FILTER:
      return {
        ...store,
        todos: store.todos.filter((e) => e.title.includes(payload)),
      };
    case DELETE_TODO:
      return {
        ...store,
        //  todos: store.todos.filter((e) => e.id !== payload)
        todos: store.todos.map((todo) =>
          todo.id === payload ? { ...todo, status: !todo.status } : todo
        ),
      };
    default:
      return store;
  }
};
