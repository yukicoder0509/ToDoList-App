import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

type EditPageProps = {
    UpdateTaskSubmit: Function;
}

function EditPage({UpdateTaskSubmit}: EditPageProps) {
    const navigate = useNavigate();
    const [task, setTask] = useState({
        id:1,
        content: "",
        status: "",
    });
    const [content, setContent] = useState("");
    const { id } = useParams();

    useEffect(function() {
        const apiURL:string = `/api/ToDoList/${id}`
        fetch(apiURL).then((response) => response.json())
                     .then((data) => {setTask(data), setContent(data.content)})
                     .catch(() => console.log("Error fetching data"));
    },[])

    function handleClick() {
        const updatedTask = {
            id: task.id,
            content: content,
            status: task.status,
        };
        
        UpdateTaskSubmit(updatedTask);

        navigate("/");
    }

  return (
    <div>
      <label className="block font-bold m-6">Content</label>
      <input type="text" 
             className="border rounded w-full m-6" 
             value={content} 
             onChange={(e) => setContent(e.target.value)}/>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex w-24"
                    onClick={handleClick}>
            Update
        </button>
    </div>
  );
}

export default EditPage;