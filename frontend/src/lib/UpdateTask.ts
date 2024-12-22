import TaskProps from "../types/TaskProps";

function UpdateTask(Task: TaskProps) {
  const apiURL: string = `/api/ToDoList/${Task.id}`;
  return fetch(apiURL, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(Task),
  });
}
export default UpdateTask;
