
const Home = () => {


  return (
    <div className="grid grid-cols-12">
      <div className="grid col-span-7 bg-slate-50 p-1">
        <video width="100%" controls className="mt-2 mx-2">
          <source src="videos/newYork.mp4" type="video/mp4" />
        </video>
        <label className="text-2xl m-3">
          Killer is shooting the other people!!
        </label>
      </div>
      <div className="grid col-span-5 p-3 bg-red-700 text-white rounded-md m-3 justify-center items-center" >
        <div className="w-[170px] h-[200px]">
          <h1 className="text-center text-lg">
            ATTENTION!!
          </h1>
          <p className="text-sm italic">
            This video contains very bloody contents! If you have any health problem, you must leave this page and never come back! We are not take a responsibilities that can be happen!
          </p>          
        </div>
        
        
      </div>

    </div>
  )
}

export default Home