import ToDo from "./ToDo";
import TaskProps from "../types/TaskProps";
import { useEffect, useState } from "react";
import FetchToDoList from "../lib/FetchToDoList";

function List() {
  const [ToDoList, setToDoList] = useState([]);
  const [fetchSuccess, setFetchSuccess] = useState(true);

  useEffect(function () {
    FetchToDoList()
      .then((data) => setToDoList(data))
      .catch(() => setFetchSuccess(false));
  }, []);

  return (
    <>
      {fetchSuccess ? (
        <ul className="list-image-none mb-10">
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
      ) : (
        <p className="text-red-500">Failed to fetch data</p>
      )}
    </>
  );
}

export default List;
