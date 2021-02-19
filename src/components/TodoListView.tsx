import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

function TodoListView() {
  const item = useSelector((store: RootState) => store.todoListReducer);
  console.log(item);
  return (
    <div>
      {
        item.map(item => {
          return(
            <p key={item.id}>{item.text}</p>
          )
        })
      }
    </div>
  );
}

export default TodoListView;
