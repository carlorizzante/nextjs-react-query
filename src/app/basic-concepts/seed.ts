import { nanoid } from "nanoid";
import { type Todo } from './types';

export const seed: Todo[] = [
  {
    id: nanoid(),
    text: 'Laundry'
  },
  {
    id: nanoid(),
    text: 'Breakfast'
  },
  {
    id: nanoid(),
    text: 'Coffee for mamas'
  },
];