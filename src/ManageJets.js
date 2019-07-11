import React from "react";

function ManageJets(props) {
  const [jet, setJet] = React.useState({ make: "", model: "" });

  function handleMakeChange(event) {
    debugger;
    const jetCopy = { ...jet };
    jetCopy.make = event.target.value;
    setJet(jetCopy);
  }

  return (
    <form>
      <h1>Add Jet</h1>
      <div>
        <label>Make</label>
        <br />
        <input type="text" value={jet.make} onChange={handleMakeChange} />
      </div>

      <div>
        <label>Model</label>
        <br />
        <input type="text" value={jet.model} />
      </div>

      <input type="submit" value="Save" />
    </form>
  );
}

export default ManageJets;
