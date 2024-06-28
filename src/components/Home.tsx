
const Home = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="grid col-span-10 bg-slate-50 p-2">
        <video width="100%" controls>
          <source src="public/5bfl15.mp4" type="video/mp4" />
        </video>
        <label className="text-2xl m-3">
          Killer is shooting the other people!!
        </label>
      </div>
      <div className="grid col-span-2">
        <h1>
          KSJDSALKsad
        </h1>
      </div>

    </div>
  )
}

export default Home