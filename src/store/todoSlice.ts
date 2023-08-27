import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type Todo = {
    id: string,
    creationTime: string,
    endTime: string,
    title: string,
    completed: boolean
}

type TodosArray = {
    list: Todo[]
}

const initialState: TodosArray = {
    list: []
}

type addingTodo = {
    title: string,
    endTime: string
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<addingTodo>) {
            state.list.push({
                id: new Date().toISOString(),
                creationTime: `${new Date().getHours()}:${new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()}`,
                endTime: action.payload.endTime,
                title: action.payload.title,
                completed: false
            })
        },
        deleteTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter(note => note.id !== action.payload)
        },
        checkTodo(state, action: PayloadAction<string>) {
            const toggleTodo = state.list.find(note => note.id === action.payload)
            if (toggleTodo) {
                toggleTodo.completed = !toggleTodo.completed
            }
        }

    }
})

export const {addTodo, deleteTodo, checkTodo} = todoSlice.actions;
export default todoSlice.reducer;