import { NodeState } from '../../types/nodeType';


const initialState: NodeState = {
    nodes: [],
    error: '',
    loading: false
}

export const nodeReducer = (state = initialState, action: any): NodeState => {
    switch(action) {
        default:
            return state
    }
}