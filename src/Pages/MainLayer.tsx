import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import store from "../redux/Store"
import { addTodo, removeTodo, deleteAllTodos } from './ToDoList/ToDoListSlice'

export const MainLayer = () => {

  const myData = useSelector(state => state.todoSlice.value)

  const [liste, setListe] = useState(['selam'])

  return (
    <div className="bg-sky-200">
        <Navbar />
        <div className="h-[800px]">
          <div className="p-3 bg-stone-200 flex justify-center">
            <input
            className="p-2 outline-none rounded-lg"
            type="search" placeholder="Enter a Person" />
            <button
            className="p-2 bg-yellow-300 rounded-md pt-1 mx-3 hover:scale-105 transition-all hover:bg-yellow-400"
            
            >
              Enter
            </button>
          </div>
          <div
          className="flex flex-col bg-sky-500 p-5 text-white text-lg"
          >
            {
              liste.map((a: String) => {
                <div className="mb-5">
                  <h2>
                    {a}
                  </h2>
                </div>
              })
            }
            
          </div>
        </div>
        <Footer />
    </div>
  )
}
