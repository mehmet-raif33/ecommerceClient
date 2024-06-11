import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { useState } from "react"
import { useSelector , useDispatch } from "react-redux"
import { RootState } from "../redux/Store"
import { addTodo, removeTodo } from '../redux/ToDoList/ToDoListSlice'
import { Todo } from "../redux/ToDoList/ToDoListSlice"
import { AnimatePresence , motion } from "framer-motion"

const container = {
  hidden: {

  },
  visible: {

  }
}

const item = {
  hidden: {

  },
  visible: {
    
  }
}

export const MainLayer = () => {
  

  const dispatch = useDispatch();
  const [inputData, setInputData] = useState<string>('')

  const myData = useSelector( (state: RootState) => state.todos.todos)
  
  console.log(myData)
  return (
    <div className="bg-sky-200">
        <Navbar />
        <div className="h-[800px]">
          <div className="p-3 bg-stone-200 flex justify-center">
            <input
            onChange={(e) => {
              setInputData(e.target.value)
            }}
            value={inputData} 
            className="p-2 outline-none rounded-lg"
            type="search" placeholder="Enter a Person" />
            <button
            className="p-2 bg-yellow-300 rounded-md pt-1 mx-3 hover:scale-105 transition-all hover:bg-yellow-400"
            onClick={() => {
              if (inputData.trim()) {  // inputData boş değilse ekle
                dispatch(addTodo(inputData));
                setInputData('');  // input'u temizle
              }
            }}
            >
              Enter
            </button>
          </div>
          <div
          className="flex flex-col bg-sky-500 p-5 text-white text-lg"
          >
            <AnimatePresence >
              {
                myData.map((a: Todo) => (
                  <motion.div 
                  initial={{ opacity: 0, x:-50 }}
                  animate={{ opacity: 1, x:0 }}
                  exit={{ opacity: 0, x: 50 }} 
                  className="mb-5 flex flex-row justify-between" 
                  key={a.id}>

                    <h2 className="bg-slate-200 p-3 text-black rounded-lg">
                      {a.text}
                    </h2>

                    <button
                      className="ml-2 bg-red-500 p-1 rounded"
                      onClick={() => dispatch(removeTodo(a.id))}
                    >
                      Delete
                    </button>

                  </motion.div>
                ))
              }
            </AnimatePresence>
            
            
          </div>
        </div>
        <Footer />
    </div>
  )
}
