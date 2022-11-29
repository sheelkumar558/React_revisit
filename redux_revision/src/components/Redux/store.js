import { combineReducers, legacy_createStore } from "redux";
import { todoReducer } from "./Todo/reducer";
import { counterReducer } from "./Counter/reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  counter: counterReducer,
});

export const store = legacy_createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
