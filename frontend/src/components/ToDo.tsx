import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteTask from "../lib/DeleteTask";
import FetchToDoList from "../lib/FetchToDoList";
import UpdateTask from "../lib/UpdateTask";

type ToDoProps = {
  id: number;
  content: string;
  status: boolean;
  setToDoList: (value: React.SetStateAction<never[]>) => void;
};

function ToDo({ id, content, status, setToDoList }: ToDoProps) {
  const [state, setState] = useState(status);
  const [imgpath, setImgpath] = useState(status ? "checkmark.jpg" : "");

  function handleCheckButton() {
    setState((prev) => !prev);
    //now the component is re-rendered with the new state

    const updatedTask = {
      id: id,
      content: content,
      status: state,
    };
    UpdateTask(updatedTask).then(() => console.log(`task ${id} ${state}`));

    setImgpath(state ? "checkmark.jpg" : "");
    //now the component is re-rendered with the new state
  }

  function handleDeleteButton() {
    const confirm = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirm) return;

    DeleteTask(id);
    FetchToDoList().then((data) => setToDoList(data));
  }

  return (
    <li className="m-4 w-6/12 flex items-center">
      <button
        className="rounded inline-flex w-10 h-10 mr-2 border-blue-600 border-2"
        onClick={handleCheckButton}
      >
        {imgpath == "" ? <></> : <img src={imgpath} className="size-fit"></img>}
        {/* Check */}
      </button>
      <div className="w-7/12 ml-2 inline-flex border-b-2 border-blue-200">
        <h1 className="inline-flex font-blod text-2xl">{content}</h1>
      </div>
      <Link
        to={`/edit/${id}`}
        className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-full inline-flex mx-2"
      >
        Edit
      </Link>

      <button
        className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full inline-flex mx-2"
        onClick={() => handleDeleteButton()}
      >
        Delete
      </button>
    </li>
  );
}

export default ToDo;
