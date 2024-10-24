import ToDo from "./ToDo";
import TaskProps from "../types/TaskProps";
import { useEffect, useState } from "react";
import FetchToDoList from "../lib/FetchToDoList";

function List() {
  const [ToDoList, setToDoList] = useState([]);

  useEffect(function () {
    FetchToDoList().then((data) => setToDoList(data));
  }, []);

  return (
    <div>
      <ul className="list-image-none bg-green-200">
        {ToDoList.map((task: TaskProps) => (
          <ToDo
            key={task.id}
            id={task.id}
            content={task.content}
            status={task.status}
            setToDoList={setToDoList}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
