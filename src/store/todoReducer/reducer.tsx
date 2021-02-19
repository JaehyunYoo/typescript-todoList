import { ADD_TODO_LIST } from '../types';

export type DataType = {
  id: number;
  text: string;
  done: boolean;
};

const INITIAL_STATE = [
  {
    id: 1,
    text: '안녕하세요',
    done: false,
  },
  {
    id: 2,
    text: '안녕하세요222',
    done: false,
  },
  {
    id: 3,
    text: '안녕하세요333',
    done: false,
  },
];

const todoListReducer = (state: DataType[] = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_TODO_LIST:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoListReducer;
