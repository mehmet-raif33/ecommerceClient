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
          <div key={post.id} className="bg-gray-300 flex flex-col mb-3">
            <div className="bg-white flex flex-row">
              <div className="col-span-16 bg-gray-200 w-[12%] rounded-l-md">
                <img 
                className="rounded-md"
                src="https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?w=740&t=st=1718918140~exp=1718918740~hmac=dda49d6dd19f2f7612f7f806cb87c5b33e619e93724b06a7ab5e6d7dc0f35334" alt="" />
              </div>
              <div className="col-span-4 bg-gray-300 p-4 w-[88%] rounded-r-md">
                {post.content}
              </div>
            </div>
            <div className="flex flex-row justify-between px-2">
              <span className="">
                @DanielTruth
              </span>
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