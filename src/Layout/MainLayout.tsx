import { Navbar } from "../components/Navbar"
import { RouterProvider } from "react-router-dom"
import MainRouter from "../Routers/Route"
import { Footer } from "../components/Footer"

const MainLayout = ( ) => {

  return (
    <div>
      <Navbar />
      <div className="flex justify-center bg-slate-300">
        <RouterProvider router={MainRouter} />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout