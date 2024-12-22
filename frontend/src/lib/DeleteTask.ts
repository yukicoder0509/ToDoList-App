function DeleteTask(id: string | number | undefined) {
  const apiURL: string = `/api/ToDoList/${id}`;
  fetch(apiURL, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  })
    .then(() => console.log(`Task ${id} deleted`))
    .catch(() => console.log("Error deleting task"));
}
export default DeleteTask;
