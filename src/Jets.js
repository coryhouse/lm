import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadJets } from "./redux/actions/jetActions";

function Jets(props) {
  const dispatch = useDispatch();

  // Get data from the Redux store
  const jets = useSelector(state => state.jets);

  useEffect(() => {
    // Only get jets if we haven't gotten em yet.
    if (jets.length === 0) dispatch(loadJets());
  }, [dispatch, jets.length]);

  function deleteJet(id) {
    // remove the Jet from the array of jets in state.
    // setJets(jets.filter(jet => jet.id !== id));
  }

  function renderJets(jet) {
    return (
      <tr key={jet.id}>
        <td>
          <button onClick={() => deleteJet(jet.id)}>Delete</button>
        </td>
        <td>{jet.make}</td>
        <td>{jet.model}</td>
      </tr>
    );
  }

  return (
    <>
      <h1>Jets</h1>
      <Link to="/jets/manage">Add Jet</Link>
      <table>
        <thead>
          <tr>
            <th />
            <th>Make</th>
            <th>Model</th>
          </tr>
        </thead>
        {/* Point free style (jets is automatically passed by JavaScript) */}
        <tbody>{jets.map(renderJets)}</tbody>
      </table>
    </>
  );
}

export default Jets;
