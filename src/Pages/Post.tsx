
import goBackIcon from '../Assets/images/goBackIcon.png'
import { useNavigate } from 'react-router-dom';
import PostForPostPage from '../components/PostForPostPage';
import Comment from '../components/Comment';

const Post = (  ) => {

  const navigate = useNavigate();

 

  return (
    <div className="bg-red-200 shadow-md rounded-md pb-96">
      
      <div className=' pl-4 justify-start items-center bg-slate-300'>
        
        <div className=' cursor-pointer flex flex-row w-24 p-1 rounded-md  ' onClick={ () => navigate(-1) }>
          <img src={goBackIcon} alt='Get Back' className='w-8' />
          <h2 className='text-gray-700 font-semibold text-lg'>
            Back
          </h2>
        </div>
        
      </div>

      <PostForPostPage />

      <div className='px-10 py-5 bg-zinc-500 text-white'>
        <label className='text-md font-bold'>
          You Can Give It An Answer? <span className='text-[10px] font-thin'>(Max 250 Characters)</span>
        </label>
        <form className='flex flex-col items-end mt-3 text-slate-500'>
          <input type='search' className='text-lg w-full p-2 outline-none rounded-md' />
          <input type='submit' value='Join the party!' className=' text-md p-2 w-30 mt-5 font-bold bg-yellow-400 rounded-md cursor-pointer' />
        </form>
      </div>

      <div className='p-3'>
        <label className='text-lg font-semibold'>
          Comments  <span className='text-[10px] font-thin'>25 Comments</span>
        </label>
      </div>

      <Comment />
      <hr />
      <Comment />
      <hr />
      <Comment />
      <hr />
      <Comment />
      <hr />
    </div>
  )
}

export default Post