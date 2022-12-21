import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { todoReducer } from "./Todo/reducer";
import { counterReducer } from "./Counter/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  todos: todoReducer,
  counter: counterReducer,
});

// const loggerMiddleware = (store) => (next) => (action) => {
//   // console.log("action", action);
//   if (typeof action === "function") {
//     return action(store.dispatch);
//   }
//   next(action);
// };

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
