import TaskProps from "../types/TaskProps";

function UpdateTask(Task: TaskProps) {
  const apiURL: string = `/api/tasks/${Task.id}`;
  return fetch(apiURL, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      content: Task.content,
      status: Task.status,
    }),
  });
}
export default UpdateTask;
