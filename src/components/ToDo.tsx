import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteTask from "../lib/DeleteTask";
import FetchToDoList from "../lib/FetchToDoList";
import UpdateTask from "../lib/UpdateTask";

type ToDoProps = {
  id: number;
  content: string;
  status: string;
  setToDoList: Function;
};

function ToDo({ id, content, status, setToDoList }: ToDoProps) {
  const [state, setState] = useState(status);
  const [imgpath, setImgpath] = useState(
    status == "Done" ? "checkmark.jpg" : ""
  );

  function handleCheckButton() {
    const newState = state === "Done" ? "Not Done" : "Done";
    setState(newState);
    //now the component is re-rendered with the new state

    console.log(`task ${id} ${state}`); //the state is the old one

    const updatedTask = {
      id: id,
      content: content,
      status: newState,
    };
    UpdateTask(updatedTask).then(() => console.log(`task ${id} ${newState}`));

    setImgpath(newState == "Done" ? "checkmark.jpg" : "");
    //now the component is re-rendered with the new state
  }

  function handleDeleteButton() {
    DeleteTask(id);
    FetchToDoList().then((data) => setToDoList(data));
  }

  return (
    <li className="m-4 border-8 border-transparent">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex w-24"
        onClick={handleCheckButton}
      >
        <img src={imgpath} className="w-5 h-5"></img>
        Check
      </button>

      <h1 className="inline-flex border-l-4 border-transparent">{content}</h1>

      <Link
        to={`/edit/${id}`}
        className="bg-indigo-600 py-2 px-4 rounded-full ml-4"
      >
        Edit
      </Link>

      <button
        className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full inline-flex"
        onClick={() => handleDeleteButton()}
      >
        Delete
      </button>
    </li>
  );
}

export default ToDo;
