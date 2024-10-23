import List from "../components/List";
import AddTaskButton from "../components/AddTaskButton";

type HomePageProps ={
  DeleteTaskSubmit: Function;
}

function HomePage({DeleteTaskSubmit}: HomePageProps) {
  return (
    <>
      <List DeleteTaskSubmit={DeleteTaskSubmit}/>
      <AddTaskButton />
    </>
  );
}

export default HomePage;