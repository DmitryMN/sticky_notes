import { NoteState } from '../../types/noteType';
import {createSlice } from '@reduxjs/toolkit';
import { fetchNotes } from './ActionCreators'


let initialState: NoteState = {
    notes: [],
    error: '',
    loading: false
}


export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        // fetchNodesLoading (state, action: PayloadAction<boolean>) {
        //     state.loading = action.payload
        // },
        // fetchNodesSucces(state, action: PayloadAction<Array<NodeType>>) {
        //     state.nodes = action.payload
        // }
    },
    // extraReducers: {
    //     [fetchNodes.fulfilled.type]: (state, action: PayloadAction<NodeType[]>) => {
    //         state.loading = false
    //         state.nodes = action.payload
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(fetchNotes.pending, (state) => {
                state.loading = true;
                state.error = '';
            }).addCase(fetchNotes.fulfilled, (state, action) => {
                if (action.payload) {
                    state.notes = action.payload;
                    state.loading = false;
                }
            }).addCase(fetchNotes.rejected, (state, action) => {
                if(action.payload) {
                    state.error = action.payload;
                }
            });
    }
});


export default noteSlice.reducer;