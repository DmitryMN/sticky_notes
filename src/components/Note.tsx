import React, { useState } from 'react';
import { Input } from '../components/UI/Input';
import { Button } from '../components/UI/Button';
import { NoteType } from '../types/noteType';
import { useAppDispatch } from '../hooks/redux';
import { updateTextNote } from '../store/reducers/ActionCreators';

export type CallBackBlurType = {
  text: string
  tag: string
}

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

  const activateViewMode = (paramInp: CallBackBlurType) => {
    setEditMode(false);
    dispatch(updateTextNote({ id: note.id, ...paramInp }));
  }

  return (
    <div className='note'>
      <div className='note__wrapp' onDoubleClick={activateEditMode}>
        <div className='note__inputfield'>
          {
            editMode ? <Input placeHolderValue='введите текст' classN='note__input' callbackBlur={activateViewMode} /> : <span className='note__span'>{note.text}</span>
          }
        </div>
        <b className='note__teg'>{note.tag}</b>
      </div>
      <Button classN='note__btn' text='remove' callback={() => { callBack(note.id) }} />
    </div>
  )
}

export default Note;