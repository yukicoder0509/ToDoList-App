import { useState } from "react";
import { Link } from "react-router-dom";

type ToDoProps = {
    id: number,
    content: string,
    status: string,
    handleDeleteButton: Function,
};

function ToDo({id, content, status, handleDeleteButton}: ToDoProps) {
    const [state, setState] = useState(status);
    const [imgpath, setImgpath] = useState((status=="Done") ? "checkmark.jpg" : "");

    function handleCheckButton(){
        const newState = state === "Done" ? "Not Done" : "Done";
        setState(newState);
        //now the component is re-rendered with the new state

        console.log(`task ${id} ${state}`);//the state is the old one

        const updatedTask = {
            id: id,
            content: content,
            status: newState,
        };
        fetch(`/api/ToDoList/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedTask),
        }).then(() => console.log(updatedTask))
          .catch(() => console.log("Error updating task"));

        setImgpath((newState=="Done") ? "checkmark.jpg" : "");
        //now the component is re-rendered with the new state
    }

    return (
        <li className="m-4 border-8 border-transparent">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex w-24"
                    onClick={handleCheckButton}>
            <img src={imgpath} className="w-5 h-5"></img>
            Check
            </button>

            <h1 className="inline-flex border-l-4 border-transparent">{content}</h1>

            <Link to={`/edit/${id}`} className="bg-indigo-600 py-2 px-4 rounded-full ml-4">Edit</Link>

            <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full inline-flex"
                    onClick={() => handleDeleteButton(id)}>
            Delete
            </button>
        </li>
    )
}

export default ToDo;