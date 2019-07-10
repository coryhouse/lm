import React from "react";
import { getJets } from "./api/jetsApi";

class Jets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jets: []
    };

    // binding in the constructor
    // this.renderJets = this.renderJets.bind(this);
  }

  componentDidMount() {
    getJets().then(jets => {
      this.setState({ jets: jets });
    });
  }

  deleteJet(id) {
    // remove the Jet from the array of jets in state.
    const jets = this.state.jets.filter(jet => jet.id !== id);
    this.setState({ jets: jets });
  }

  // Using concise arrow syntax
  renderJets = jet => (
    <tr key={jet.id}>
      <td>
        <button onClick={() => this.deleteJet(jet.id)}>Delete</button>
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
