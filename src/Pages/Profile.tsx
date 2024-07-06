import { Link, Outlet , useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

const Profile = () => {
  

  const location = useLocation();

  return (
    <motion.div 
    className="h-[1000px] bg-slate-200"
    initial={{
      x:10
    }}
    animate={{
      x:0
    }}
    transition={{
      duration: 0.5
    }}
    >
      Profile
      <Link to='settings' >
        Settings
      </Link>

    <AnimatePresence mode="wait">
  
      <motion.div
      key={location.pathname}
      initial={{
        opacity: 0,
        x: 50
      }}
      animate={{
        opacity:1,
        x:0
      }}
      transition={{
        duration: 0.5
      }}
      >
        <Outlet />
      </motion.div>
      
    </AnimatePresence>


    </motion.div>
  )
}

export default Profile