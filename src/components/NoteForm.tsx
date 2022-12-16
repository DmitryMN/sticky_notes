import React, { ChangeEvent, useState } from 'react'
import { Button } from './UI/Button'
import { useAppDispatch } from '../hooks/redux';
import { setNote } from '../store/reducers/ActionCreators';
import { NoteType } from '../types/noteType';

const NoteForm: React.FC = () => {

  const [val, setVal] = useState('');
  const dispatch = useAppDispatch();

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setVal(event.currentTarget.value);
  }

  const addNewPost = (text: string) => {
    const date = Date.now().toString();
    const newNote: NoteType = {
      id: date,
      text
    }
    dispatch(setNote(newNote));
  }

  return (
    <div className='formNote'>
      <input value={val} placeholder='Введите текст' className='form-input' onChange={changeValue}></input>
      <Button classN='btn-form' text='+' callback={() => { addNewPost(val) }} />
    </div>
  )
}

export default NoteForm;