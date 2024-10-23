import ToDo from "./ToDo";
import { useEffect, useState} from "react";

type ListProps = {
    DeleteTaskSubmit: Function,
};

type TaskProps = {
    id: number,
    content: string,
    status: string,
};

function List({DeleteTaskSubmit}: ListProps) {
    const [ToDoList, setToDoList] = useState([]);

    useEffect(function() {
        const apiURL:string = "/api/ToDoList"
        fetch(apiURL).then((response) => response.json())
                     .then((data) => setToDoList(data))
                     .catch(() => console.log("Error fetching data"));
    },[])

    function handleDeleteTask(id:number) {
        const apiURL:string = "/api/ToDoList"
        
        DeleteTaskSubmit(id);
        
        fetch(apiURL).then((response) => response.json())
                     .then((data) => setToDoList(data))
                     .catch(() => console.log("Error fetching data"));
    }

    return (
        <div>
        <ul className="list-image-none bg-green-200">
            {ToDoList.map((task: TaskProps)=>
                (<ToDo key={task.id} id={task.id} content={task.content} status={task.status}
                       handleDeleteButton={handleDeleteTask}/>)
            )}
        </ul>
        </div>
    );
}

export default List;