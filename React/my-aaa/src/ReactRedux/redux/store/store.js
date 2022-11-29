import { legacy_createStore as createStore } from "redux";
import { countReducer } from "../reducer/Reducer";

export const store = createStore(countReducer);
