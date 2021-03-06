import React from "react";
import { addJet } from "./api/jetsApi";

const newJet = { make: "", model: "" };

function ManageJets(props) {
  const [jet, setJet] = React.useState(newJet);

  function handleChange(event) {
    const jetCopy = { ...jet };
    // Is equivalent to jetCopy.make if event.target.name = "make"
    // Using computed property syntax to reference a property via a variable
    jetCopy[event.target.name] = event.target.value;
    setJet(jetCopy);
  }

  function handleSubmit(event) {
    event.preventDefault(); // don't post back to the server
    addJet(jet).then(savedJet => {
      alert("Jet saved with an id of " + savedJet.id);
      setJet(newJet); // clear form
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Jet</h1>
      <div>
        <label>Make</label>
        <br />
        <input
          type="text"
          name="make"
          value={jet.make}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Model</label>
        <br />
        <input
          type="text"
          name="model"
          value={jet.model}
          onChange={handleChange}
        />
      </div>

      <input type="submit" value="Save" />
    </form>
  );
}

export default ManageJets;
