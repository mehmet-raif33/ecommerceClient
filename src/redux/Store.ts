import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './ToDoList/ToDoListSlice'
import  UserSlice  from './UserHere/UserHere'

const store = configureStore({
  reducer: {
    todos: todoReducer,
    userData: UserSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store