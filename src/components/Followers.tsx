
import ProfileImage from '../Assets/images/profileImage.jpg'

export const Followers = () => {

    const followers = [
        {
          profilePicture: ProfileImage,
          username: 'jessica',
          bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
          profilePicture: ProfileImage,
          username: 'jessica',
          bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
          profilePicture: ProfileImage,
          username: 'jessica',
          bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
          profilePicture: ProfileImage,
          username: 'jessica',
          bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        }
      ]

    return (
        <div className="followers-list hidden">
            {followers.map(follower => (
              <div key={Math.random()}  className="follower flex items-center p-4 border-b border-gray-200">
                  <img src={follower.profilePicture} alt={follower.username} className="w-12 h-12 rounded-full" />
                  <div className="ml-4">
                      <h2 className="text-lg font-bold">{follower.username}</h2>
                      <p className="text-sm text-gray-600">{follower.bio}</p>
                  </div>
              </div>
            ))}
        </div>
    )
}
