import React, { useEffect } from 'react';
import './App.css';
import { Input } from './components/UI/Input';
import { useAppSelector, useAppDispatch } from './hooks/redux';
import { fetchNotes } from './store/reducers/ActionCreators';
import Note from './components/Note';
import NoteForm from './components/NoteForm';

export const App = () => {
  const {notes} = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);


  return (
    <div className="App">
    <div className="container">
      <h1>Sticky Notes</h1>
      <NoteForm />
      <Input classN='search-input' placeHolderValue='Search...' />
      {
        notes.map(note => <Note key={note.id} text={note.text}/>)
      }
    </div>
  </div>
  )
}

export default App;
