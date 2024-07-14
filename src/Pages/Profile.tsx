import { Link, Outlet , useNavigate } from "react-router-dom"
import ProfileImage from '../Assets/images/profileImage.jpg'

const Profile = () => {

  const navigate = useNavigate();

  const goToDefaultChild = () => {
    navigate('/profile');
  };

  return (
    <div className="h-[1000px] bg-slate-200" >

      <div className="header flex flex-col py-8 items-center bg-white shadow-md">
        <div className="flex flex-row justify-center p-4 w-[700px]"> 
          <div className="flex flex-row items-center">
            <img src={ProfileImage} alt="Profile Picture" className="w-[140px] h-[140px] mr-10 rounded-full" />
            
          </div>
          <div className=" w-96 text-left">
            <h1 className=" text-2xl text-left font-bold">mehmetraif33</h1>
            <p className="text-sm text-left text-gray-600 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum, asperiores quas iure sunt aut recusandae voluptatibus nostrum perferendis itaque obcaecati?</p>
            <div className="flex mt-8">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit Profile</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">Follow</button>
            </div>
          </div>
          
        </div> 
      </div>

      <div className="tabs flex justify-around border-y-2 border-y-cyan-300 bg-gray-100 p-2shadow-sm">
        <button onClick={goToDefaultChild} className="flex-1 text-center py-2">Posts</button>
        <Link to='followers' className="flex-1 text-center py-2">Followers</Link>
        <Link to='following' className="flex-1 text-center py-2">Following</Link>
        <Link to='about' className="flex-1 text-center py-2">About</Link>
        <Link to='settings' className="flex-1 text-center py-2">Settings</Link>
      </div>

      <div className="main-content mt-6">

        <Outlet />

      </div>

    </div>
  )
}

export default Profile