import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type AddTaskPageProps = {
    AddTaskSubmit: Function;
}

function AddTaskPage({AddTaskSubmit}: AddTaskPageProps) {
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    
    const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        
        const newTask = {
            content: content,
            status: "Not Done",
        }
        AddTaskSubmit(newTask);
        
        navigate("/");
    }
    return (
        <form onSubmit={submitForm}>
            <label>Task</label>
            <input type="text"
                    className="border"
                   required
                   value={content}
                   onChange={(e) => setContent(e.target.value)} />
            <button type="submit" className='bg-indigo-300 px-4 py-2 ml-2 rounded'>
                Add Task
            </button>
        </form>
    )
}

export default AddTaskPage;