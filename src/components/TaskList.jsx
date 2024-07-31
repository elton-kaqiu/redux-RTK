import {useGetTasksQuery} from "../services/api.js";

export const TaskList = () => {
    const {data: tasks, error, isLoading} = useGetTasksQuery()

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <ul>
            {tasks.map(task=>(
                <li key={task.id}>
                    {task.id}
                    <ul style={{marginBottom:`25px`}}>
                        <li>{task.title}</li>
                        <li>{task.completed?'Completed':'Not Completed'}</li>
                    </ul>
                </li>
            ))}

        </ul>
    )
}