import { NoteState, NoteType } from '../../types/noteType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchNotes, setNote } from './ActionCreators'


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
                state.error = action.payload;
            }
        })
    }
});


export default noteSlice.reducer;