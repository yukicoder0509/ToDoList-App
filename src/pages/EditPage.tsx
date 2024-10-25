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

  function handleClick() {
    const updatedTask = {
      id: task.id,
      content: content,
      status: task.status,
    };

    UpdateTask(updatedTask);

    navigate("/");
  }

  return (
    <div className="w-4/12 ml-40">
      <label className="block font-bold mb-5 text-2xl">Content</label>
      <input
        type="text"
        className="border-gray-400 border-2 rounded w-full mb-4 text-2xl"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex w-24"
        onClick={handleClick}
      >
        Update
      </button>
    </div>
  );
}

export default EditPage;
