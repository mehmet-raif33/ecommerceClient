import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import ScrollToTop from "../components/ScroolToTop";
const MainLayout = () => {

  

  return (
    <div className="">
      <Navbar />

        <div className="flex justify-center bg-slate-300 mb-20">
          
          <div
          className="lg:w-[70%] md:w-[85%] sm:w-[100%] md:mt-16"
          >
            <ScrollToTop />
            <Outlet />
          </div>
        </div>
      
      <Footer />
    </div>
  );
}

export default MainLayout;