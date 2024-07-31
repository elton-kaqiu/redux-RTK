import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: `https://jsonplaceholder.typicode.com/`}),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/todos',
        }),
        getTaskById: builder.query({
            query: (id) => `/todos/${id}`,
        }),
        addTask: builder.mutation({
            query: (newTask) => ({
                url: '/todos',
                method: 'POST',
                body: newTask,
            }),
        }),
        updateTask: builder.mutation({
            query: ({id, ...updatedTask}) => ({
                url: `/todos/${id}`,
                method: 'PUT',
                body: updatedTask,
            }),
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetTasksQuery,
    useGetTaskByIdQuery,
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation
} = api