'use client';

import { useMutation, useQuery } from "react-query";
import {
  getAll as getTodos,
  addOne as addTodo,
} from './todos-api';
import { queryClient } from "@/app/providers";

export const ReactQueryPage = () => {
  const query = useQuery({ queryKey: ['todos'], queryFn: getTodos });
  const { isLoading, error, data } = query;
  console.log(query)

  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos']});
    }
  });

  const handleAddDummyTodo = () => {
    mutation.mutate('Always the same todo...')
  }

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{(error as Error).message}</h1>;

  return (
    <div>
      <h1>Todos</h1>
      <button onClick={handleAddDummyTodo}>Add dummy todo</button>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}