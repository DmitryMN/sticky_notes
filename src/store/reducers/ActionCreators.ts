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

export const fetchNotes = createAsyncThunk<NoteType[] | undefined, void, { rejectValue: string }>(
    "node/fetchNodes",
    async (_, { rejectWithValue }) => {
        try {
            const response = await noteApi.getNodes();
            return response.data;
        } catch (e) {
            if (e instanceof Error) {
                rejectWithValue(e.message);
            }
        }
    },
);
