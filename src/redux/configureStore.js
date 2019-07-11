import { createStore, applyMiddleware } from "redux";
// Note this is loading ./reducers/index.js because index.js is loaded by default if a file isn't specified.
import rootReducer from "./reducers";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
