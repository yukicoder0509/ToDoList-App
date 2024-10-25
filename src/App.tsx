import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import AddTaskPage from "./pages/AddTaskPage";
import MainLayout from "./layout/MainLayout";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/addtask" element={<AddTaskPage />} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
}

export default App;
