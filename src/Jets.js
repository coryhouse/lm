import React, { useState, useEffect } from "react";
import { getJets } from "./api/jetsApi";

function Jets(props) {
  const [jets, setJets] = useState([]);

  useEffect(() => {
    getJets().then(jets => setJets(jets));
  }, []);

  function deleteJet(id) {
    // remove the Jet from the array of jets in state.
    setJets(jets.filter(jet => jet.id !== id));
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
