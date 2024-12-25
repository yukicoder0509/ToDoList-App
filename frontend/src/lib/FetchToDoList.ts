const apiURL: string = "/api/tasks";
function FetchToDoList() {
  return fetch(apiURL, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch(() => console.log("Error fetching data"))
    .catch(() => []);
}
export default FetchToDoList;
