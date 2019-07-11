export function getJets() {
  return fetch("http://localhost:3001/jets")
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Bad response");
    })
    .catch(error => console.log(error));
}

export function addJet(jet) {
  return fetch("http://localhost:3001/jets", {
    method: "POST",
    body: JSON.stringify(jet),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Bad response");
    })
    .catch(error => console.log(error));
}
