import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { AnimatePresence } from "framer-motion";

const MainLayout = () => {

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <div className="flex justify-center bg-slate-300">
          <div className="w-[80%]">
            <Outlet /> 
          </div>
        </div>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

export default MainLayout;