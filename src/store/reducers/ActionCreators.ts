import { createAsyncThunk } from '@reduxjs/toolkit';
import { noteApi } from '../../api/NoteApi';
import { NoteType } from '../../types/noteType';

// export const fetchNodes = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(nodeSlice.actions.fetchNodesLoading(true));        
//         const response = await nodeApi.getNodes();
//         console.log(response.data);
//         dispatch(nodeSlice.actions.fetchNodesSucces(response.data)); 
//     } catch(e) {

//     }
// }

export const fetchNotes = createAsyncThunk<Array<NoteType> | undefined, void, {rejectValue: string}>(
    'note/fetchNote', 
    async (_ ,{rejectWithValue}) => {
    try {
        const response =  await noteApi.getNodes();
        if(response.status === 200) {
            return response.data
        } else {
            throw new Error('Нет данных');
        }
    } catch(e) {
        return rejectWithValue('server Error')
    }
})

export const setNote = createAsyncThunk<NoteType | undefined, NoteType, { rejectValue: string }>(
    "note/setNote",
    async (newNote, {rejectWithValue}) => {
        try {
            const response = await noteApi.addNewNote(newNote);
            if (response.status === 201 && response.data) {
                return response.data;
            }
        } catch (e) {
            return rejectWithValue("Error add new Note");
        }
    },
);

export const removeNote = createAsyncThunk<string | undefined, string, { rejectValue: string }>(
    "note/removeNote",
    async (id, {rejectWithValue}) => {
        try {
            const response = await noteApi.removeNote(id);
            if(response.status === 200) {
                return id;
            }            
        } catch (e) {
            return rejectWithValue("Error add new Note");
        }
    },
);