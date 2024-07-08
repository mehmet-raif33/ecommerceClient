

import ProfileImage from '../Assets/images/profileImage.jpg'
export const Following = () => {

    const following = [
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
        },
        {
          profilePicture: ProfileImage,
          username: 'jessica',
          bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        }
      ]

    return (
        <div className="following-list hidden">
          {following.map(user => (
            <div key={Math.random()} className="user flex items-center p-4 border-b border-gray-200">
              <img src={user.profilePicture} alt={user.username} className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h2 className="text-lg font-bold">{user.username}</h2>
                <p className="text-sm text-gray-600">{user.bio}</p>
              </div>
            </div>
          ))}
        </div>
    )
}