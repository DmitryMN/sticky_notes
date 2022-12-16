import React, { useEffect } from 'react';
import './App.css';
import { Input } from './components/UI/Input';
import { useAppSelector, useAppDispatch } from './hooks/redux';
import { fetchNotes } from './store/reducers/ActionCreators';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import { removeNote } from './store/reducers/ActionCreators';

export const App = () => {
  const {notes, loading} = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  const deleteNote = (id: string) => {
    dispatch(removeNote(id));
  }

  if(loading) return <div>Идет загрузка...</div>

  return (
    <div className="App">
    <div className="container">
      <h1>Sticky Notes</h1>
      <NoteForm />
      <Input classN='search-input' placeHolderValue='Search...' />
      { 
        notes.map(note => <Note key={note.id} note={note} callBack={deleteNote}/>)
      }
    </div>
  </div>
  )
}

export default App;
