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
      <div>
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-300 mb-3 flex flex-row ">
            <div className="bg-white flex flex-col w-[100px] p-2">
                <img 
                className="rounded-md"
                src="https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?w=740&t=st=1718918140~exp=1718918740~hmac=dda49d6dd19f2f7612f7f806cb87c5b33e619e93724b06a7ab5e6d7dc0f35334" alt="" />
              
              <span className="text-sm bg-yellow-300 rounded-md pr-2">
                @DanielTruth
              </span>
            </div>
            <div className="flex flex-col justify-between px-2">
              <div className="col-span-4 bg-gray-300 p-4 w-[88%] rounded-r-md">
                {post.content}
              </div>
              <div>
                asdsa
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;