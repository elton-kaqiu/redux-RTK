import { useParams } from 'react-router-dom'; // For extracting task ID from URL
import { useGetTaskByIdQuery, useUpdateTaskMutation, useDeleteTaskMutation } from '../services/api.js';

export const Task = () => {
    const { taskId } = useParams();
    const { data: task, error, isLoading } = useGetTaskByIdQuery(taskId);


    // Handle task update
    const handleUpdate = async () => {
        console.log(`task updated`)
    };

    // Handle task deletion
    const handleDelete = async () => {
        console.log(`task deleted`)
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Task Details</h2>
            <p><strong>Title:</strong> {task.title}</p>
            <p><strong>Status:</strong> {task.completed ? 'Completed' : 'Not Completed'}</p>

            <button onClick={handleUpdate}>Toggle Completion</button>
            <button onClick={handleDelete}>Delete Task</button>
        </div>
    );
};
