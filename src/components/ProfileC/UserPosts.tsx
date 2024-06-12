interface Post {
  id: number;
  content: string;
}

interface UserPostsProps {
  posts: Post[];
}

const UserPosts: React.FC<UserPostsProps> = ({ posts }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="bg-white p-4 rounded-lg shadow mb-4">
            {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;