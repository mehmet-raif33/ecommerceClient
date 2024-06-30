interface Post {
  id: number;
  content: string;
}

interface UserPostsProps {
  posts: Post[];
  userImage: String
}

const UserPosts: React.FC<UserPostsProps> = ({ posts, userImage }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Posts</h3>
      <div>
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-300 mb-3 flex flex-row p-2 ">
            
            
            <div className="flex flex-col justify-center w-[15%] md:w-[12%] lg:w-[10%] p-2">
              <div className="flex flex-col items-center">
                <img 
                className="rounded-full"
                src={userImage} alt="" />
                
                <span className="text-[12px]">
                  @DanielTruth
                </span>
              </div>
            </div>


            <div className="flex flex-col w-[85%]  lg:w-[90%] md:w-[88%] justify-between px-2">
              <div className="col-span-4 bg-gray-300 p-4 w-[88%] rounded-r-md">
                <p className="sm:text-[14px]">
                  {post.content} 
                </p>
               
              </div>
              <div className="flex justify-end pr-5">
                <button 
                className="flex ml-3 hover:scale-105 transition-all"
                >
                  <img 
                  src="/images/icons8-up-48.png" 
                  className="w-5"
                  />
                  <span>
                    35
                  </span>
                </button>

                <button 
                className="ml-3 flex items-center hover:scale-105 transition-all"
                >
                 <img 
                  src="/images/icons8-down-50.png" 
                  className="w-5"
                  />
                  <span>
                    29
                  </span>
                </button>

                <button 
                className="ml-3 flex hover:scale-105 transition-all focus-within:text-white"
                >
                  <img 
                  src="/images/icons8-attention-48.png" 
                  className="w-5"
                  />
                </button>

              </div>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;