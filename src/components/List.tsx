import ToDo from "./ToDo";
import data from "../ToDoList.json";

type TaskProps = {
    id: number,
    content: string,
    status: string,
};

function List() {
    return (
        <div>
        <ul className="list-image-none bg-green-200">
            {data.ToDoList.map((task: TaskProps)=>(<ToDo key={task.id} id={task.id} content={task.content} status={task.status}/>))}
        </ul>
        </div>
    );
}

export default List;