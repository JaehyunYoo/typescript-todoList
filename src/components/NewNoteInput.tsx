import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoItem } from '../store/todoReducer/actions';

function NewNoteInput() {
  const [note, setNote] = useState<string>('');
  const dispatch = useDispatch();

  const updateNote = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const addTodoSubmit = () => {
    dispatch(addTodoItem(note));
    setNote('');
  };

  return (
    <div>
      <input
        onChange={updateNote}
        value={note}
        type='text'
        name='note'
        placeholder='Note'
      />
      <button onClick={addTodoSubmit}>Add note</button>
    </div>
  );
}

export default NewNoteInput;
