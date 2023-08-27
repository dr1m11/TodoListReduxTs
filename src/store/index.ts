import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todoReducer from './todoSlice.ts'
import menuReducer from './menuSlice.ts'

const reducers = combineReducers({todoReducer, menuReducer})
const store = configureStore( {
    reducer: {
        root: reducers
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch