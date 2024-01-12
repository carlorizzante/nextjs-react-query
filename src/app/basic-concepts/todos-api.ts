import { nanoid } from 'nanoid';
import { seed } from './seed';
import { type Todo } from './types';

const TODOS: Todo[] = [];
seed.forEach((todo) => TODOS.push(todo));

// export const setup = async (): Promise<Todo[]> => {
//   seed.forEach((todo) => TODOS.push(todo));
//   return TODOS;
// }

export const getAll = async (): Promise<Todo[]> => TODOS;

export const addOne = async (text: string): Promise<Todo> => {
  const todo = { id: nanoid(), text };
  TODOS.push(todo);
  return todo;
}