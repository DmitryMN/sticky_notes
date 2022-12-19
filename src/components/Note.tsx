import React, { useState } from 'react';
import { Input } from '../components/UI/Input';
import {Button} from '../components/UI/Button';
import { NoteType } from '../types/noteType';
import {useAppDispatch} from '../hooks/redux';
import {updateTextNote} from '../store/reducers/ActionCreators';

type NotePropsTYpe = {
  note: NoteType
  callBack: (id: string) => void
}

const Note: React.FC<NotePropsTYpe> = ({ note, callBack }) => {
  let [editMode, setEditMode] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const activateEditMode = () => {
    setEditMode(true);
  }

  const activateViewMode = (text: string) => {
    setEditMode(false);
    dispatch(updateTextNote({id: note.id, text}));
  }

  return (
    <div className='note'>
      <div className='note__inputfield' onDoubleClick={activateEditMode}>
        {
          editMode ? <Input placeHolderValue='введите текст' classN='note__input' callbackBlur={activateViewMode} /> : <span className='note__span'>{note.text}</span>
        }
      </div>
      <Button classN='note__btn' text='remove' callback={() => {callBack(note.id)}}/>
    </div>
  )
}

export default Note;