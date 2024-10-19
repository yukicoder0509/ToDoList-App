import { useState } from "react";
import { Link } from "react-router-dom";

type ToDoProps = {
    id: number,
    content: string,
    status: string,
};

function ToDo({id, content, status}: ToDoProps) {
    const [state, setState] = useState(status);
    let imgpath: string = (state=="Done") ? "checkmark.jpg" : "";

    function handleClick(){
        if(state=="Done"){
            setState("Not Done");
            console.log(`task ${id} Not Done`);
        }
        else{
            setState("Done");
            console.log(`task ${id} Done`);
        }
        const updatedTask = {
            id: id,
            content: content,
            status: state,
        };
        fetch(`/api/ToDoList/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedTask),
        }).then(() => console.log(updatedTask)).catch(() => console.log("Error updating task"));
        imgpath = (state=="Done") ? "checkmark.jpg" : "";
        
    }

    return (
        <li className="m-4 border-8 border-transparent">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex w-24"
                    onClick={handleClick}>
            <img src={imgpath} className="w-5 h-5"></img>
            Check
            </button>

            <h1 className="inline-flex border-l-4 border-transparent">{content}</h1>

            <Link to={`/edit/${id}`} className="bg-indigo-600 py-2 px-4 rounded-full ml-4">Edit</Link>
        </li>
    )
}

export default ToDo;