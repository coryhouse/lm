import React from "react";

class Jets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jets: [
        { id: 1, make: "Lockheed", model: "Stealth" },
        { id: 2, make: "Lockheed", model: "F22" },
        { id: 3, make: "Lockheed", model: "F35" }
      ]
    };

    // binding in the constructor
    // this.renderJets = this.renderJets.bind(this);
  }

  deleteJet() {}

  // Using concise arrow syntax
  renderJets = jet => (
    <tr key={jet.id}>
      <td>
        <button onClick={this.deleteJet}>Delete</button>
      </td>
      <td>{jet.make}</td>
      <td>{jet.model}</td>
    </tr>
  );

  render() {
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
          <tbody>{this.state.jets.map(this.renderJets)}</tbody>
        </table>
      </>
    );
  }
}

export default Jets;
