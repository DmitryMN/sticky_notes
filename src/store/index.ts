import { configureStore } from '@reduxjs/toolkit';
import nodeReducer from './reducers/nodeSlice';

export const store = configureStore({
    reducer: {
        nodes: nodeReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>