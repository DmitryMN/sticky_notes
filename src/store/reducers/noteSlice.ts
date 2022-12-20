import { NoteState } from '../../types/noteType';
import { createSlice } from '@reduxjs/toolkit';
import { fetchNotes, setNote, removeNote, updateTextNote } from './ActionCreators'


let initialState: NoteState = {
    notes: [],
    error: '',
    loading: false
}


export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNotes.pending, (state) => {
            state.loading = true;
            state.error = '';
        }).addCase(fetchNotes.fulfilled, (state, action) => {
            state.loading = false;
            if(action.payload) {
                state.notes = action.payload;
            }
        }).addCase(fetchNotes.rejected, (state, action) => {
            if (action.payload) {
                state.loading = false;
                state.error = action.payload;
            }
        }).addCase(setNote.pending, (state) => {
            state.loading = true;
            state.error = '';
        }).addCase(setNote.fulfilled, (state, action) => {
            state.loading = false;
            if(action.payload !== undefined) state.notes.push(action.payload);
        }).addCase(setNote.rejected, (state, action) => {
            if (action.payload) {
                state.loading = false;
                state.error = action.payload;
            }
        }).addCase(removeNote.pending, (state) => {
            state.loading = true
            state.error = '';
        }).addCase(removeNote.fulfilled, (state, action) => {
            state.loading = false;
            if(action.payload) {
                state.notes = state.notes.filter(note => note.id !== action.payload)
            }
        }).addCase(removeNote.rejected, (state, action) => {
            if (action.payload) {
                state.loading = false;
                state.error = action.payload;
            }
        }).addCase(updateTextNote.pending, (state) => {
            state.loading = true;
            state.error = '';
        }).addCase(updateTextNote.fulfilled, (state, action) => {
            if(action.payload) {
                state.loading = false;
                let data = action.payload
                state.notes.forEach((note) => {
                    if(note.id === data.id) {
                        note.text = data.text
                        note.tag = data.tag
                    }
                });
            }
        }).addCase(updateTextNote.rejected, (state, action) => {
            if (action.payload) {
                state.loading = false;
                state.error = action.payload;
            }
        })
    }
});


export default noteSlice.reducer;