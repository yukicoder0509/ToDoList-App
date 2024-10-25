import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddTask from "../lib/AddTask";

function AddTaskPage() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newTask = {
      content: content,
      status: "Not Done",
    };
    AddTask(newTask);

    navigate("/");
  };
  return (
    <form onSubmit={submitForm} className="ml-20">
      <label>New Task</label>
      <input
        type="text"
        className="border m-4"
        required
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full ml-4"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTaskPage;
