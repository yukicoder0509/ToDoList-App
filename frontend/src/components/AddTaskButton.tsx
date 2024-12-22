import { Link } from "react-router-dom";

function AddTaskButton() {
  return (
    <Link
      to="/addtask"
      className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full ml-4"
    >
      Add Task
    </Link>
  );
}

export default AddTaskButton;
