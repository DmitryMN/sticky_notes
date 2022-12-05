import { NodeState, NodeType} from '../../types/nodeType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


let initialState: NodeState = {
    nodes: [],
    error: '',
    loading: false
}


export const nodeSlice = createSlice({
    name: 'nodes',
    initialState,
    reducers: {
        fetchNodesLoading (state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
        fetchNodesSucces(state, action: PayloadAction<Array<NodeType>>) {
            state.nodes = action.payload
        }
    }
}); 


export default nodeSlice.reducer;