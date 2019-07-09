import React from "react";

class Jets extends React.Component {
  renderJets(jet) {
    return (
      <tr key={jet.id}>
        <td>{jet.make}</td>
        <td>{jet.model}</td>
      </tr>
    );
  }

  render() {
    const jets = [
      { id: 1, make: "Lockheed", model: "Stealth" },
      { id: 2, make: "Lockheed", model: "F22" },
      { id: 3, make: "Lockheed", model: "F35" }
    ];

    return (
      <>
        <h1>Jets</h1>
        <table>
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
            </tr>
          </thead>
          {/* Point free style (jets is automatically passed by JavaScript) */}
          <tbody>{jets.map(this.renderJets)}</tbody>
        </table>
      </>
    );
  }
}

export default Jets;
