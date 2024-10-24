const apiURL: string = "/api/ToDoList";
function FetchToDoList() {
  return fetch(apiURL)
    .then((response) => response.json())
    .catch(() => console.log("Error fetching data"))
    .catch(() => []);
}
export default FetchToDoList;
