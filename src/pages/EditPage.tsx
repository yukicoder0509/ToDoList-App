import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FetchTask from "../lib/FetchTask";
import UpdateTask from "../lib/UpdateTask";

function EditPage() {
  const navigate = useNavigate();
  const [task, setTask] = useState({
    id: 1,
    content: "",
    status: "",
  });
  const [content, setContent] = useState("");
  const { id } = useParams();

  useEffect(function () {
    FetchTask(id).then((data) => {
      setTask(data);
      setContent(data.content); // Update content after task is set
    });
  }, []);

  function submitForm() {
    const updatedTask = {
      id: task.id,
      content: content,
      status: task.status,
    };

    UpdateTask(updatedTask);

    navigate("/");
  }

  return (
    <form onSubmit={submitForm} className="ml-20">
      <label className="font-bold  text-2xl">Content</label>
      <input
        type="text"
        className="border-2 border-gray-400 m-4  text-2xl"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full ml-4"
      >
        Update
      </button>
    </form>
  );
}

export default EditPage;
