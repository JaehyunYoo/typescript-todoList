import { ADD_TODO_LIST } from '../types';

let autoId: number = 4;
export const addTodoItem = (value: string) => {
  return {
    type: ADD_TODO_LIST,
    payload: {
      id: autoId++,
      text: value,
      done: false,
    },
  }
};
