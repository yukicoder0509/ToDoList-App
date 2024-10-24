function FetchTask(id: string | undefined) {
  const apiURL: string = `/api/ToDoList/${id}`;
  return fetch(apiURL)
    .then((response) => response.json())
    .catch(() => console.log("Error fetching data"));
}
export default FetchTask;
