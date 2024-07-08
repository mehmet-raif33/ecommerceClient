import { Link, Outlet } from "react-router-dom"
import ProfileImage from '../Assets/images/profileImage.jpg'

const Profile = () => {

  
  
  
  const suggestions = [
    {
      profilePicture: '',
      username: ''
    }
  ]
  const recentActivity = [
    {
      description:'',
      time:''
    }
  ]

  return (
    <div className="h-[1000px] bg-slate-200" >

      <div className="header flex flex-col items-center p-4 bg-white shadow-md">
        <img src={ProfileImage} alt="Profile Picture" className="w-24 h-24 rounded-full" />
        <h1 className="text-2xl font-bold mt-2">mehmetraif33</h1>
        <p className="text-sm text-gray-600 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum, asperiores quas iure sunt aut recusandae voluptatibus nostrum perferendis itaque obcaecati? Numquam inventore assumenda dignissimos sapiente corrupti, velit maxime nisi.</p>
        <div className="flex mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit Profile</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">Follow</button>
        </div>
      </div>

      <div className="tabs flex justify-around mt-6 bg-gray-100 p-2 rounded-md shadow-sm">
        <Link to='userpost' className="flex-1 text-center py-2">Posts</Link>
        <Link to='followers' className="flex-1 text-center py-2">Followers</Link>
        <Link to='following' className="flex-1 text-center py-2">Following</Link>
        <Link to='about' className="flex-1 text-center py-2">About</Link>
        <Link to='settings' className="flex-1 text-center py-2">Settings</Link>
      </div>

      <div className="main-content mt-6">

        <Outlet />

      </div>

      <div className="sidebar hidden md:block w-1/4 ml-6 mt-6">
        <div className="suggestions bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-bold mb-4">Suggestions</h2>
          {suggestions.map(user => (
            <div className="suggestion flex items-center mb-4">
              <img src={user.profilePicture} alt={user.username} className="w-10 h-10 rounded-full" />
              <div className="ml-4">
                <h3 className="text-md font-bold">{user.username}</h3>
                <button className="bg-blue-500 text-white px-2 py-1 rounded-md mt-2">Follow</button>
              </div>
            </div>
          ))}
        </div>

        <div className="recent-activity bg-white p-4 shadow-md rounded-md mt-6">
          <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
          {recentActivity.map(activity => (
            <div className="activity mb-4">
              <p className="text-sm text-gray-600">{activity.description}</p>
              <p className="text-xs text-gray-400">{activity.time}</p>
            </div>
          ))}
        </div>

        <div className="advertisements bg-white p-4 shadow-md rounded-md mt-6">
          <h2 className="text-lg font-bold mb-4">Advertisements</h2>
          {/* Add advertisement components here */}
        </div>
      </div>

    </div>
  )
}

export default Profile