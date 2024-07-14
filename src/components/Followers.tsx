
import ProfileImage from '../Assets/images/profileImage.jpg'

const followers = [
  {
    profilePicture: ProfileImage,
    username: 'Jessica',
  },
  {
    profilePicture: ProfileImage,
    username: 'Jessica',
  },
  {
    profilePicture: ProfileImage,
    username: 'Jessica',
  },
  {
    profilePicture: ProfileImage,
    username: 'Jessica',
  },
  {
    profilePicture: ProfileImage,
    username: 'Jessica',
  }
]

const Followers = () => {


    return (
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-semibold mb-4">Followers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            { followers.map((follower) => (
              
              <div className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-between" >
                <div className="ml-4 flex items-center">
                  <img src={follower.profilePicture} alt={follower.username} className="w-12 h-12 rounded-full mr-3" />
                  <p className="font-semibold text-lg">{follower.username}</p>
                </div>
                <button className="bg-green-500 text-white py-1 px-3 rounded-lg">
                  Takip Et
                </button>
              </div>

            ))}

          </div>
        </div>
    )
}

export default Followers;