import { NavLink } from "react-router-dom"
import { useEffect } from "react"
import { useAppSelector } from "../Hooks/ReduxHooks"
import website_logo_background_removed from '../Assets/images/website_logo_background_removed.png'
import addUser from '../Assets/images/addUser.png'
import addUserClicked from '../Assets/images/addUserClicked.png'
import profile from '../Assets/images/profile.png'
import profileClicked from '../Assets/images/profileClicked.png'
import homepage from '../Assets/images/homepage.png'
import homepageClicked from '../Assets/images/homepageClicked.png'
import trend from '../Assets/images/trend.png'
import trendClicked from '../Assets/images/trendClicked.png'
import chat from '../Assets/images/chat.png'
import chatClicked from '../Assets/images/chatClicked.png'


const LogInNavLinkList = [
  
  {
    path: '/',
    ActiveImageUrl: homepageClicked,
    PasifImageUrl: homepage
  },
  {
    path: '/profile',
    ActiveImageUrl: profileClicked,
    PasifImageUrl: profile
  },
  {
    path: '/chat',
    ActiveImageUrl: chatClicked,
    PasifImageUrl: chat
  },
  {
    path: '/liveflow',
    ActiveImageUrl: trendClicked,
    PasifImageUrl: trend
  },
]

const LogOutNavLinkList = [
  
  {
    path: '/homepage',
    ActiveImageUrl: homepageClicked,
    PasifImageUrl: homepage
  },
  {
    path: '/auth',
    ActiveImageUrl: addUserClicked,
    PasifImageUrl: addUser
  },
  {
    path: '/liveflow',
    ActiveImageUrl: trendClicked,
    PasifImageUrl: trend
  },
]

export const Navbar = ( ) => {
  const logData = useAppSelector(state => state.UserInfo.logStatement)
  useEffect(() => {

  },[logData])

  return (
    <nav 
    className="flex justify-center items-center md:justify-between z-20 bg-sky-100 text-slate-200 md:h-16 h-14 text-lg fixed bottom-0 w-full md:top-0" 
    >
        
        <div className="md:mx-10 md:my-auto md:block hidden">
          <img className="h-[40px]" src={website_logo_background_removed} alt="sdf" />
        </div>

        <div className="md:mx-10 w-full md:w-auto justify-around md:justify-center md:my-auto flex flex-row items-center">
          {
            logData ? 
            LogInNavLinkList.map((a) => (
              <NavLink
                to={a.path}
                key={Math.random()}
                className={({ isActive }) => isActive ? ' active' : 'inactive'}
              >
                  {({ isActive }) => (
                    <img src={isActive ? a.ActiveImageUrl : a.PasifImageUrl} alt="About" 
                    className="md:h-[40px] h-[35px] ml-3"
                    />
                  )}
              </NavLink>
            ))
            :
            LogOutNavLinkList.map((a) => (
              <NavLink
                to={a.path}
                key={Math.random()}
                className={({ isActive }) => isActive ? 'active' : 'inactive'}
              >
                  {({ isActive }) => (
                    <img 
                    src={isActive ? a.ActiveImageUrl : a.PasifImageUrl} alt="About" 
                    className="md:h-[35px] h-[20px] ml-3"
                    />
                  )}
              </NavLink>
            ))
          }
        </div>
        
    </nav>
  )
}
