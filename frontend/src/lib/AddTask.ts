type NewTaskProps = {
  content: string;
  status: string;
};

function AddTask(Task: NewTaskProps) {
  const apiURL: string = "/api/ToDoList";
  return fetch(apiURL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(Task),
  })
    .then(() => console.log(`Task added: ${Task.content}`))
    .catch(() => console.log("Error adding task"));
}

export default AddTask;
