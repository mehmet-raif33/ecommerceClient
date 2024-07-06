import { NavLink } from "react-router-dom"

const NavLinkList = [
  
  {
    path: '/homepage',
    name: 'Homepage'
  },
  {
    path: '/profile',
    name: 'Profile',
  },
  {
    path: '/chat',
    name: 'Chat'
  },
  {
    path: '/liveflow',
    name: 'Liveflow'
  },
]

export const Navbar = ( ) => {
  return (
    <nav className="flex justify-between w-full bg-sky-100 text-slate-200 h-16 text-lg sticky top-0">
        <div className="mx-10 my-auto">
          <img className="h-[40px]" src="/images/website_logo_background_removed.png" alt="sdf" />
        </div>
        <div className="mx-10 my-auto">
          {
            NavLinkList.map((a) => (
              <NavLink to={a.path} className='ml-4 text-slate-700 font-semibold' >
                {a.name}
              </NavLink>
            ))
          }
        </div>
        
    </nav>
  )
}
