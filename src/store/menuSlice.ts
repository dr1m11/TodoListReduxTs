import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    title: '',
    endTime: '',
    isOpen: false,
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        addTitle(state, action: PayloadAction<string>) {
            state.title = action.payload
        },
        addEndTime(state, action: PayloadAction<string>) {
            state.endTime = action.payload
        },
        changeIsOpen(state, action: PayloadAction<boolean>) {
            state.isOpen = action.payload
        },
    }
})

export const {addTitle, addEndTime, changeIsOpen} = menuSlice.actions

export default menuSlice.reducer