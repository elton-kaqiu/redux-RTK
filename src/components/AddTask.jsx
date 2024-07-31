import {useState} from "react";
import {useAddTaskMutation} from "../services/api.js";

export const AddTask = () => {

    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    const [addTask,{isLoading,isError,error,isSuccess}]=useAddTaskMutation()

    const handleSubmit =async (e) => {
        e.preventDefault();

        if (!title) {
            alert("Please enter a title");
            return;
        }

        try {
            await addTask({title,completed}).unwrap()
            setTitle('')
            setCompleted(false)
        }catch(err){
            console.error('Failed to add task', err)
        }

    }


    return (
        <div>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="completed">Completed:</label>
                    <input
                        id="completed"
                        type="checkbox"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Adding...' : 'Add Task'}
                </button>
            </form>
            {isError && <div>Error: {error.message}</div>}
            {isSuccess && <div>Task added successfully!</div>}
        </div>
    )
}