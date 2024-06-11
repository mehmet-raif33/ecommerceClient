import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: number
    text: string
}
  
interface TodosState {
    todos: Todo[]
}
  
const initialState: TodosState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
          const newTodo = { id: Date.now(), text: action.payload }
          state.todos.push(newTodo)
        },
        removeTodo: (state, action: PayloadAction<number>) => {
          state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        deleteAllTodos: (state) => {
          state.todos = []
        },
    },
})

export const { addTodo, removeTodo, deleteAllTodos } = todoSlice.actions

export default todoSlice.reducer