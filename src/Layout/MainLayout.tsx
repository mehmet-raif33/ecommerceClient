import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { AnimatePresence , motion } from "framer-motion";

const MainLayout = () => {

  
  return (
    <div>
      <Navbar />

        <div className="flex justify-center bg-slate-300">
          
          <AnimatePresence mode="wait">
            <motion.div
            className="w-[80%]"
            >
              <Outlet /> 
            </motion.div>
          </AnimatePresence>
        </div>
      
      <Footer />
    </div>
  );
}

export default MainLayout;