
import ProfileImage from '../Assets/images/profileImage.jpg'

export const Posts = () => {

    const posts = [
        {
          image: ProfileImage,
          description: ''
        }
    ]

    return (
        <div className="posts-grid grid grid-cols-3 gap-4">
            {posts.map(post => (
                <div key={Math.random()}  className="post w-full h-48 bg-gray-200">
                    <img src={post.image} alt={post.description} className="w-full h-full object-cover" />
                </div>
            ))}
        </div>
    )
}
