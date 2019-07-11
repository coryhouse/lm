import * as jetsApi from "../../api/jetsApi";

// Action creator
export function loadJetsSuccess(jets) {
  // Action
  return { type: "LOAD_JETS_SUCCESS", jets: jets };
}

export function addJetSuccess(jet) {
  return { type: "ADD_JET_SUCCESS", jet: jet };
}

// Thunk
export function loadJets() {
  return function(dispatch) {
    return jetsApi.getJets().then(jets => {
      dispatch(loadJetsSuccess(jets));
    });
  };
}

export function addJet(jet) {
  return function(dispatch) {
    return jetsApi.addJet(jet).then(jet => {
      dispatch(addJetSuccess(jet));
    });
  };
}
