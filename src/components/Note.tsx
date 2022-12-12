import React, { useState } from 'react';
import { Input } from '../components/UI/Input'

type NotePropsTYpe = {
  text: string
}

const Note: React.FC<NotePropsTYpe> = ({ text }) => {
  let [editMode, setEditMode] = useState<boolean>(false);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const activateViewMode = () => {
    setEditMode(false);
    console.log("bluur");
  }

  return (
    <div className='note'>
      <div className='note__inputfield' onDoubleClick={activateEditMode}>
        {
          editMode ? <Input placeHolderValue='введите текст' classN='note__input' callbackBlur={activateViewMode} /> : <span className='note__span'>{text}</span>
        }
      </div>
    </div>
  )
}

export default Note;