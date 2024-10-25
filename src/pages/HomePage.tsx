import List from "../components/List";
import AddTaskButton from "../components/AddTaskButton";

function HomePage() {
  return (
    <div className="pl-20">
      <List />
      <AddTaskButton />
    </div>
  );
}

export default HomePage;
