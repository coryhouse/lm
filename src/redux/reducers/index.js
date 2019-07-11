import { combineReducers } from "redux";
import jets from "./jetReducer";

// In a real app, you'd have more reducers to combine here.
const rootReducer = combineReducers({
  jets: jets
});

export default rootReducer;
