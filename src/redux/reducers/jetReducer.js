export default function jetReducer(state = [], action) {
  switch (action.type) {
    case "LOAD_JETS_SUCCESS":
      // whatever I return becomes the new state.
      return action.jets;
    case "ADD_JET_SUCCESS":
      // Copy existing state and add new jet
      return [...state, action.jet];
    default:
      return state;
  }
}
