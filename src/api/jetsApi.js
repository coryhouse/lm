export function getJets() {
  return fetch("http://localhost:3001/jets").then(response => {
    if (response.ok) return response.json();
    throw new Error("Bad response");
  });
}
