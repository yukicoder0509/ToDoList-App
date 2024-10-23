import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import AddTaskPage from "./pages/AddTaskPage";
//import MainLayout from "./layout/MainLayout";
import {Route, 
        createBrowserRouter, 
        createRoutesFromElements, 
        RouterProvider} from "react-router-dom"

type TaskProps = {
    id: number,
    content: string,
    status: string,
};

function App(){
  function EditTask(updatedTask:TaskProps) {
    const apiURL:string = `/api/ToDoList/${updatedTask.id}`

    fetch(apiURL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
    })
  }

  function AddTask(newTask:TaskProps) {
    const apiURL:string = "/api/ToDoList"
    fetch(apiURL, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    }).then(() => console.log(`Task added: ${newTask.content}`))
        .catch(() => console.log("Error adding task"));
  }

  function DeleteTask(id:number) {
    const apiURL:string = `/api/ToDoList/${id}`;
    fetch(apiURL, {
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    }).then(() => console.log(`task ${id} deleted`))
  }

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<HomePage DeleteTaskSubmit={DeleteTask}/>} />
        <Route path="/edit/:id" element={<EditPage UpdateTaskSubmit={EditTask}/>} />
        <Route path="/addtask" element={<AddTaskPage AddTaskSubmit={AddTask}/>} />
      </>
    )
  );
  return <RouterProvider router={routes} />;
}

export default App;