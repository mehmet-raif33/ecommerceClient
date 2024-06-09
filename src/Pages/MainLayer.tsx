import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export const MainLayer = () => {


  return (
    <div className="bg-sky-200">
        <Navbar />
        <div className="h-[800px]">
          
            
            <input className="p-2 rounded-md m-3 outline-none" type="search" placeholder="Enter a value"/>
            <button 
            className="bg-sky-600 p-2 rounded-md text-white" >
              Add new customer
            </button>
            
      
            
        </div>
        <Footer />
    </div>
  )
}
