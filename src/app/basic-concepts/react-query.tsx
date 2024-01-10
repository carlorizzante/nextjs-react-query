'use client';

import { useMutation, useQuery } from "react-query";
import {
  getAll as getTodos,
  addOne as addTodo,
} from './todos-api';
import { queryClient } from "@/app/providers";

export const ReactQueryPage = () => {
  const { isLoading, error, data } = useQuery('todos', getTodos);

  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('todos');
      console.log('Success!')
    }
  });

  const handleAddDummyTodo = () => {
    mutation.mutate('Always the same todo...')
  }

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <br />
      <button onClick={handleAddDummyTodo}>Add dummy todo</button>
    </div>
  )
}