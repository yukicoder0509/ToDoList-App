import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
//import MainLayout from "./layout/MainLayout";
import {Route, 
        createBrowserRouter, 
        createRoutesFromElements, 
        RouterProvider} from "react-router-dom"


function App(){
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<HomePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </>
    )
  );
  return <RouterProvider router={routes} />;
}

export default App;