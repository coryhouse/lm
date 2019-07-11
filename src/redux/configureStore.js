import { createStore, applyMiddleware, compose } from "redux";
// Note this is loading ./reducers/index.js because index.js is loaded by default if a file isn't specified.
import rootReducer from "./reducers";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
