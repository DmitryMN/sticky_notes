import React, { ChangeEvent, useState } from 'react'
import { Button } from './UI/Button'

const NoteForm: React.FC = () => {

  const [val, setVal] = useState('');

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setVal(event.currentTarget.value);
}

  const addNewPost = () => {
    
  }

  return (
    <div className='formNote'>
      <input placeholder='Введите текст' className='form-input'></input>
      <Button classN='btn-form' text='+' callback={addNewPost}/>
    </div>
  )
}

export default NoteForm;