import React, {useState} from 'react';
import {Input} from '../components/UI/Input'

type NotePropsTYpe = {
  text:  string
}

const Note: React.FC<NotePropsTYpe> = ({text}) => {
  let [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
}

const activateViewMode = () => {
  setEditMode(false);
}

  return (
    <div className='note'>
      {
        editMode ? <Input placeHolderValue='введите текст' className={'note__input'} callbackBlur={activateViewMode}/> : <span onDoubleClick={activateEditMode}>{text}</span>
      }
    </div>
  )
}

export default Note;